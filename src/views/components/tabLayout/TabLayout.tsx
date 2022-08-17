import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Content, ContentWappper, Footer, Wrapper } from "./styles";
import { BsCheck2 } from 'react-icons/bs'
import { HiHome } from "react-icons/hi";
import { MdOutlineMic, MdOutlinePermContactCalendar } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import useWindowDimensions from "../../../hooks/useWindow";

const TabLayout: React.FC<{children?: React.ReactNode}> = ({children}) => {

    const { height, width } = useWindowDimensions()

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
                    <li><Link to="/video-chat"><img src="/assets/svg/video-call-icon.svg" alt="" /></Link></li>
                    <li><Link to="/chat"><img src="/assets/svg/chat-icon.svg" alt="" /></Link></li>
                    <li><Link to="/project-management"><MdOutlinePermContactCalendar /></Link></li>
                    <li><Link to="/profile"><img src="/assets/svg/account-icon.svg" alt="" /></Link></li>
                </ul>
            </Footer>
        </Wrapper>
    )
}

export default TabLayout;