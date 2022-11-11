import axios from 'axios'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { BsCameraVideo, BsCameraVideoOff, BsMic, BsMicMute } from 'react-icons/bs'
import { HiOutlinePhone } from 'react-icons/hi'
import {  IoAdd } from 'react-icons/io5'
import { MdPresentToAll } from 'react-icons/md'
import {  VscRecord } from 'react-icons/vsc'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import useQuery from '../../../hooks/useQuery'
import useSocket from '../../../hooks/useSocket'
import { Wrapper, Content, HeadBar, VideoWrapper, AddPeople, ControlItem, ControlWrapper, UserCallBlock, UserPresentation, StreamWrapper,  } from './style'
import { MediaConnection, Peer } from "peerjs";
import CONFIG from '../../../Utils/appConst'

const VideoChatScreen: React.FC = ()  => {
    const { socket, sendPing } = useSocket()
    const location: any = useLocation();
    const userProfile: any = useSelector((state: any) => state.user);
    const [isPresenting, setIsPresenting] = useState<boolean>(false);
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

    const connectionUserId = useRef(userProfile.userId)

       


    const chekForVideoRoom = async () => {
        if (location?.state?.owner) {
            isRoomOwner = true
            setUpMediaScreen()
            return;
        }

        const res = await axios.get(`${CONFIG.socketUrl}/v1/room/video/${roomId}`)
        if (res.data.data.userId === userProfile.userId) {
            isRoomOwner = true

            setUpMediaScreen()
            
        } else {
            isRoomOwner = false
            setUpMediaScreen()
        }
    }
    const localStream = useRef<MediaStream | null>(null);
    let myCall: MediaConnection | undefined;
    

    const togggleVideo = async () => {
        if (callSettingsState.video) {
            handleVideoToggle({video: false, audio: callSettingsState.audio})
            setCallSettingsState({...callSettingsState, video: false})
        } else {
            handleVideoToggle({video: true, audio: true})
            setCallSettingsState({...callSettingsState, video: callSettingsState.audio})
        }
    }

    const handleVideoToggle = async ({video, audio} : {video: boolean, audio: boolean}) => {
        const enabled = localStream.current?.getVideoTracks()[0].enabled;

        if (enabled) {
            localStream.current!.getVideoTracks()[0].enabled = false;
        } else {
            localStream.current!.getVideoTracks()[0].enabled = true;
        }
    }

    const handleAudioToggle = async ({video, audio} : {video: boolean, audio: boolean}) => {
        const enabled = localStream.current?.getAudioTracks()[0].enabled;

        if (enabled) {
            localStream.current!.getAudioTracks()[0].enabled = false;
        } else {
            localStream.current!.getAudioTracks()[0].enabled = true;
        }
    }
    
    const togggleAudio = async () => {

        if (callSettingsState.audio) {
            handleAudioToggle({video: callSettingsState.video, audio: false})
            setCallSettingsState({...callSettingsState, audio: false})
        } else {
            handleAudioToggle({video: callSettingsState.video, audio: true})
            setCallSettingsState({...callSettingsState, audio: true})
        }
    }

    const videoWrapper = document.querySelector('.video-section')

    function addVideoStream(videoWrapper: any, stream: any) {
        const video: HTMLVideoElement = videoWrapper.querySelector('video')
        video.srcObject = stream
        video.addEventListener('loadedmetadata', () => {
          video.play()
        })
    }

    const setUpMediaScreen = () => {
        navigator.mediaDevices.getUserMedia({
            audio: callSettingsState.audio,
            video: callSettingsState.video,
        }).then((stream) => {
            localStream.current = stream;
            startWebCam()
        });
    }

    const presentationStream = useRef<MediaStream | null>(null);
    const presentationPeer = useRef<Peer | null>(null);
    const myPeer = useRef<Peer | null>(null);
    const presentationPeers = useRef<any>({})

    function startCapture() {
        const presentationId = "presentation-"+ connectionUserId.current
        const presentationVideo: HTMLVideoElement | null = document.querySelector('.client-presentation-stream')
         navigator.mediaDevices.getDisplayMedia({audio: false, video: true}).then((stream) => {
            presentationStream.current = stream

            presentationVideo?.setAttribute("autoplay", "")
            presentationVideo?.setAttribute("playsInline", "")
            presentationVideo!.muted = true;
            presentationVideo!.srcObject = presentationStream.current
            presentationVideo!.addEventListener('loadedmetadata', () => {
                presentationVideo!.play()
            })
            presentationPeer.current = new Peer(presentationId, {
                host: CONFIG.peerUrl,
                port: 9001,
                path: '/peer',
            });


            presentationPeer.current.on('open', userId => {
                console.log("connected to presentation room with userId: ", userId)
                socket.emit('client-presentation-started', roomId, presentationId)
            })

            presentationPeer.current.on('call', call => {
                console.log("presentation caller user: ", call.peer)
                presentationPeers.current[call.peer] = call
                call.answer(presentationStream.current!)

                // call.on('stream', userVideoStream => {
                //     console.log("remote presentation viewer sent sream: ", userVideoStream)
                // })
            })

            presentationStream.current.getTracks()[0].onended = () => {
                setIsPresenting(false)
                socket.emit('client-presentation-ended', roomId, presentationId)
            }
            setIsPresenting(true)
            
        });

        
    }

    const [remoteUserPresentingProccessing, setRemoteUserPresentingProccessing] = useState<boolean>(false)

    socket.on('user-started-presentation', (userId) => {
        console.log("A user is presenting ", userId)
        connectToRemotePresentation(userId)
        // setRemoteUserPresentingProccessing(true)
    })

    socket.on('user-ended-presentation', (userId) => {
        console.log("A user has ended presentation ", userId)
        // setRemoteUserPresentingProccessing(true)
        if (presentationPeers.current[userId]) {
            presentationPeers.current[userId].close()
            setIsPresenting(false)
            console.log("omo peer: ", presentationPeers.current)
        }
    })

    const presentationCall = useRef<MediaConnection | undefined>();
    const connectToRemotePresentation = (presentaterUserId: any) => {
        const presentationId = "presentation-"+ connectionUserId.current
        console.log(`lofty presentation id:  ${presentationId}`)
        presentationPeer.current = new Peer(presentationId, {
            host: CONFIG.peerUrl,
            port: 9001,
            path: '/peer',
        });
        presentationPeer.current.on('open', userId => {
            console.log("connected to presentation room with userId: ", userId)
        })

        presentationCall.current = presentationPeer?.current?.call(presentaterUserId, localStream.current!)
        
        setIsPresenting(true)
        presentationCall.current?.on('stream', presentationStream => {
            console.log("recevied presentation stream: ", presentationStream)
            const presentationVideo: HTMLVideoElement | null = document.querySelector('.client-presentation-stream')
            presentationVideo?.setAttribute("autoplay", "")
            presentationVideo?.setAttribute("playsInline", "")
            presentationVideo!.muted = true;
            presentationVideo!.srcObject = presentationStream
            presentationVideo!.addEventListener('loadedmetadata', () => {
                presentationVideo!.play()
            })
            setRemoteUserPresentingProccessing(false)
        })
        presentationPeers.current[presentaterUserId] = presentationCall.current
        presentationCall.current!.on('close', () => {
            setIsPresenting(false)
        })

    }
    



    const peers = useRef<any>({})
    const startWebCam = async () => {
        const myVideo: HTMLVideoElement | null = document.querySelector('.client-local-stream')
        myVideo?.setAttribute("autoplay", "")
        myVideo?.setAttribute("playsInline", "")
        myVideo!.muted = true;

        // localStream.current = await navigator.mediaDevices.getUserMedia({ video: true, audio: true})

        myPeer.current = new Peer(userProfile.userId, {
            host: CONFIG.peerUrl,
            port: 9001,
            path: '/peer',
        });

        console.log("peer: ", myPeer.current)
        myPeer.current.on('open', userId => {
            console.log("connected to room with userId: ", userId)
            socket.emit('join-video-room', roomId, userId)
        })
        myPeer.current.on('call', call => {
            call.answer(localStream.current!)
            const remoteVideoWrapper = document.createElement('div')
            remoteVideoWrapper.classList.add("remote-users")
            const remoteVideo = document.createElement('video')
            remoteVideoWrapper.appendChild(remoteVideo)
            videoWrapper?.append(remoteVideoWrapper)

            console.log("caller user: ", call.peer)

            peers.current[call.peer] = call
            
            call.on('stream', userVideoStream => {
                addVideoStream(remoteVideoWrapper, userVideoStream)
            })

            call?.on('close', () => {
                remoteVideoWrapper.remove();
            })
        })

        myVideo!.srcObject = localStream.current
        myVideo!.addEventListener('loadedmetadata', () => {
            myVideo!.play()
        })

        socket.on('new-user-join-video-room', (userId) => {
            console.log("new user joined room: ", userId)
            connectToNewUser(userId, localStream.current)
        })

        const connectToNewUser = (userId: any, stream: any) => {
            myCall = myPeer.current?.call(userId, stream)

            const remoteVideoWrapper = document.createElement('div')
            remoteVideoWrapper.classList.add("remote-users")
            const remoteVideo = document.createElement('video')
            remoteVideoWrapper.appendChild(remoteVideo)
            videoWrapper?.append(remoteVideoWrapper)


            myCall?.on('stream', userVideoStream => {
                console.log("recevied user video stream: ", userVideoStream)
                addVideoStream(remoteVideoWrapper, userVideoStream)
            })
            myCall?.on('close', () => {
                remoteVideoWrapper.remove();
            })

            peers.current[userId] = myCall
        }

        socket.on('user-disconnected', userId => {
            console.log('user disconnected: ', userId)
            if (peers.current[userId]) {
                peers.current[userId].close()
                console.log("omo peer: ", peers.current)
            }
        })
    }

    const checkPeerUsers = () => {
        console.log(presentationPeers.current)
    }

    const initRoom = () => {
        if (userProfile.userId != "") {
            chekForVideoRoom()
        }
    }

    useEffect(() => {
        initRoom()
        connectionUserId.current = userProfile.userId
    }, [userProfile.userId])
    return (
        <Wrapper>
            <HeadBar>
                <div className="banner">
                    <img src="/assets/svg/logo.svg" alt="logo" />
                    <Link to="/home">TeamKonnect</Link>
                </div>
                <div className="head-img">
                    <img src={userProfile.profileImg} alt="avatar" />
                </div>
            </HeadBar>
            <Content>
                <VideoWrapper>
                    <UserPresentation isPresenting={isPresenting}>
                        <video className="client-presentation-stream" src="" muted={true}></video>
                    </UserPresentation>
                    <StreamWrapper isPresenting={isPresenting} className="video-section">
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
                        {/*" <UserCallBlock>
                            <img src="https://images.unsplash.com/photo-1597199204011-e6e704645213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" alt="person in video call" />
                        </UserCallBlock> */}

                        <UserCallBlock>
                            <video className="client-local-stream" src="" muted={true}></video>
                        </UserCallBlock>
                    </StreamWrapper>

                    <ControlWrapper>
                        <ControlItem onClick={checkPeerUsers}>
                            <VscRecord />
                        </ControlItem>
                        <ControlItem onClick={togggleAudio}>
                            {callSettingsState.audio ? <BsMic /> : <BsMicMute />}
                        </ControlItem>
                        <ControlItem onClick={() => startCapture()}>
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