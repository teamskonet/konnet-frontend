import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Content, Form, HeadBar, Wrapper } from "./styles";
import { BsCheck2 } from 'react-icons/bs'
import { useLocation } from "react-router-dom";
import Message from "../../../components/Message/Index";
import Loader from "../../../components/Loader/Loader";
import AxiosCall from "../../../../Utils/axios";

const InviteScreen: React.FC = () => {
    const location: any = useLocation();
    const spaceId = location.state.spaceId
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const userEmail = useRef<any>(null)
    const [finishedFirstStep, setFinishedFirstStep] = useState<boolean>(false);

    let navigate = useNavigate();

    const invite = async (e:any) => {
        e.preventDefault()
        // Message.success("User invited successfully")
        // return navigate("/home");
        setIsLoading(true)

        console.log("data", {
            inviteEmail: userEmail.current.value,
            spaceId: spaceId
        })

        try {
            const res = await AxiosCall({
                method: "POST",
                path: `/space/${spaceId}/invite`,
                data: {
                    inviteEmail: userEmail.current.value
                }
              });

            console.log(res);
            setIsLoading(false)
            Message.success("User invited successfully")
            return navigate("/home");
        } catch (err: any) {
            setIsLoading(false)
            console.log(err)
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
            </HeadBar>
            <Content finishedFirstStep={finishedFirstStep}>
                <Form>
                    <h2>Invite team members</h2>
                    <h4>Invite team members by adding their email</h4>
                    <input ref={userEmail} type="text" placeholder="Add email"/>
                    <button onClick={invite}>{isLoading ? <Loader topColor={undefined} sideColor={undefined}  /> : "Send Invite"}</button>
                </Form>
            </Content>
        </Wrapper>
    )
}

export default InviteScreen;