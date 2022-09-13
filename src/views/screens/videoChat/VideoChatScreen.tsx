import React, { useEffect, useRef, useState } from 'react'
import {  IoAdd } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import useSocket from '../../../hooks/useSocket'
import { Wrapper, Content, HeadBar, VideoWrapper, CallBlock, AddPeople, UserCallBlock,  } from './style'

const VideoChatScreen: React.FC = ()  => {
    const { socket, sendPing } = useSocket()
    const myVideoRef = useRef<any>()

    const handleVideoRoom = () => {
        console.log("started video init")
        const myVideo = document.createElement('video')
        myVideo.muted = true;

        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then(stream => {
            addVideoStream(myVideo, stream)


            socket.on('user-connected', userId => {
                console.log("user connected: ", userId)
                connectToNewUser(userId, stream)
            })
        })
    }

    const connectToNewUser = (userId: String, stream: any) => {

    }

    


    const addVideoStream = (video: any, stream: any) => {
        const videoWrapper: any = document.querySelector('.video-section')
        video.srcObject = stream
        video.addEventListener('loadedmetadata', () => {
            video.play()

            console.log("video playing ...")
        })
        videoWrapper.append(video)
        console.log("ended video init")
        
    }

    useEffect(() => {
        handleVideoRoom()
    }, [])
    return (
        <Wrapper>
            <HeadBar>
                <div className="banner">
                    <img src="/assets/svg/logo.svg" alt="logo" />
                    <Link to="/">TeamKonnect</Link>
                </div>
                <div className="head-img">
                    <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="avatar" />
                </div>
            </HeadBar>
            <Content>
                <VideoWrapper className="video-section">
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