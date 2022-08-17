import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineMail, AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { RiUserLine } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AxiosCall from '../../../Utils/axios'
import { Wrapper, Content, HeadBar, ColumWrapper,  } from './style'
import Message from "../../components/Message/Index";
import Loader from '../../components/Loader/Loader'

const ProfileScreen: React.FC = ()  => {
    const userProfile: any = useSelector((state: any) => state.user);
    const [isLoading, setIsLoading] = useState<boolean>(false)


    const emailRef = useRef<any>(null);
    const firstNameRef = useRef<any>(null);
    const lastNameRef = useRef<any>(null);

    const password = useRef<any>(null);
    
    const updateProfile = async (e: any) => {
        e.preventDefault();

        setIsLoading(true)

        try {
            const res = await AxiosCall({
                method: "PATCH",
                path: "/user/profile",
                data: {
                    email: emailRef.current.value,
                    firstName: firstNameRef.current.value,
                    lastName: firstNameRef.current.value,
                }
              });

            setIsLoading(false)
            Message.success("Account updated successfully")
        } catch (err: any) {
            setIsLoading(false)
            Message.error(err?.response.data.message)
        }
    }


    return (
        <Wrapper>
            <HeadBar>
                <div className="banner">
                    <img src="/assets/svg/logo.svg" alt="logo" />
                    <Link to="/">TeamKonnect</Link>
                </div>
                <div className="header-spacer">
                    <a href="#" className="sign-out">
                        <span>Sign  out</span>
                    </a>
                </div>
                <div className="head-img">
                    <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="avatar" />
                </div>
            </HeadBar>
            <Content>
                <ColumWrapper>
                    <h3>Profile</h3>
                    <div className="edit-avatar">
                        <div className="img-cover">
                            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="avatar" />
                        </div>
                        <button className="upload-img">Upload Picture</button>
                    </div>

                    <div className="input-row">
                        <div className="input-col">
                            <label htmlFor="first-name">First name:</label>
                            <input ref={firstNameRef} type="text" name="first-name" id="first-name" placeholder="first name" defaultValue={userProfile.firstName}/>
                        </div>
                        <div className="input-col">
                            <label htmlFor="last-name">Last name:</label>
                            <input ref={lastNameRef} type="text" name="last-name" id="last-name" placeholder="last name" defaultValue={userProfile.lastName}/>
                        </div>
                    </div>
                    <div className="input-col">
                        <label htmlFor="role">Tagline:</label>
                        <input type="text" name="role" id="role" placeholder="Ex: Sales Manager"/>
                    </div>
                    <div className="input-col">
                        <label htmlFor="email">Email:</label>
                        <input ref={emailRef} type="text" name="email" id="email" placeholder="Ex: mente@email.com" defaultValue={userProfile.email}/>
                    </div>
                    <div className="input-col">
                        <label htmlFor="phone-number">Phone name</label>
                        <input type="text" name="phone-number" id="phone-number" placeholder="Ex: 08012 3323 228"/>
                    </div>

                    <button onClick={updateProfile} className="save-action">{isLoading ? <Loader topColor={undefined} sideColor={undefined} /> : "Save Profile"}</button>


                    <h3>Change password</h3>
                    <div className="input-col">
                        <label htmlFor="current-password">Current password:</label>
                        <input type="password" name="current-password" id="current-password" placeholder="********"/>
                    </div>

                    <div className="input-col">
                        <label htmlFor="new-password">New password:</label>
                        <input type="password" name="new-password" id="new-password" placeholder="********"/>
                    </div>

                    <div className="input-col">
                        <label htmlFor="confirm-password">Confirm password:</label>
                        <input type="password" name="confirm-password" id="confirm-password" placeholder="********"/>
                    </div>

                    <button className="save-action">Update Passwords</button>
                </ColumWrapper>
            </Content>
        </Wrapper>
    )
}

export default ProfileScreen