import React from 'react'
import { BsMicMuteFill } from 'react-icons/bs'
import { FiMoreHorizontal } from 'react-icons/fi'
import { IoIosAddCircle } from 'react-icons/io'
import {  IoVideocamOutline } from 'react-icons/io5'
import { MdOutlineEdit, MdOutlineMessage, MdOutlinePermContactCalendar } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { Wrapper, Content, CardsWrapper, Cards, HeadBar  } from './style'

const ProjectManagement: React.FC = ()  => {
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
                <CardsWrapper>
                    {[1,2,3,4,5,6].map((item, index) => {
                        return (
                            <Cards key={index}>
                                <h1>Cyber security Team <MdOutlineEdit /></h1>
                                <h5>Due date: <b>21/06/2022</b></h5>

                                <h4>Project description</h4>

                                <span>Verify the securty model for teamkonect is working properly</span>

                                <h4>Team Members</h4>
                                <ul>
                                    <li>Olu Jacob</li>
                                    <li>Peter jackson</li>
                                    <li>Mayowa Oshinerc</li>
                                </ul>

                                <div className="meta-sec">
                                    {/* <FiMoreHorizontal /> */}
                                    <span></span>
                                </div>
                            </Cards>
                        )
                    })}
                </CardsWrapper>
            </Content>
        </Wrapper>
    )
}

export default ProjectManagement