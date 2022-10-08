import axios from 'axios'
import React, { useRef, useState } from 'react'
import { BiCheck } from 'react-icons/bi'
import { BsMicMuteFill } from 'react-icons/bs'
import { IoIosAddCircle } from 'react-icons/io'
import {  IoSearchOutline, IoVideocamOutline } from 'react-icons/io5'
import { MdArrowForwardIos, MdOutlineMessage, MdOutlinePermContactCalendar } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import CONFIG from '../../../Utils/appConst'
// import useSocket from '../../../hooks/useSocket'
import AxiosCall from '../../../Utils/axios'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Loader from '../../components/Loader/Loader'
import Message from '../../components/Message/Message'
import { Wrapper, Content, PageTitle, RoomsWrapper, Room, TabContent, LiveRoomWrapper, LiveRoom, HeadBar, RoomModalWrapper, RoomModal,  } from './style'

const DashboardScreen: React.FC = ()  => {
    const [selectedRoomFiends, setSelectedRoomFriends] = useState<Array<Number>>([])
    const [isCreatingChatRoom, setIsCreatingChatRoom] = useState<boolean>(false)
    const [isCreatingVideoRoom, setIsCreatingVideoRoom] = useState<boolean>(false)
    const [isCreatingAudioRoom, setIsCreatingAudioRoom] = useState<boolean>(false)
    const [showChatRoomModal, setShowChatRoomModal] = useState<boolean>(false)
    const [showVideoRoomModal, setShowVideoRoomModal] = useState<boolean>(false)
    const [showAudioRoomModal, setShowAudioRoomModal] = useState<boolean>(false)


    const userProfile: any = useSelector((state: any) => state.user);
    
    const spaceNameRef = useRef<any>()
    const videoRoomNameRef = useRef<any>()
    const audioRoomNameRef = useRef<any>()
    const navigate = useNavigate()
    // const { socket, sendPing } = useSocket()

    const chatModalRef = useRef<any>()
    const viedoModalRef = useRef<any>()
    const audioModalRef = useRef<any>()

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

    const createVideoRoom = async (e: any) => {
        e.preventDefault()
    
        setIsCreatingVideoRoom(true)
        const res = await axios.post(`${CONFIG.socketUrl}/v1/room/video/init`, {
            roomName: videoRoomNameRef.current.value,
            userId: userProfile.userId
        })
        console.log(res.data.data)
        setIsCreatingVideoRoom(false)
        localStorage.setItem("video-room", res.data.data._id)

        return navigate(`/video-chat?room=${res.data.data._id}`, {
            state: {
                roomId: res.data.data._id,
                owner: true
            }
        })
    }

    const createAudioRoom = async (e: any) => {
        e.preventDefault()
        

        setIsCreatingAudioRoom(true)
        const res = await axios.post("https://loftywebtech.com/gotocourse/api/v1/room/video/init", {
            roomName: videoRoomNameRef.current.value,
            userId: userProfile.userId
        })
        console.log(res.data.data)
        setIsCreatingAudioRoom(false)
        localStorage.setItem("video-room", res.data.data._id)

        return navigate(`/audio-chat?room=${res.data.data._id}`, {
            state: {
                roomId: res.data.data._id,
                owner: true
            }
        })
    }

    const closeChatRoomModal = (e: any) =>{
        if (e.target == chatModalRef.current) {
            setShowChatRoomModal(false)
        }
    }

    const closeVideoRoomModal = (e: any) =>{
        if (e.target == viedoModalRef.current) {
            setShowVideoRoomModal(false)
        }
    }
    const closeAudioRoomModal = (e: any) =>{
        if (e.target == audioModalRef.current) {
            setShowAudioRoomModal(false)
        }
    }

    const ChatRoomModal = () => {
        return <RoomModalWrapper ref={chatModalRef} onClick={closeChatRoomModal}>
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
                    {userProfile.friends.map((item: any, index: number) => {
                        return <li key={index} onClick={() => {
                            if (!selectedRoomFiends.includes(item)) {
                                setSelectedRoomFriends([...selectedRoomFiends, item])
                            } else {
                                let selectedList = selectedRoomFiends
                                let itemIndex = selectedList.indexOf(item);
                                selectedList.splice(itemIndex, 1)
                                setSelectedRoomFriends([...selectedList])
                            }
                        }}>
                            <img src={item?.avatarUrl} alt="" />
                            <span>{item?.firstName} {item?.lastName}</span>
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

    const VideoRoomModal = () => {
        return <RoomModalWrapper ref={viedoModalRef} onClick={closeVideoRoomModal}>
            <RoomModal>
                <h1>Video Room</h1>
                <div className="input-field">
                    <label htmlFor="video-room-title">Title</label>
                    <input ref={videoRoomNameRef} id="video-room-title" type="text" placeholder="Enter room title" />
                </div>
                <div className="input-field">
                    <label htmlFor="video-room-title">Start time</label>
                    <div className="input-row">
                        <input id="video-room-title" disabled={true} type="text" placeholder="Enter room title" defaultValue={"Now"} />
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
                    {userProfile.friends.map((item: any, index: number) => {
                        return <li key={index} onClick={() => {
                            if (!selectedRoomFiends.includes(item)) {
                                setSelectedRoomFriends([...selectedRoomFiends, item])
                            } else {
                                let selectedList = selectedRoomFiends
                                let itemIndex = selectedList.indexOf(item);
                                selectedList.splice(itemIndex, 1)
                                setSelectedRoomFriends([...selectedList])
                            }
                        }}>
                            <img src={item?.avatarUrl} alt="" />
                            <span>{item?.firstName} {item?.lastName}</span>
                            <div className={`check-box  ${selectedRoomFiends.includes(item) ? "selected" : ""}`}>
                                {selectedRoomFiends.includes(item) && <BiCheck />}
                            </div>
                        </li>
                    })}
                </ul>
                <button onClick={(e) => createVideoRoom(e)} className="start-room">{isCreatingVideoRoom ? <Loader topColor={undefined} sideColor={undefined} /> : "Start room"}</button>
            </RoomModal>
        </RoomModalWrapper>
    }


    const AudioRoomModal = () => {
        return <RoomModalWrapper ref={audioRoomNameRef} onClick={closeAudioRoomModal}>
            <RoomModal>
                <h1>Audio Room</h1>
                <div className="input-field">
                    <label htmlFor="video-room-title">Title</label>
                    <input ref={videoRoomNameRef} id="video-room-title" type="text" placeholder="Enter room title" />
                </div>
                <div className="input-field">
                    <label htmlFor="video-room-title">Start time</label>
                    <div className="input-row">
                        <input id="video-room-title" disabled={true} type="text" placeholder="Enter room title" defaultValue={"Now"} />
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
                    {userProfile.friends.map((item: any, index: number) => {
                        return <li key={index} onClick={() => {
                            if (!selectedRoomFiends.includes(item)) {
                                setSelectedRoomFriends([...selectedRoomFiends, item])
                            } else {
                                let selectedList = selectedRoomFiends
                                let itemIndex = selectedList.indexOf(item);
                                selectedList.splice(itemIndex, 1)
                                setSelectedRoomFriends([...selectedList])
                            }
                        }}>
                            <img src={item?.avatarUrl} alt="" />
                            <span>{item?.firstName} {item?.lastName}</span>
                            <div className={`check-box  ${selectedRoomFiends.includes(item) ? "selected" : ""}`}>
                                {selectedRoomFiends.includes(item) && <BiCheck />}
                            </div>
                        </li>
                    })}
                </ul>
                <button onClick={createAudioRoom} className="start-room">{isCreatingAudioRoom ? <Loader topColor={undefined} sideColor={undefined} /> : "Start room"}</button>
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
                    <img src={userProfile.profileImg} alt="avatar" />
                </div>
            </HeadBar>
            <Content>
                <PageTitle>Hallway</PageTitle>
                <RoomsWrapper>
                    <Room onClick={() => setShowAudioRoomModal(true)}>
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
                    <Room onClick={() => setShowVideoRoomModal(true)}>
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
                    <Room onClick={() => setShowChatRoomModal(true)}>
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
                    {[1,2,3,4,5,6,7,8].map((item, index) => {
                        return <LiveRoom key={index}>
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
            {showAudioRoomModal && <AudioRoomModal />}
            {showChatRoomModal && <ChatRoomModal />}
            {showVideoRoomModal && <VideoRoomModal />}
        </Wrapper>
    )
}

export default DashboardScreen