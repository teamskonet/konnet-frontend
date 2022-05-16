import React, { useRef, useState } from 'react'
import { BiTrash } from 'react-icons/bi'
import { BsMicMuteFill } from 'react-icons/bs'
import { FiMoreHorizontal } from 'react-icons/fi'
import { IoIosAddCircle } from 'react-icons/io'
import {  IoPersonAddOutline, IoVideocamOutline } from 'react-icons/io5'
import { MdExpandMore, MdOutlineDateRange, MdOutlineEdit, MdOutlineMessage, MdOutlinePermContactCalendar, MdOutlinePersonAdd } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Analytics from './analytics/Analytics'
import { Wrapper, Content, CardsWrapper, Cards, HeadBar, MenuBar, FloatingBtn, NewProjectModal, NewProjectModalContent  } from './style'

const ProjectManagement: React.FC = ()  => {
    const [showMenuModal, setShowMenuModal] = useState<boolean>(false)
    const [showAddNewProjectModaql, setShowAddNewProjectModal] = useState<boolean>(false)
    const modalRef = useRef(null)
    const navigation = useNavigate();

    const closeAddNewProjectModal = (e: any) => {
        if (e.target == modalRef.current) {
            setShowAddNewProjectModal(false)
        }
    }

    return (
        <Wrapper>
            <HeadBar>
                <div className="banner">
                    <img src="/assets/svg/logo.svg" alt="logo" />
                    <Link to="/">TeamKonnect</Link>
                </div>
                <MenuBar showModal={showMenuModal}>
                    <li className="space-sec" onClick={() => setShowMenuModal(!showMenuModal)}>
                        <span>Dangote Konectspace</span>
                        <MdExpandMore />
                    </li>
                    <li className="members-sec">
                        <span>IJ</span>
                        <span>MV</span>
                        <span>PD</span>
                    </li>
                    <li className="invite-sec" onClick={() => setShowMenuModal(!showMenuModal)}>
                        <MdOutlinePersonAdd />
                        <span>Invite</span>
                    </li>
                    <li className="switch-sec" onClick={() => setShowMenuModal(!showMenuModal)}>
                        <span>Switch to personal</span>
                    </li>
                </MenuBar>
                <div className="stats-sec">
                    <img src="/assets/svg/stats-vector.svg" alt="" />
                </div>
                <div className="head-img" onClick={() => setShowMenuModal(!showMenuModal)}>
                    <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="avatar" />
                </div>
            </HeadBar>
            <Content>
                <CardsWrapper>
                    {[1,2,3,4,5,6].map((item, index) => {
                        return (
                            <Cards key={index} onClick={() => setShowAddNewProjectModal(true)}>
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

                <NewProjectModal ref={modalRef} showModal={showAddNewProjectModaql} onClick={(e) => closeAddNewProjectModal(e)}>
                    <NewProjectModalContent>
                        <div className="project-input">
                            <input type="text" placeholder="Add project name" />
                        </div>
                        <div className="date-col">
                            <span>Due date:</span>
                            <input type="date" name="" id="" value={"21/06/2022"} />
                        </div>
                        <h4>Project description</h4>
                        <textarea name=""></textarea>

                        <div className="team-title-col">
                            <h5>Team Members</h5>
                            <MdExpandMore />
                        </div>

                        <div className="team-select-col">
                            <ul>
                                <li><span>Olu Jacob</span><BiTrash /></li>
                                <li><span>Peter Jackson</span><BiTrash /></li>
                            </ul>
                        </div>

                        <div className="check-list-sec">
                            <h2>Checklist</h2>
                            <div className="input-col">
                                <input type="text" placeholder="Write task" />
                                <select name="" id="">
                                    <option value="sam"> Jacob</option>
                                </select>
                                <MdOutlineDateRange />
                            </div>

                            <button className="add-task">Add task</button>
                        </div>

                        <button className="submit" onClick={() => setShowAddNewProjectModal(false)}>Done</button>
                    </NewProjectModalContent>
                </NewProjectModal>

                <FloatingBtn onClick={() => {
                    return navigation("/project-management/analytics")
                }}>
                    <img src="/assets/svg/check-list-vector.svg" alt="" />
                </FloatingBtn>
            </Content>
        </Wrapper>
    )
}

export default ProjectManagement