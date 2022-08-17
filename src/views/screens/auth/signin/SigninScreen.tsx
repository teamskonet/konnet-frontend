import React, { useRef, useState } from "react";
import { ColumOne, ColumTwo, ColumWrapper, HeadBar, Wrapper } from "./styles";
import { RiUserLine } from 'react-icons/ri'
import { AiOutlineGooglePlus, AiOutlineMail, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BiCheck } from 'react-icons/bi'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { Link, useNavigate } from "react-router-dom";
import AxiosCall from "../../../../Utils/axios";
import { FaLessThan } from "react-icons/fa";
import Message from "../../../components/Message/Index";
import Loader from "../../../components/Loader/Loader";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../actions";

const SigninScreen: React.FC = () => {
    const [rememberUser, setRememberUser] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const dispatch = useDispatch()

    const email = useRef<any>(null);
    const password = useRef<any>(null);

    let navigate = useNavigate();

    const signin = async (e: any) => {
        e.preventDefault();
        setIsLoading(true)
        console.log("email", email.current.value);
        console.log("password", password.current.value);

        try {
            const res = await AxiosCall({
                method: "POST",
                path: "/user/login",
                data: {
                    email: email.current.value,
                    password: password.current.value
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

            setIsLoading(false)
            localStorage.setItem("authToken", res.headers["x-id-key"])
            Message.success("Signin success")
            
            return navigate("/home");
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
                    <img src="/assets/img/signup-img.png" alt="video call" />
                </ColumOne>
                <ColumTwo>
                    <div className="google-auth">
                        <div className="google-box">
                            <AiOutlineGooglePlus />
                        </div>
                        <span>Sign in with google</span>
                    </div>
                    <div className="email-auth">
                        <span>Or signin with your email</span>
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
                    <button onClick={signin}>{isLoading ? <Loader topColor={undefined} sideColor={undefined} /> : "Sign in"}</button>
                    <div className="form-meta">
                        <div className="terms-col" onClick={() => setRememberUser(!rememberUser)}>
                            <div className="check-box">
                                {rememberUser && <BiCheck />}
                            </div>
                            <span>keep me signed in</span>
                        </div>
                        <a href="#">Forgot password?</a>
                    </div>
                </ColumTwo>
            </ColumWrapper>
        </Wrapper>  
    );
}

export default SigninScreen