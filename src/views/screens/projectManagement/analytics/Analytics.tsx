import React, { useState } from "react";
import { MdExpandMore, MdOutlinePersonAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartWrapper, Content, SortBox, Wrapper, CartContent, TaskTypeListWrapper, TaskTypeList, TopWrapper, HeadBar, MenuBar, ContentWrapper } from "./Analytics.styles";
import { PieChart } from 'react-minimal-pie-chart';

const AnalyticsScreen: React.FC = () => {
    const [showMenuModal, setShowMenuModal] = useState<boolean>(false)
    const [showAddNewProjectModaql, setShowAddNewProjectModal] = useState<boolean>(false)

    const taskList = [
        { title: 'One', value: 13, color: '#3B00ED' },
        { title: 'Two', value: 7, color: '#26A69A' },
        { title: 'Three', value: 7, color: '#679309' },
        { title: 'Four', value: 10, color: '#EE6002' },
        { title: 'Five', value: 6, color: '#FFC107' },
        { title: 'Six', value: 20, color: '#E01E5A' },
    ]

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
                <ContentWrapper>
                    <CartWrapper>
                        <SortBox>
                            <span>Sort by: </span>
                            <select name="" id="">
                                <option value="week">Week</option>
                            </select>
                        </SortBox>
                        <CartContent>
                        <PieChart
                            // reveal={true}
                            // paddingAngle={4}
                            lineWidth={80}
                            animate={true}
                            label={({ dataEntry }) => dataEntry.value}
                            // labelPosition={40}
                            labelStyle={(index) => ({
                                fill: '#fff',
                                fontSize: '10px',
                                fontWeight: '600'
                              })}
                            data={taskList}
                            />
                        </CartContent>
                    </CartWrapper>

                    <TaskTypeListWrapper>
                        <TaskTypeList>
                            <li><span>Number of tasks assigned: 13</span></li>
                            <li><span>Number of tasks in progress: 7</span></li>
                            <li><span>Number of tasks in completed: 7</span></li>
                            <li><span>Number of tasks delayed: 10</span></li>
                            <li><span>Number of teams: 6 </span></li>
                            <li><span>Number of team members: 20</span></li>
                        </TaskTypeList>
                    </TaskTypeListWrapper>
                </ContentWrapper>
            </Content>
        </Wrapper>
    )
}

export default AnalyticsScreen;