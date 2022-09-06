import React, { useRef, useState } from 'react'
import { BiCheck } from 'react-icons/bi'
import { BsMicMuteFill } from 'react-icons/bs'
import { IoIosAddCircle } from 'react-icons/io'
import {  IoSearchOutline, IoVideocamOutline } from 'react-icons/io5'
import { MdArrowForwardIos, MdOutlineMessage, MdOutlinePermContactCalendar } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import AxiosCall from '../../../Utils/axios'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Loader from '../../components/Loader/Loader'
import Message from '../../components/Message/Message'
import { Wrapper, Content, PageTitle, RoomsWrapper, Room, TabContent, LiveRoomWrapper, LiveRoom, HeadBar, RoomModalWrapper, RoomModal,  } from './style'

const DashboardScreen: React.FC = ()  => {
    const [selectedRoomFiends, setSelectedRoomFriends] = useState<Array<Number>>([])
    const [isCreatingChatRoom, setIsCreatingChatRoom] = useState<boolean>(false)
    const spaceNameRef = useRef<any>()
    const navigate = useNavigate()

    const createChatRoom = async (e:any) => {
        e.preventDefault()
        setIsCreatingChatRoom(true)

        try {
            const res = await AxiosCall({
                method: "POST",
                path: `/room`,
                data: {
                    name: spaceNameRef.current.value
                }
              });

            console.log(res);
            setIsCreatingChatRoom(false)
            Message.success("Chat room created successfully")
            return navigate("/chat");
        } catch (err: any) {
            setIsCreatingChatRoom(false)
            console.log(err)
            Message.error(err?.response.data.message)
        }
    }

    const ChatRoomModal = () => {
        return <RoomModalWrapper>
            <RoomModal>
                <h1>Chat Room</h1>
                <div className="input-field">
                    <label htmlFor="msg-room-title">Title</label>
                    <input ref={spaceNameRef} id="msg-room-title" type="text" placeholder="Enter room title" />
                </div>
                <div className="input-field">
                    <label htmlFor="msg-room-title">Start time</label>
                    <div className="input-row">
                        <input id="msg-room-title" disabled={true} type="text" placeholder="Enter room title" defaultValue={"Now"} />
                        <MdArrowForwardIos />
                    </div>
                </div>
                <div className="room-link">
                    <span>Anyone with the link can join</span>
                    <a href="#">Edit</a>
                </div>

                <h2>Invite Friends</h2>
                <div className="search-row">
                    <div className="searh-box">
                        <IoSearchOutline />
                        <input type="text" />
                    </div>
                    <button>cancel</button>
                </div>
                <ul className="friend-list">
                    {[1,2,3,4,5].map((item, index) => {
                        return <li onClick={() => {
                            if (!selectedRoomFiends.includes(item)) {
                                setSelectedRoomFriends([...selectedRoomFiends, item])
                            } else {
                                let selectedList = selectedRoomFiends
                                let itemIndex = selectedList.indexOf(item);
                                selectedList.splice(itemIndex, 1)
                                setSelectedRoomFriends([...selectedList])
                            }
                        }}>
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="" />
                            <span>John Doe</span>
                            <div className={`check-box  ${selectedRoomFiends.includes(item) ? "selected" : ""}`}>
                                {selectedRoomFiends.includes(item) && <BiCheck />}
                            </div>
                        </li>
                    })}
                </ul>
                <button onClick={createChatRoom} className="start-room">{isCreatingChatRoom ? <Loader topColor={undefined} sideColor={undefined} /> : "Start room"}</button>
            </RoomModal>
        </RoomModalWrapper>
    }

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


                                    <div className="join-sec">
                                        <button>Join</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </LiveRoom>
                    })}
                </LiveRoomWrapper>
            </Content>
            <ChatRoomModal />
        </Wrapper>
    )
}

export default DashboardScreen