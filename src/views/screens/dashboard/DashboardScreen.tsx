import React from 'react'
import { BsMicMuteFill } from 'react-icons/bs'
import { IoIosAddCircle } from 'react-icons/io'
import {  IoVideocamOutline } from 'react-icons/io5'
import { MdOutlineMessage, MdOutlinePermContactCalendar } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { Wrapper, Content, PageTitle, RoomsWrapper, Room, TabContent, LiveRoomWrapper, LiveRoom, HeadBar,  } from './style'

const DashboardScreen: React.FC = ()  => {
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
                <PageTitle>Hallway</PageTitle>
                <RoomsWrapper>
                    <Room>
                        <div className="head">
                            <div className="icon-box">
                                <BsMicMuteFill />
                            </div>
                            <h3>Audio Room</h3>
                        </div>

                        <div className="action-sec">
                            <IoIosAddCircle />
                            <span>Create a room</span>
                        </div>
                    </Room>
                    <Room>
                        <div className="head">
                            <div className="icon-box">
                                <IoVideocamOutline />
                            </div>
                            <h3>Video Room</h3>
                        </div>

                        <div className="action-sec">
                            <IoIosAddCircle />
                            <span>Create a room</span>
                        </div>
                    </Room>
                    <Room>
                        <div className="head">
                            <div className="icon-box">
                                <MdOutlineMessage />
                            </div>
                            <h3>Chat Room</h3>
                        </div>

                        <div className="action-sec">
                            <IoIosAddCircle />
                            <span>Create a room</span>
                        </div>
                    </Room>
                    <Room>
                        <div className="head">
                            <div className="icon-box">
                                <MdOutlinePermContactCalendar />
                            </div>
                            <h3>Project Management Room</h3>
                        </div>

                        <div className="action-sec">
                            <IoIosAddCircle />
                            <span>Create a room</span>
                        </div>
                    </Room>
                </RoomsWrapper>

                <TabContent>
                    <span>Live</span>
                    <span>Recorded</span>
                </TabContent>

                <LiveRoomWrapper>
                    {[1,2,3,4,5,6,7,8].map((item) => {
                        return <LiveRoom>
                        <div className="row">
                            <div className="col">
                                <div className="head">
                                    <div className="img-box">
                                        <img src="https://media.istockphoto.com/photos/portrait-of-young-healthy-asian-woman-with-smilingcloseup-face-with-picture-id1163467378?b=1&k=20&m=1163467378&s=170667a&w=0&h=uU8iQYB0scbp696ok0ZNWHvKSdDK7FrY5675qkwjrcs=" />
                                    </div>
                                    <div className="info-sec">
                                        <h2>How to sell products</h2>
                                        <h4>Video .  Public group</h4>
                                    </div>
                                </div>

                                <div className="footer-sec">
                                    <img src="/assets/svg/add-users-icon.svg" alt="" />
                                    <span>132 persons listening</span>
                                </div>
                            </div>
                            <div className="circle">
                                <span>LIVE</span>
                            </div>
                        </div>
                    </LiveRoom>
                    })}
                </LiveRoomWrapper>
            </Content>
        </Wrapper>
    )
}

export default DashboardScreen