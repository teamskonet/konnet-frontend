import { profile } from 'console'
import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineHeart, AiOutlineMore, AiOutlinePlus } from 'react-icons/ai'
import { BiCheckDouble } from 'react-icons/bi'
import { BsCameraVideo, BsMicMuteFill } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { IoIosAddCircle, IoIosArrowBack, IoMdFolderOpen } from 'react-icons/io'
import {  IoVideocamOutline } from 'react-icons/io5'
import { MdOutlineMessage, MdOutlineMic, MdOutlinePermContactCalendar, MdPersonAddAlt } from 'react-icons/md'
import { RiArrowDownSLine, RiLock2Line } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { Link, useNavigate } from 'react-router-dom'
import AxiosCall from '../../../Utils/axios'
import Message from '../../components/Message/Message'
import { Wrapper, Content, HeadBar, ChatsViewWrapper, Tab, TabWrapper, ChatCardWrapper, ChatList, ChatCard, MessageViewWrapper, MessageContentWrapper, MessageHeader, ConversationWrapper, HeaderActions, MessageHeaderWrapper, Disclaimer, MessageBubbleWrapper, MessageBubble, ConversationContent, InputSection,  } from './style'

const ChatScreen: React.FC = ()  => {
    const userProfile: any = useSelector((state: any) => state.user);
    const [showMessageView, setShowMessageView] = useState<boolean>(false)
    const navigate = useNavigate()
    const [friendList, setFriendList] = useState<Array<any>>([])
    const [selectedChat, setSelectedChat] = useState<any>()

    const toggleChatView = (value: boolean) => {
        setShowMessageView(value)
    }

    interface ChatListInterface {
        img: string | undefined,
        name: String,
        time: String,
        body: String
    }

    const chatList: ChatListInterface[] = [
        {
            img: "https://media.istockphoto.com/photos/beach-woman-picture-id477555600?b=1&k=20&m=477555600&s=170667a&w=0&h=F015v23M3lZkLTsE2NcVRTkfPon5irjBfSbqLt9jxQM=",
            name: "Programme Management",
            time: "wedwe",
            body: "wed"
        },
    ]

    const [messageList, setMessageList] = useState<Array<any>>([])
    const [isFetchingRooms, setIsFetchingRooms] = useState<boolean>(false)
    const getRooms = async () => {
        setIsFetchingRooms(true)

        try {
            const res = await AxiosCall({
                method: "GET",
                path: `/rooms`,
              });

            console.log(res);
            setIsFetchingRooms(false)
            Message.success("Rooms fetched successfully")
        } catch (err: any) {
            setIsFetchingRooms(false)
            console.log(err)
            Message.error(err?.response.data.message)
        }
    }

    const [isSendingMessage, setIsSendingMessage] = useState<boolean>(false)

    const messageRef = useRef<any>()

    const sendMessage = async (e: any) => {
        e.preventDefault()
        if (!messageRef.current.value.trim()) {
            return;
        }
        setIsSendingMessage(true)
        try {
            const reqMessage = messageRef.current.value
            messageRef.current.value = ""
            setMessageList([...messageList, {
                to: userProfile.userId,
                from: selectedChat.user._id,
                message: reqMessage,
                createdAt:  new Date()
            }])
            const res = await AxiosCall({
                method: "POST",
                path: `/conversation`,
                data: {
                    message: reqMessage,
                    to: selectedChat.user._id
                }
              });


            setIsSendingMessage(false)
        } catch (err: any) {
            setIsSendingMessage(false)
            console.log(err)
            Message.error(err?.response.data.message)
        }
    }

    const getSpaceMembers = async () => {
        if (!userProfile.spaces.length) {
            return;
        }
        try {
            const userSpaces = userProfile.spaces
            const res = await AxiosCall({
                method: "GET",
                path: `/space/${userSpaces[0]}/members`,
            });
        
            setFriendList(res.data)
            console.log("space members: ", res.data)
        } catch (err: any) {
            console.log(err)
            Message.error(err?.response.data.message)
        }
    }

    const getConversation = async () => {
        if (selectedChat == null) {
            return;
        }
        try {
            const res = await AxiosCall({
                method: "GET",
                path: `/conversation/${selectedChat.user._id}`,
            });
        
            setMessageList(res.data)
            console.log("messages: ", res.data)
        } catch (err: any) {
            console.log(err)
            Message.error(err?.response.data.message)
        }
    }

    useEffect(() => {
        getConversation()
    }, [selectedChat])

    useEffect(() => {
        getRooms()
    }, [])

    useEffect(() => {
        getSpaceMembers()
    }, [userProfile.spaces.length])
    

    return (
        <Wrapper>
            <Content>
                <ChatsViewWrapper>
                    <HeadBar>
                        <div className="banner">
                            <img src="/assets/svg/logo.svg" alt="logo" />
                            <Link to="/">TeamKonnect</Link>
                        </div>

                        <div className="search-bar">
                            <FiSearch />
                            <input type="text" placeholder="Search or start a new chat" />
                        </div>
                    </HeadBar>
                    <TabWrapper>
                        <Tab>
                            <li className="active">Room</li>
                            <li>Friends</li>
                        </Tab>
                    </TabWrapper>
                    <ChatList>
                        {friendList.map((item: any, index: React.Key) => {
                            return (
                                <ChatCardWrapper key={index} onClick={() => {setSelectedChat(item); toggleChatView(true)}}>
                                    <ChatCard>
                                        <div className="img-box">
                                            <img src={item?.user?.avatarUrl} alt="photo" />
                                        </div>
                                        <div className="sec-content">
                                            <div className="head">
                                                <h3>{item?.user?.firstName} {item?.user?.lastName}</h3>
                                                <span>07:38 am</span>
                                            </div>
                                            <div className="footer">
                                                <h6>Haha that's terrifying 😂</h6>
                                                <div className="meta-sec">
                                                    <BiCheckDouble />
                                                </div>
                                            </div>
                                        </div>
                                    </ChatCard>
                                </ChatCardWrapper>
                            )
                        })}
                    </ChatList>
                </ChatsViewWrapper>
                
                {/* Message View starts here */}

                {selectedChat != null && <MessageViewWrapper showView={showMessageView}>
                    <MessageContentWrapper>
                        <MessageHeaderWrapper>
                            <MessageHeader>
                                <div className="clos-chat-view" onClick={() => toggleChatView(false)}>
                                    <IoIosArrowBack />
                                </div>
                                <div className="photo-box">
                                    <img src={selectedChat.user.avatarUrl} alt="photo" />
                                </div>
                                <div className="content">
                                    <div className="title">
                                        <h2>{selectedChat.user.firstName} {selectedChat.user.lastName}</h2>
                                        <AiOutlineHeart />
                                    </div>

                                    <span>Online</span>
                                </div>
                            </MessageHeader>
                            <HeaderActions>
                                <li><MdPersonAddAlt /></li>
                                <li><IoMdFolderOpen /></li>
                                <li><MdOutlineMic /></li>
                                <li><BsCameraVideo /></li>
                            </HeaderActions>
                            <span className="toggle-action"><AiOutlineMore /></span>
                        </MessageHeaderWrapper>

                        <ConversationWrapper>
                            <ConversationContent>
                                <Disclaimer>
                                    <RiLock2Line />
                                    <span>Messages are end-to-end encrypted. No one outside of this chat, not even TeamKonect can read or listen to them click to learn more.</span>
                                </Disclaimer>

                                {messageList.map((item: any, index: React.Key) => {
                                    return (
                                        <MessageBubbleWrapper key={index} left={item.from === userProfile.userId}>
                                            <MessageBubble left={item.from === userProfile.userId}>
                                                <p>{item.message}</p>
                                                <div className="meta">
                                                    <span className="time">{dayjs(item.createdAt).format('MM-Dd HH:mm A')}</span>
                                                </div>
                                            </MessageBubble>
                                        </MessageBubbleWrapper>
                                    )
                                })}
                            </ConversationContent>
                        </ConversationWrapper>
                        <InputSection>
                            <div className="add-emoji">
                                <img src="/assets/svg/smile-emoji.svg" alt="mic icon" />
                            </div>
                            <div className="add-files">
                                <img src="/assets/svg/add-files-icon.svg" alt="mic icon" />
                            </div>
                            <input onKeyPress={(e) => e.key === 'Enter' && sendMessage(e)} ref={messageRef} type="text" placeholder="Say Something..." />
                            <div className="record">
                                <img src="/assets/svg/mic-icon.svg" alt="mic icon" />
                            </div>
                        </InputSection>
                    </MessageContentWrapper>
                </MessageViewWrapper>}
            </Content>
        </Wrapper>
    )
}

export default ChatScreen