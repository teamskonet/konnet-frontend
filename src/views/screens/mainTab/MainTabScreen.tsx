import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Content, ContentWappper, Footer, HeadBar, Wrapper } from "./styles";
import { BsCheck2 } from 'react-icons/bs'
import { HiHome } from "react-icons/hi";
import { MdOutlineMic, MdOutlinePermContactCalendar } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import DashboardScreen from "../dashboard/DashboardScreen";

const MainTabScreen: React.FC = () => {
    const [finishedFirstStep, setFinishedFirstStep] = useState<boolean>(false);

    const completeFirstStep = () => {
        setFinishedFirstStep(true);
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
            <ContentWappper>
                <Content>
                    <DashboardScreen />
                </Content>
            </ContentWappper>
            <Footer>
                <ul>
                    <li><Link to="#"><HiHome /></Link></li>
                    <li><Link to="#"><MdOutlineMic /></Link></li>
                    <li><Link to="#"><img src="/assets/svg/video-call-icon.svg" alt="" /></Link></li>
                    <li><Link to="#"><img src="/assets/svg/chat-icon.svg" alt="" /></Link></li>
                    <li><Link to="#"><MdOutlinePermContactCalendar /></Link></li>
                    <li><Link to="#"><img src="/assets/svg/account-icon.svg" alt="" /></Link></li>
                </ul>
            </Footer>
        </Wrapper>
    )
}

export default MainTabScreen;