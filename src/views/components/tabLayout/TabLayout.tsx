import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Content, ContentWappper, Footer, Wrapper } from "./styles";
import { BsCheck2 } from 'react-icons/bs'
import { HiHome } from "react-icons/hi";
import { MdOutlineMic, MdOutlinePermContactCalendar } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import useWindowDimensions from "../../../hooks/useWindow";
import AxiosCall from "../../../Utils/axios";
import Message from "../Message/Message";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../actions";

const TabLayout: React.FC<{children?: React.ReactNode}> = ({children}) => {
    const userProfile: any = useSelector((state: any) => state.user);
    const videoRoomIdRef = useRef<String | null>(null)
    const { height, width } = useWindowDimensions()
    const dispatch = useDispatch()

    const fetchProfile = async () => {
        try {
            const res = await AxiosCall({
                method: "GET",
                path: "/user/me"
            });
            dispatch(setUser({...userProfile,
                userId: res.data._id,
                email: res.data.email,
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                profileImg: res.data.avatarUrl,
                spaces: res.data.spaces,
                tagline: res.data.tagline,
                phone: res.data.phoneNumber,
                friends: res.data.friends
            }))
            Message.success("Profile fetched successfully")
        } catch (err: any) {
            Message.error(err?.response.data.message)
        }
    }
    const getVideoRoomId = async () => {
        videoRoomIdRef.current = localStorage.getItem("video-room")
    }
    useEffect(() => {
        fetchProfile()
        getVideoRoomId()
    }, [])

    return (
        <Wrapper height={height}>
            <ContentWappper>
                <Content>
                    {children}
                </Content>
            </ContentWappper>
            <Footer>
                <ul>
                    <li><Link to="/home"><HiHome /></Link></li>
                    <li><Link to="/audio-chat"><MdOutlineMic /></Link></li>
                    <li><Link to={"/video-chat?room=" + videoRoomIdRef.current}><img src="/assets/svg/video-call-icon.svg" alt="" /></Link></li>
                    <li><Link to="/chat"><img src="/assets/svg/chat-icon.svg" alt="" /></Link></li>
                    <li><Link to="/project-management"><MdOutlinePermContactCalendar /></Link></li>
                    <li><Link to="/profile"><img src="/assets/svg/account-icon.svg" alt="" /></Link></li>
                </ul>
            </Footer>
        </Wrapper>
    )
}

export default TabLayout;