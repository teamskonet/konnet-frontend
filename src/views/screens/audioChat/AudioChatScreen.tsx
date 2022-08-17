import React from 'react'
import { BsMicMuteFill } from 'react-icons/bs'
import { IoIosAddCircle } from 'react-icons/io'
import {  IoAdd, IoVideocamOutline } from 'react-icons/io5'
import { MdOutlineMessage, MdOutlinePermContactCalendar } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { Wrapper, Content, HeadBar, VideoWrapper, CallBlock,  } from './style'

const AudioChatScreen: React.FC = ()  => {
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
                <VideoWrapper>
                    {
                        [1,2,3,4,5,6,7,8,1,2,3,4,5,6,67,7].map((item) => {
                            return <CallBlock>
                                    <div className="img-wrapper">
                                        <img src="https://images.unsplash.com/photo-1603112579965-e24332cc453a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="person in video call" />
                                    </div>
                                    <span>Neil Daniels</span>
                                </CallBlock>
                        })
                    }
                </VideoWrapper>
            </Content>
        </Wrapper>
    )
}

export default AudioChatScreen