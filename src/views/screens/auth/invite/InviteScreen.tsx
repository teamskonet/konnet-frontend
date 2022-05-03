import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Content, Form, HeadBar, Wrapper } from "./styles";
import { BsCheck2 } from 'react-icons/bs'

const InviteScreen: React.FC = () => {
    const [finishedFirstStep, setFinishedFirstStep] = useState<boolean>(false);

    let navigate = useNavigate();

    const invite = () => {

        return navigate("/home");
    }
    return (
        <Wrapper>
            <HeadBar>
                <div className="banner">
                    <img src="/assets/svg/logo.svg" alt="logo" />
                    <Link to="/">TeamKonnect</Link>
                </div>
            </HeadBar>
            <Content finishedFirstStep={finishedFirstStep}>
                <Form>
                    <h2>Invite team members</h2>
                    <h4>Invite team members by adding their email</h4>
                    <input type="text" placeholder="Add email"/>
                    <button onClick={invite}>Send Invite</button>
                </Form>
            </Content>
        </Wrapper>
    )
}

export default InviteScreen;