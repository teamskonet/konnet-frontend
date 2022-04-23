import React, { useState } from "react";
import { ColumOne, ColumTwo, ColumWrapper, HeadBar, Wrapper } from "./styles";
import { RiUserLine } from 'react-icons/ri'
import { AiOutlineGooglePlus, AiOutlineMail, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BiCheck } from 'react-icons/bi'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { Link } from "react-router-dom";

const SigninScreen: React.FC = () => {
    const [rememberUser, setRememberUser] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)
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
                        <input type="text" name="full-name" id="full-name" placeholder="email"/>
                    </div>
                    <label htmlFor="full-name">Password</label>
                    <div className="input-col">
                        <HiOutlineLockClosed />
                        <input type={showPassword ? "text" : "password"} name="full-name" id="full-name" placeholder="password"/>
                        {showPassword ? <AiOutlineEyeInvisible onClick={() => setShowPassword(!showPassword)}/> : <AiOutlineEye style={{marginLeft: 4}} onClick={() => setShowPassword(!showPassword)}/>}
                    </div>
                    <button>Sign in</button>
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