import React, { useRef, useState } from "react";
import { ColumOne, ColumTwo, ColumWrapper, HeadBar, Wrapper } from "./styles";
import { RiUserLine } from 'react-icons/ri'
import { AiOutlineGooglePlus, AiOutlineMail, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BiCheck } from 'react-icons/bi'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { Link, useNavigate } from "react-router-dom";
import AxiosCall from "../../../../Utils/axios";
import Loader from "../../../components/Loader/Loader";
import Message from "../../../components/Message/Index";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../actions";

const SignupScreen: React.FC = () => {
    const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const email = useRef<any>(null);
    const fullName = useRef<any>(null);
    const password = useRef<any>(null);

    const dispatch = useDispatch()

    let navigate = useNavigate();

    const signup = async (e: any) => {
        e.preventDefault();

        setIsLoading(true)
        console.log("fullName", fullName.current.value);
        console.log("email", email.current.value);
        console.log("password", password.current.value);

        try {
            const res = await AxiosCall({
                method: "POST",
                path: "/user/register",
                data: {
                    email: email.current.value,
                    password: password.current.value,
                    fullName: fullName.current.value,
                }
              });

              
              const userData = {
                userId: res.data._id,
                email: res.data.email,
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                profileImg: res.data.avatarUrl,
                isEmailVerified: res.data.isEmailVerified
            }

            dispatch(setUser(userData))

            console.log("headers", res.headers["x-id-key"]);
            localStorage.setItem("authToken", res.headers["x-id-key"])
            setIsLoading(false)
            Message.success("Account created successfully")
            
            return navigate("/setup");
        } catch (err: any) {
            setIsLoading(false)
            Message.error(err?.response.data.message)
        }
    }
    return(
        <Wrapper>
            <HeadBar>
                <div className="banner">
                    <img src="/assets/svg/logo.svg" alt="logo" />
                    <Link to="/">TeamKonnect</Link>
                </div>
            </HeadBar>
            <ColumWrapper>
                <ColumOne>
                    <h3>Welcome to TeamKonect, the perfect place to connect</h3>
                    <img src="/assets/svg/signup-vector.svg" alt="video call" />
                </ColumOne>
                <ColumTwo>
                    <div className="google-auth">
                        <div className="google-box">
                            <AiOutlineGooglePlus />
                        </div>
                        <span>Signup with google</span>
                    </div>
                    <div className="email-auth">
                        <span>Or signup with your email</span>
                    </div>

                    <label htmlFor="full-name">Full name</label>
                    <div className="input-col">
                        <RiUserLine />
                        <input ref={fullName} type="text" name="full-name" id="full-name" placeholder="full name"/>
                    </div>
                    <label htmlFor="full-name">Email</label>
                    <div className="input-col">
                        <AiOutlineMail />
                        <input ref={email} type="text" name="full-name" id="full-name" placeholder="email"/>
                    </div>
                    <label htmlFor="full-name">Password</label>
                    <div className="input-col">
                        <HiOutlineLockClosed />
                        <input ref={password} type={showPassword ? "text" : "password"} name="full-name" id="full-name" placeholder="password"/>
                        {showPassword ? <AiOutlineEyeInvisible onClick={() => setShowPassword(!showPassword)}/> : <AiOutlineEye style={{marginLeft: 4}} onClick={() => setShowPassword(!showPassword)}/>}
                    </div>
                    <div className="terms-col" onClick={() => setAcceptedTerms(!acceptedTerms)}>
                        <div className="check-box">
                            {acceptedTerms && <BiCheck />}
                        </div>
                        <div className="terms-text">
                            <span>I agreed to the</span><a href="#">Terms & Conditions</a>
                        </div>
                    </div>
                    <button onClick={signup}>{isLoading ? <Loader topColor={undefined} sideColor={undefined} /> : "Sign up"}</button>
                    <div className="form-meta">
                        <span>Alreay have account? </span>
                        <Link to="/signin">Sign in</Link>
                    </div>
                </ColumTwo>
            </ColumWrapper>
        </Wrapper>  
    );
}

export default SignupScreen