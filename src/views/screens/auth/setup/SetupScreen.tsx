import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AxiosCall from "../../../../Utils/axios";
import { Content, Form, FormContent, FormWrapper, HeadBar, Wrapper } from "./styles";
import Message from "../../../components/Message/Index";
import Loader from "../../../components/Loader/Loader";

const SetupScreen: React.FC = () => {
    const [finishedFirstStep, setFinishedFirstStep] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const spaceName = useRef<any>(null)
    const projectName = useRef<any>(null)
    const organizationName = useRef<any>(null)
    const projectDescription = useRef<any>(null)

    const completeFirstStep = () => {
        setFinishedFirstStep(true);
    }

    let navigate = useNavigate();

    const finishSetup = async (e: any) => {
        e.preventDefault();
        // Message.success("Space created successfully")
        // return navigate("/pricing", {state: {spaceId: 123}});
        setIsLoading(true)
        try {
            const res = await AxiosCall({
                method: "POST",
                path: "/space",
                data: {
                    name: spaceName.current.value,
                    projectName: projectName.current.value,
                    organizationName: organizationName.current.value,
                    projectDescription: projectDescription.current.value
                }
              });

            console.log(res);
            // console.log("headers", res.headers["x-id-key"]);
            setIsLoading(false)
            Message.success("Space created successfully")
            return navigate("/pricing", {state: {spaceId: res.data._id}});
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
                <FormWrapper>
                    <Form>
                        <FormContent finishedFirstStep={finishedFirstStep}>
                            <h2>Let's set up your Konectspace</h2>

                            <label htmlFor="">Name your Konectspace</label>
                            <input ref={spaceName} type="text" placeholder="Enter the name of your Konectspace"/>
                            <label htmlFor="">Name your project</label>
                            <input  ref={projectName} type="text" placeholder="Enter the name of your project"/>
                            <button onClick={completeFirstStep}>Next</button>
                        </FormContent>
                        <FormContent finishedFirstStep={finishedFirstStep}>
                            <h2>Let's set up your Konectspace</h2>

                            <label htmlFor="">Name your organization</label>
                            <input ref={organizationName} type="text" placeholder="Enter the name of your organization"/>
                            <label htmlFor="">Description of projects</label>
                            <input ref={projectDescription} type="text" placeholder="Write description of project"/>
                            <button onClick={finishSetup}>{isLoading ? <Loader topColor={undefined} sideColor={undefined} /> : "Create space"}</button>
                        </FormContent>
                    </Form>
                </FormWrapper>

                <div className="form-indicator" onClick={() => setFinishedFirstStep(!finishedFirstStep)}></div>
            </Content>
        </Wrapper>
    )
}

export default SetupScreen;