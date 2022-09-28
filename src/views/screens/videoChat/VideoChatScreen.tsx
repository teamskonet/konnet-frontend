import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { BsCameraVideo, BsCameraVideoOff, BsMic, BsMicMute } from 'react-icons/bs'
import { HiOutlinePhone } from 'react-icons/hi'
import {  IoAdd } from 'react-icons/io5'
import { MdPresentToAll } from 'react-icons/md'
import {  VscRecord } from 'react-icons/vsc'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import useQuery from '../../../hooks/useQuery'
import useSocket from '../../../hooks/useSocket'
import { Wrapper, Content, HeadBar, VideoWrapper, AddPeople, ControlItem, ControlWrapper,  } from './style'

const VideoChatScreen: React.FC = ()  => {
    const { socket, sendPing } = useSocket()
    // const [hasStartedVideoSession, setHasStartedVideoSession] = useState<boolean>(false)
    const location: any = useLocation();
    const userProfile: any = useSelector((state: any) => state.user);
    const [callSettingsState, setCallSettingsState] = useState<{
        video: boolean,
        audio: boolean
    }>({
        video: true,
        audio: true,
    })
    const query = useQuery();
    let roomId = query.get('room')
    // const roomId = location.state.roomId
    let isRoomOwner = false;



    const chekForVideoRoom = async () => {
        if (location?.state?.owner) {
            isRoomOwner = true
            startWebCam()
            return;
        }

        const res = await axios.get("https://loftywebtech.com/gotocourse/api/v1/room/video/"+ roomId)
        console.log("checked room: ", res.data)

        if (res.data.data.userId == userProfile.userId) {
            isRoomOwner = true

            startWebCam()
            
        } else {
            isRoomOwner = false
            answerCall(res.data.data.offer)
        }
    }




    console.log("roomId: ", roomId)
    // const myVideoRef = useRef<any>()

    // const handleVideoRoom = () => {
    //     console.log("started video init")
    //     const myVideo = document.createElement('video')
    //     myVideo.muted = true;

    //     navigator.mediaDevices.getUserMedia({
    //         video: true,
    //         audio: true
    //     }).then(stream => {
    //         addVideoStream(myVideo, stream)


    //         socket.on('user-connected', userId => {
    //             console.log("user connected: ", userId)
    //             connectToNewUser(userId, stream)
    //         })
    //     })
    // }

    // const connectToNewUser = (userId: String, stream: any) => {

    // }

    


    // const addVideoStream = (video: any, stream: any) => {
    //     const videoWrapper: any = document.querySelector('.video-section')
    //     video.srcObject = stream
    //     video.addEventListener('loadedmetadata', () => {
    //         video.play()

    //         console.log("video playing ...")
    //     })
    //     videoWrapper.append(video)
    //     console.log("ended video init")
        
    // }

    const servers = {
        iceServers: [
          {
            urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
          },
        ],
        iceCandidatePoolSize: 10,
    };
    const pc = new RTCPeerConnection(servers);
    let localStream: MediaStream | null = null;
    let remoteStream: MediaStream | null = null;
    const offerCandidates = []
    const answerCandidates = []

    const answerCall = async (offer: any) => {
        console.log("caller offerCandidate: ", offer)
        const videoWrapper = document.querySelector('.video-section')
        const myVideo = document.createElement('video')
        const remoteVideo = document.createElement('video')
        myVideo.muted = true;
        remoteVideo.muted = false;

        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true})
        remoteStream = new MediaStream()

        localStream.getTracks().forEach((track) => {
            //  if (!callSettingsState.audio) {
            //     if(track.kind == "audio") {
            //         track.enabled = false
            //     }
            // }

            // if (!callSettingsState.video) {
            //     if(track.kind == "video") {
            //         track.enabled = false
            //     }
            // }

            console.log("answer streaming local video")

            pc.addTrack(track, localStream!);
            
        });
        pc.ontrack = event => {
            event.streams[0].getTracks().forEach(track => {
                remoteStream?.addTrack(track);
            });
        }


        myVideo.srcObject = localStream
        myVideo.addEventListener('loadedmetadata', () => {
            myVideo.play()

            console.log("local video playing ...")
        })

        remoteVideo.srcObject = remoteStream
        remoteVideo.addEventListener('loadedmetadata', () => {
            remoteVideo.play()

            console.log("remote video playing ...")
        })

        videoWrapper?.append(myVideo)
        videoWrapper?.append(remoteVideo)


        pc.onicecandidate = event => {
            if (event.candidate) {
                answerCandidates.push(event.candidate.toJSON())
                socket.emit("add-answer-candidate", roomId, event.candidate.toJSON())
            }
        }
        const offerDescription = offer
        await pc.setRemoteDescription(new RTCSessionDescription(offerDescription))

        const answerDescription = await pc.createAnswer();
        await pc.setLocalDescription(answerDescription);

        const answer = {
            type: answerDescription.type,
            sdp: answerDescription.sdp
        }
        socket.emit("answered-call", roomId, answer)
        socket.on('user-added-offer-candidate', (offerCandidate) => {
            console.log("user-added-offer-candidate: ", offerCandidate)
            const candidate = new RTCIceCandidate(offerCandidate)
            pc.addIceCandidate(candidate)
        })
    }

    const togggleVideo = async () => {
        const myVideo: HTMLVideoElement | null = document.querySelector('.client-local-stream')

        if (callSettingsState.video) {
            localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true})
            console.log('====================================');
            console.log(localStream);
            console.log('====================================');
            localStream.getTracks().forEach((track) => {
                pc.addTrack(track, localStream!);
            });
            myVideo?.setAttribute("autoplay", "")
            myVideo?.setAttribute("playsInline", "")

            let videoTrack = localStream?.getTracks().find(track => track.kind == 'video');
            setTimeout(() => {
                videoTrack!.enabled = false
            }, 5000)
    
            myVideo!.srcObject = localStream
            myVideo!.addEventListener('loadedmetadata', () => {
                myVideo!.play()
            })

            setCallSettingsState({...callSettingsState, video: false})
        } else {
            localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true})
            console.log('====================================');
            console.log(localStream);
            console.log('====================================');
            localStream.getTracks().forEach((track) => {
                pc.addTrack(track, localStream!);
            });
            myVideo?.setAttribute("autoplay", "")
            myVideo?.setAttribute("playsInline", "")
    
            myVideo!.srcObject = localStream
            myVideo!.addEventListener('loadedmetadata', () => {
                myVideo!.play()
            })
            setCallSettingsState({...callSettingsState, video: true})
        }
    }
    
    const togggleAudio = async () => {
        let audioTrack = localStream?.getTracks().find(track => track.kind == 'audio');

        if (audioTrack?.enabled) {
            audioTrack.enabled = false;
            setCallSettingsState({...callSettingsState, audio: false})
        } else {
            localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true})
            console.log('====================================');
            console.log(localStream);
            console.log('====================================');
            localStream.getTracks().forEach((track) => {
                pc.addTrack(track, localStream!);
            });
            const myVideo: HTMLVideoElement | null = document.querySelector('.client-local-stream')
            myVideo?.setAttribute("autoplay", "")
            myVideo?.setAttribute("playsInline", "")
    
            myVideo!.srcObject = localStream
            myVideo!.addEventListener('loadedmetadata', () => {
                myVideo!.play()
            })
        }
    }

    const startWebCam = async () => {
        const videoWrapper = document.querySelector('.video-section')
        const myVideo: HTMLVideoElement | null = document.querySelector('.client-local-stream')
        myVideo?.setAttribute("autoplay", "")
        myVideo?.setAttribute("playsInline", "")
        const remoteVideo = document.createElement('video')
        remoteVideo.setAttribute("autoplay", "")
        remoteVideo.setAttribute("playsInline", "")
        myVideo!.muted = true;
        remoteVideo.muted = false;

        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true})

        console.log('====================================');
        console.log(localStream);
        console.log('====================================');
        remoteStream = new MediaStream()

        localStream.getTracks().forEach((track) => {
            pc.addTrack(track, localStream!);
        });

        pc.ontrack = event => {
            console.log("remote event: ", event)
            event.streams[0].getTracks().forEach(track => {
                console.log("remote streaming: ", track)
                remoteStream?.addTrack(track);
            });
        }
    
        myVideo!.srcObject = localStream
        myVideo!.addEventListener('loadedmetadata', () => {
            myVideo!.play()
        })

        remoteVideo.srcObject = remoteStream
        remoteVideo.addEventListener('loadedmetadata', () => {
            remoteVideo.play()
        })

        videoWrapper?.append(remoteVideo)

        pc.onicecandidate = event => {
            if (event.candidate) {
                offerCandidates.push(event.candidate.toJSON())
                socket.emit("add-offer-candidate", 
                        roomId,
                        event.candidate.toJSON()
                    )
            }
        }

        const offerDescription = await pc.createOffer();
        await pc.setLocalDescription(offerDescription)

        const offer = {
            sdp: offerDescription.sdp,
            type: offerDescription.type,
        };

        const res = await axios.patch("https://loftywebtech.com/gotocourse/api/v1/room/video/offer/update", {
            roomId: roomId,
            offer: offer
        })
        console.log("offer: ", res.data.data)

        let answeredCall = false;

        

        socket.on('user-connected', (userData) => {
            console.log("user connected: ", userData)
        })
    
        socket.on('new-user-answered-call', (answer) => {
            console.log("user answer: ", answer)


            if (!pc.currentRemoteDescription) {
                const answerDescription = new RTCSessionDescription(answer)
                pc.setRemoteDescription(answerDescription)
            }
        })

        socket.on('new-user-added-answer-candidate', (answerCandidate) => {
            console.log("user answerCandidate: ", answerCandidate)
            const candidate = new RTCIceCandidate(answerCandidate)
            pc.addIceCandidate(candidate)
        })
        
    }

    const joinRoom = () => {
        socket.emit("join-video-room", 
            roomId,
            userProfile.userId
        )
    }

    const initRoom = () => {
        if (userProfile.userId != "") {
            chekForVideoRoom()
        }
    }

    useEffect(() => {
        joinRoom()
        initRoom()
    }, [userProfile.userId])
    return (
        <Wrapper>
            <HeadBar>
                <div className="banner">
                    <img src="/assets/svg/logo.svg" alt="logo" />
                    <Link to="/">TeamKonnect</Link>
                </div>
                <div className="head-img">
                    <img src={userProfile.profileImg} alt="avatar" />
                </div>
            </HeadBar>
            <Content>
                <VideoWrapper className="video-section">
                    <video className="client-local-stream" src=""></video>
                    {/* <CallBlock>
                        <img src="https://images.unsplash.com/photo-1603112579965-e24332cc453a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="person in video call" />
                        <span>Vinay Gupta</span>
                    </CallBlock>
                    <CallBlock>
                        <img src="https://images.unsplash.com/flagged/photo-1577125543470-61d192113f10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="person in video call" />
                        <span>Vinay Gupta</span>
                    </CallBlock>
                    <CallBlock>
                        <img src="https://images.unsplash.com/photo-1595951960408-a7259baee032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2444&q=80" alt="person in video call" />
                        <span>Vinay Gupta</span>
                    </CallBlock>
                    <CallBlock>
                        <img src="https://images.unsplash.com/photo-1612000529646-f424a2aa1bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="person in video call" />
                        <span>Vinay Gupta</span>
                    </CallBlock>
                    <UserCallBlock>
                        <img src="https://images.unsplash.com/photo-1597199204011-e6e704645213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" alt="person in video call" />
                    </UserCallBlock> */}
                    <ControlWrapper>
                        <ControlItem>
                            <VscRecord />
                        </ControlItem>
                        <ControlItem  onClick={togggleAudio}>
                            {callSettingsState.audio ? <BsMic /> : <BsMicMute />}
                        </ControlItem>
                        <ControlItem>
                            <MdPresentToAll />
                        </ControlItem>
                        <ControlItem onClick={togggleVideo}>
                            {callSettingsState.video ? <BsCameraVideo /> : <BsCameraVideoOff />}
                        </ControlItem>
                        <ControlItem>
                            <HiOutlinePhone />
                        </ControlItem>
                    </ControlWrapper>
                    <AddPeople>
                        <IoAdd />
                        <span>Add people</span>
                    </AddPeople>
                </VideoWrapper>
            </Content>
        </Wrapper>
    )
}

export default VideoChatScreen