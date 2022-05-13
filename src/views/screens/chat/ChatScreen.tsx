import React, { useState } from 'react'
import { AiOutlineHeart, AiOutlineMore, AiOutlinePlus } from 'react-icons/ai'
import { BiCheckDouble } from 'react-icons/bi'
import { BsCameraVideo, BsMicMuteFill } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { IoIosAddCircle, IoIosArrowBack, IoMdFolderOpen } from 'react-icons/io'
import {  IoVideocamOutline } from 'react-icons/io5'
import { MdOutlineMessage, MdOutlineMic, MdOutlinePermContactCalendar, MdPersonAddAlt } from 'react-icons/md'
import { RiArrowDownSLine, RiLock2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { Wrapper, Content, HeadBar, ChatsViewWrapper, Tab, TabWrapper, ChatCardWrapper, ChatList, ChatCard, MessageViewWrapper, MessageContentWrapper, MessageHeader, ConversationWrapper, HeaderActions, MessageHeaderWrapper, Disclaimer, MessageBubbleWrapper, MessageBubble, ConversationContent, InputSection,  } from './style'

const ChatScreen: React.FC = ()  => {
    const [showMessageView, setShowMessageView] = useState<boolean>(false)
    const [selectedChat, setSelectedChat] = useState<ChatListInterface>({
        img: "https://media.istockphoto.com/photos/beach-woman-picture-id477555600?b=1&k=20&m=477555600&s=170667a&w=0&h=F015v23M3lZkLTsE2NcVRTkfPon5irjBfSbqLt9jxQM=",
        name: "Programme Management",
        time: "wedwe",
        body: "wed"
    })

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
        {
            img: "https://media.istockphoto.com/photos/man-overlooks-the-scenery-of-the-of-toledo-spain-from-a-bridge-view-picture-id1195487270?b=1&k=20&m=1195487270&s=170667a&w=0&h=YCB_oKw797QfEcS9zXi-0xhis3y0F77KO_FhcVg_mUI=",
            name: "Jane Cooper",
            time: "wedwe",
            body: "wed"
        },
        {
            img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            name: "Accounting",
            time: "wedwe",
            body: "wed"
        },
        {
            img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            name: "Alex Peacock",
            time: "wedwe",
            body: "wed"
        },
        {
            img: "https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            name: "Cyber Security",
            time: "wedwe",
            body: "wed"
        },
        {
            img: "https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            name: "Product Design",
            time: "wedwe",
            body: "wed"
        },
        {
            img: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            name: "Data Analytics",
            time: "wedwe",
            body: "wed"
        },
        {
            img: "https://images.unsplash.com/photo-1629467057571-42d22d8f0cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            name: "John Sam",
            time: "wedwe",
            body: "wed"
        },
        {
            img: "https://images.unsplash.com/photo-1521252659862-eec69941b071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            name: "Christiano Ronaldo",
            time: "wedwe",
            body: "wed"
        },
        {
            img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            name: "Ramson Noah",
            time: "wedwe",
            body: "wed"
        },
    ]

    const messageList = [
        {
            from: true,
            text: "Hey bro!",
            time: "09:45pm"
        },
        {
            from: false,
            text: "Yeah I'm fine",
            time: "07:30am"
        },
        {
            from: false,
            text: "How are you doing.",
            time: "07:30am"
        },
        {
            from: true,
            text: "I'm cool bro. Did you later send that stuff?",
            time: "07:50am"
        },
        {
            from: false,
            text: "Yeah I did the other day",
            time: "08:00am"
        },
        {
            from: true,
            text: "Thanks a lot man! btw love the pictures. 😁",
            time: "now"
        },
        {
            from: false,
            text: "Yeah no worries",
            time: "now"
        },
    ]

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
                        {chatList.map((item: ChatListInterface, index: React.Key) => {
                            return (
                                <ChatCardWrapper key={index} onClick={() => {setSelectedChat(item); toggleChatView(true)}}>
                                    <ChatCard>
                                        <div className="img-box">
                                            <img src={item.img} alt="photo" />
                                        </div>
                                        <div className="sec-content">
                                            <div className="head">
                                                <h3>{item.name}</h3>
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

                <MessageViewWrapper showView={showMessageView}>
                    <MessageContentWrapper>
                        <MessageHeaderWrapper>
                            <MessageHeader>
                                <div className="clos-chat-view" onClick={() => toggleChatView(false)}>
                                    <IoIosArrowBack />
                                </div>
                                <div className="photo-box">
                                    <img src={selectedChat.img} alt="photo" />
                                </div>
                                <div className="content">
                                    <div className="title">
                                        <h2>{selectedChat.name}</h2>
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
                                        <MessageBubbleWrapper key={index} left={!item.from}>
                                            <MessageBubble left={!item.from}>
                                                <p>{item.text}</p>
                                                <div className="meta">
                                                    <span className="time">{item.time}</span>
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
                            <input type="text" placeholder="Say Something..." />
                            <div className="record">
                                <img src="/assets/svg/mic-icon.svg" alt="mic icon" />
                            </div>
                        </InputSection>
                    </MessageContentWrapper>
                </MessageViewWrapper>
            </Content>
        </Wrapper>
    )
}

export default ChatScreen