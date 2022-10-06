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
import { Wrapper, Content, HeadBar, VideoWrapper, AddPeople, ControlItem, ControlWrapper, CallBlock, UserCallBlock,  } from './style'

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


    const videoWrapper = document.querySelector('.video-section')
    
    const addNewUser = () => {
        console.log("added remote stream")
        remoteStream = new MediaStream()
        const remoteVideoWrapper = document.createElement('div')
        remoteVideoWrapper.classList.add("remote-users")
        const remoteVideo = document.createElement('video')
        remoteVideoWrapper.appendChild(remoteVideo)
        remoteVideo.setAttribute("autoplay", "")
        remoteVideo.setAttribute("playsInline", "")
        remoteVideo.muted = false;

        remoteVideo.srcObject = remoteStream
        remoteVideo.addEventListener('loadedmetadata', () => {
            remoteVideo.play()
        })

        videoWrapper?.append(remoteVideoWrapper)
    }

    const answerCall = async (offer: any) => {
        console.log("caller offerCandidate: ", offer)
        const myVideo: HTMLVideoElement | null = document.querySelector('.client-local-stream')
        myVideo?.setAttribute("autoplay", "")
        myVideo?.setAttribute("playsInline", "")
        myVideo!.muted = true;


        addNewUser()

        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true})

        localStream.getTracks().forEach((track) => {
            pc.addTrack(track, localStream!);
        });
        pc.ontrack = event => {
            console.log("got remote stream track")
            event.streams[0].getTracks().forEach(track => {
                remoteStream?.addTrack(track);
            });
        }


        myVideo!.srcObject = localStream
        myVideo!.addEventListener('loadedmetadata', () => {
            myVideo!.play()

            console.log("local video playing ...")
        })


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
        // addNewUser()
        socket.on('user-added-offer-candidate', (offerCandidate) => {
            console.log("user-added-offer-candidate: ", offerCandidate)
            const candidate = new RTCIceCandidate(offerCandidate)
            pc.addIceCandidate(candidate)
        })
    }

    const togggleVideo = async () => {

        if (callSettingsState.video) {
            setVideoToggle({video: false, audio: callSettingsState.audio})
            setCallSettingsState({...callSettingsState, video: false})
        } else {
            setVideoToggle({video: true, audio: true})
            setCallSettingsState({...callSettingsState, video: callSettingsState.audio})
        }
    }

    const setVideoToggle = async ({video, audio} : {video: boolean, audio: boolean}) => {
        const myVideo: HTMLVideoElement | null = document.querySelector('.client-local-stream')
        localStream = await navigator.mediaDevices.getUserMedia({ video: video, audio: audio})
      
        myVideo?.setAttribute("autoplay", "")
        myVideo?.setAttribute("playsInline", "")

        myVideo!.srcObject = localStream
        myVideo!.addEventListener('loadedmetadata', () => {
            myVideo!.play()
        })
    }
    
    const togggleAudio = async () => {

        if (callSettingsState.audio) {
            setVideoToggle({video: callSettingsState.video, audio: false})
            setCallSettingsState({...callSettingsState, audio: false})
        } else {
            setVideoToggle({video: callSettingsState.video, audio: true})
            setCallSettingsState({...callSettingsState, audio: true})
        }
    }

    const startWebCam = async () => {
        const myVideo: HTMLVideoElement | null = document.querySelector('.client-local-stream')
        myVideo?.setAttribute("autoplay", "")
        myVideo?.setAttribute("playsInline", "")
        myVideo!.muted = true;

        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true})

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
        socket.on('user-connected', (userData) => {
            console.log("user connected: ", userData)
        })
    
        socket.on('new-user-answered-call', (answer) => {
            addNewUser()
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
                    {/* <div className="remote-users">
                        <img src="https://images.unsplash.com/photo-1603112579965-e24332cc453a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="person in video call" />
                        <span>Vinay Gupta</span>
                    </div> */}
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
                    </CallBlock> */}
                    <UserCallBlock>
                        <video className="client-local-stream" src=""></video>
                    </UserCallBlock>
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