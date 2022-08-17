import React, { useEffect, useRef, useState } from 'react'
import { BiTrash } from 'react-icons/bi'
import { BsMicMuteFill } from 'react-icons/bs'
import { FiMoreHorizontal } from 'react-icons/fi'
import { IoIosAddCircle } from 'react-icons/io'
import {  IoLink, IoPersonAddOutline, IoVideocamOutline } from 'react-icons/io5'
import { MdExpandMore, MdOutlineDateRange, MdOutlineEdit, MdOutlineMessage, MdOutlinePermContactCalendar, MdOutlinePersonAdd } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import AxiosCall from '../../../Utils/axios'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Analytics from './analytics/Analytics'
import Message from "../../components/Message/Index";
import { Wrapper, Content, CardsWrapper, Cards, HeadBar, MenuBar, FloatingBtn, NewProjectModal, NewProjectModalContent, SpacesModal, InviteModal, InviteModalContent  } from './style'

const ProjectManagement: React.FC = ()  => {
    const [showMenuModal, setShowMenuModal] = useState<boolean>(false)
    const [showSpaceModal, setShowSpaceModal] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [showInviteModal, setShowInviteModal] = useState<boolean>(false)
    const [personalSpace, setPersonalSpace] = useState<boolean>(false)
    const [selectedSpace, setSelectedSpace] = useState<any>(null)
    const [showAddNewProjectModaql, setShowAddNewProjectModal] = useState<boolean>(false)
    const modalRef = useRef(null)
    const inviteModalRef = useRef(null)
    const navigation = useNavigate();
    const [spaces, setSpaces] = useState<any>([])

    const closeAddNewProjectModal = (e: any) => {
        if (e.target == modalRef.current) {
            setShowAddNewProjectModal(false)
        }
    }

    const closeInviteModal = (e: any) => {
        if (e.target == inviteModalRef.current) {
            setShowInviteModal(false)
        }
    }
    const getSpaces = async () => {
        setIsLoading(true)

        try {
            const res = await AxiosCall({
                method: "GET",
                path: `/spaces`
              });

            console.log(res);
            setSpaces(res.data)
            setSelectedSpace(res.data[0])
            setIsLoading(false)
            Message.success("Spaces retreived")
        } catch (err: any) {
            setIsLoading(false)
            console.log(err)
            Message.error(err?.response.data.message)
        }
    }

    useEffect(() => {
        getSpaces()
    }, [])
    return (
        <Wrapper>
            <HeadBar>
                <div className="banner">
                    <img src="/assets/svg/logo.svg" alt="logo" />
                    <Link to="/">TeamKonnect</Link>
                </div>
                <MenuBar showModal={showMenuModal}>
                    <li className="space-sec" onClick={() => {
                        if(!showSpaceModal) {
                            setShowSpaceModal(true);
                        }
                    }}>
                        <span>{selectedSpace == null ? "" : selectedSpace.name}</span>
                        <MdExpandMore />

                        <SpacesModal showModal={showSpaceModal}>
                            {spaces.map((item: any) => {
                                return (
                                    <li onClick={() => {setShowMenuModal(!showMenuModal); setShowSpaceModal(false); setSelectedSpace(item)}}>{item.name}</li>
                                )
                            })}
                        </SpacesModal>
                    </li>
                    <li className="members-sec">
                        <span>IJ</span>
                        <span>MV</span>
                        <span>PD</span>
                    </li>
                    <li className="invite-sec" onClick={() => {setShowMenuModal(!showMenuModal); setShowInviteModal(true)}}>
                        <MdOutlinePersonAdd />
                        <span>Invite</span>
                    </li>
                    <li className="switch-sec" onClick={() => {setShowMenuModal(!showMenuModal); setPersonalSpace(!personalSpace)}}>
                        <span>{personalSpace ? "Switche to manager" : "Switch to personal"}</span>
                    </li>
                </MenuBar>
                <div className="stats-sec" onClick={() => {
                    return navigation("/project-management/analytics")
                }}>
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
                                    {selectedSpace == null ? "" : selectedSpace.members.map((item: any) => {
                                        return <li>{item.firstName + " " + item.lastName}</li>
                                    })}
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
                                {/* {spaces.members.map((item: any) => {
                                    return <li><span>{item.firstName + " " + item.lastName}</span><BiTrash /></li>
                                })} */}
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

                <InviteModal ref={inviteModalRef} showModal={showInviteModal} onClick={(e) => closeInviteModal(e)}>
                    <InviteModalContent>
                        <h2>Share</h2>
                        <input type="text" placeholder="Add email address" />
                        <div className="row">
                            <IoLink />
                            <button onClick={() => setShowInviteModal(false)}>Copy link</button>
                        </div>
                    </InviteModalContent>
                </InviteModal>

                <FloatingBtn onClick={() => setShowAddNewProjectModal(true) }>
                    <img src="/assets/svg/check-list-vector.svg" alt="" />
                </FloatingBtn>
            </Content>
        </Wrapper>
    )
}

export default ProjectManagement