import React, { useEffect, useRef, useState } from 'react'
import { BiTrash } from 'react-icons/bi'
import {  IoLink } from 'react-icons/io5'
import { MdExpandMore, MdOutlineDateRange, MdOutlineEdit, MdOutlinePersonAdd } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import AxiosCall from '../../../Utils/axios'
import Message from "../../components/Message/Message";
import { Wrapper, Content, CardsWrapper, Cards, HeadBar, MenuBar, FloatingBtn, NewProjectModal, NewProjectModalContent, SpacesModal, InviteModal, InviteModalContent  } from './style'
import Loader from '../../components/Loader/Loader'
import { useSelector } from 'react-redux'

const ProjectManagement: React.FC = ()  => {
    const userProfile: any = useSelector((state: any) => state.user);
    const [showMenuModal, setShowMenuModal] = useState<boolean>(false)
    const [showSpaceModal, setShowSpaceModal] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isInviting, setIsInviting] = useState<boolean>(false)
    const [showInviteModal, setShowInviteModal] = useState<boolean>(false)
    const [personalSpace, setPersonalSpace] = useState<boolean>(false)
    const [selectedSpace, setSelectedSpace] = useState<any>(null)
    const [showAddNewProjectModaql, setShowAddNewProjectModal] = useState<boolean>(false)
    const modalRef = useRef(null)
    const inviteModalRef = useRef(null)
    const navigation = useNavigate();
    const [spaces, setSpaces] = useState<any>([])
    const inviteEmailRef = useRef<any>(null)

    const [projectData, setProjectData] = useState<any>({
        name: "",
        description: "",
        dueDate: "",
        tasks: [],
        teamMembers: [],
        space: ""
    })

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

            setSpaces(res.data)
            setSelectedSpace(res.data[0])
            setIsLoading(false)
            getProjects(res.data[0]._id)
            Message.success("Spaces retreived")
        } catch (err: any) {
            setIsLoading(false)
            console.log(err)
            Message.error(err?.response.data.message)
        }
    }

    const [projects, setProjects] = useState([])
    const [isFetchingProjects, setIsFetchingProjects] = useState<boolean>(false)
    const getProjects = async (spaceId: String) => {
        setIsFetchingProjects(true)

        try {
            const res = await AxiosCall({
                method: "GET",
                path: `/space/${spaceId}/projects`
              });

            console.log(res);
            setProjects(res.data)
            setIsFetchingProjects(false)
            Message.success("Projects retreived")
        } catch (err: any) {
            setIsFetchingProjects(false)
            console.log(err)
            Message.error(err?.response.data.message)
        }
    }

    useEffect(() => {
        getSpaces()
    }, [])


    const inviteUserToSpace = async (e:any) => {
        e.preventDefault()
        setIsInviting(true)

        console.log("data", {
            inviteEmail: inviteEmailRef.current.value,
            spaceId: selectedSpace.spaceId
        })

        try {
            const res = await AxiosCall({
                method: "POST",
                path: `/space/${selectedSpace._id}/invite`,
                data: {
                    inviteEmail: inviteEmailRef.current.value
                }
              });

            setIsInviting(false)
            setShowInviteModal(false)
            Message.success("User invited successfully")
        } catch (err: any) {
            setIsInviting(false)
            console.log(err)
            Message.error(err?.response.data.message)
        }
    }

    const [isCreatingProject, setIsCreatingProject] = useState<boolean>(false)
    const createProject = async (e:any) => {
        e.preventDefault()
        setIsCreatingProject(true)

        const teamMembers: any = []
        const tasks: any = []

        for (let index = 0; index < projectData.tasks.length; index++) {
            const element = projectData.tasks[index];
            tasks.push({
                name: element.name,
                assignedTo: [
                    element.assignedTo[0]
                ]
            })
        }

        for (let index = 0; index < selectedSpace.members.length; index++) {
            const element = selectedSpace.members[index];
            teamMembers.push(element.user._id)
        }

        let prodjectReqData = {
            name: projectData.name,
            description: projectData.description,
            dueDate: projectData.dueDate,
            tasks: tasks,
            teamMembers: teamMembers,
            space: selectedSpace._id
        }

        console.log("prodjectReqData: ", prodjectReqData)

        try {
            const res = await AxiosCall({
                method: "POST",
                path: `/project/manager`,
                data: prodjectReqData
              });

            console.log(res);
            setIsCreatingProject(false)
            setShowAddNewProjectModal(false)
            getProjects(selectedSpace._id)
            Message.success("Project created successfully")
        } catch (err: any) {
            setIsCreatingProject(false)
            console.log(err)
            Message.error(err?.response.data.message)
        }
    }

    const deleteMembers = (e: any, memberIndex: number) => {
        let newSelectedSpace = selectedSpace;
        console.log("before: ", newSelectedSpace.members)
        newSelectedSpace.members.splice(memberIndex, 1);
        console.log("after: ", newSelectedSpace.members)
        setSelectedSpace({...newSelectedSpace})
        // e.target.parentNode.remove()
    }

    const taskInputRef = useRef<any>()
    const checkListSelectRef = useRef<any>()
    const assignProjectTask = () => {
        if (!taskInputRef.current.value.trim()) {
           return; 
        }
        const selectedUser = JSON.parse(checkListSelectRef.current.value);
        console.log(selectedUser)
        setProjectData({
            ...projectData,
            tasks: [
                ...projectData.tasks,
                {
                    name: taskInputRef.current.value,
                    user: selectedUser.firstName + " " + selectedUser.lastName,
                    assignedTo: [
                        selectedUser._id,
                    ]
                },
            ]
        })

        taskInputRef.current.value = ""
    }


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
                            {spaces.map((item: any, index: number) => {
                                return (
                                    <li className={item.name == selectedSpace.name ? 'selected' : 'not-selected'} key={index} onClick={() => {setShowMenuModal(!showMenuModal); setShowSpaceModal(false); setSelectedSpace(item); getProjects(item._id)}}>{item.name}</li>
                                )
                            })}
                        </SpacesModal>
                    </li>
                    <li className="members-sec">
                        {selectedSpace?.members.map((item: any, index: number) => {
                            return <span key={index}>{item.user.firstName[0] + "" + item.user.lastName[0]}</span>
                        })}
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
                    <img src={userProfile.profileImg} alt="avatar" />
                </div>
            </HeadBar>
            <Content>
                <CardsWrapper>
                    
                    {isFetchingProjects ? <Loader topColor="#169DC8" sideColor="#169DC866" /> : projects.map((item: any, index: number) => {
                        return (
                            <Cards key={index} onClick={() => setShowAddNewProjectModal(true)}>
                                <h1>{item.name} <MdOutlineEdit /></h1>
                                <h5>Due date: <b>{item.dueDate}</b></h5>

                                <h4>Project description</h4>

                                <span>{item.description}</span>

                                <h4>Team Members</h4>
                                <ul>
                                    {item.teamMembers.map((item: any, index: number) => {
                                        return <li key={index}>{item.firstName + " " + item.lastName}</li>
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
                            <input type="text" placeholder="Add project name" onChange={(e) => {
                                setProjectData({
                                    ...projectData,
                                    name: e.target.value
                                })
                            }} />
                        </div>
                        <div className="date-col">
                            <span>Due date:</span>
                            <input type="date" name="" id="" defaultValue={"21/06/2022"} onChange={(e) => {
                                setProjectData({
                                    ...projectData,
                                    dueDate: e.target.value
                                })
                            }} />
                        </div>
                        <h4>Project description</h4>
                        <textarea name="" onChange={(e) => {
                                setProjectData({
                                    ...projectData,
                                    description: e.target.value
                                })
                            }} ></textarea>

                        <div className="team-title-col">
                            <h5>Team Members</h5>
                            <MdExpandMore />
                        </div>

                        <div className="team-select-col">
                            <ul>
                                {selectedSpace?.members.map((item: any, index: number) => {
                                    return <li key={index}><span>{item.user.firstName + " " + item.user.lastName}</span><BiTrash onClick={(e) => deleteMembers(e, index)} /></li>
                                })}
                            </ul>
                        </div>

                        <div className="team-title-col">
                            <h5>Tasks</h5>
                            <MdExpandMore />
                        </div>

                        <div className="team-select-col">
                            <ul>
                                {projectData?.tasks.map((item: any, index: number) => {
                                    return <li key={index}><span>{item.name}</span><span>- {item.user}</span></li>
                                })}
                            </ul>
                        </div>

                        <div className="check-list-sec">
                            <h2>Checklist</h2>
                            <div className="input-col">
                                <input ref={taskInputRef} type="text" placeholder="Write task" />
                                <select ref={checkListSelectRef} name="" id="">
                                    {selectedSpace?.members.map((item: any, index: number) => {
                                        return <option key={index} value={JSON.stringify(item.user)}> {item.user.firstName + " " + item.user.lastName}</option>
                                    })}
                                </select>
                                <MdOutlineDateRange />
                            </div>

                            <button onClick={assignProjectTask} className="add-task">Add task</button>
                        </div>

                        <button className="submit" onClick={(e) => createProject(e)}>{isCreatingProject ? <Loader topColor={undefined} sideColor={undefined} /> : "Done"}</button>
                    </NewProjectModalContent>
                </NewProjectModal>

                <InviteModal ref={inviteModalRef} showModal={showInviteModal} onClick={(e) => closeInviteModal(e)}>
                    <InviteModalContent>
                        <h2>Share</h2>
                        <input ref={inviteEmailRef} type="text" placeholder="Add email address" />
                        <div className="row">
                            <IoLink />
                            <button onClick={() => setShowInviteModal(false)}>Copy link</button>
                            <div className="spacer"></div>
                            <button onClick={(e) => inviteUserToSpace(e)}>{isInviting ? <Loader topColor={undefined} sideColor={undefined} /> : "Invite"}</button>
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