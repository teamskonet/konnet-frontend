import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Content, Form, FormContent, FormWrapper, HeadBar, Wrapper } from "./styles";

const SetupScreen: React.FC = () => {
    const [finishedFirstStep, setFinishedFirstStep] = useState<boolean>(false);

    const completeFirstStep = () => {
        setFinishedFirstStep(true);
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
                            <h2>Let's set up your <br /> Konectspace</h2>

                            <label htmlFor="">Name your Konectspace</label>
                            <input type="text" placeholder="Enter the name of your Konectspace"/>
                            <label htmlFor="">Name your project</label>
                            <input type="text" placeholder="Enter the name of your project"/>
                            <button onClick={completeFirstStep}>Next</button>
                        </FormContent>
                        <FormContent finishedFirstStep={finishedFirstStep}>
                            <h2>Let's set up your <br /> Konectspace</h2>

                            <label htmlFor="">Name your organization</label>
                            <input type="text" placeholder="Enter the name of your organization"/>
                            <label htmlFor="">Description of projects</label>
                            <input type="text" placeholder="Write description of project"/>
                            <button>Create space</button>
                        </FormContent>
                    </Form>
                </FormWrapper>

                <div className="form-indicator"></div>
            </Content>
        </Wrapper>
    )
}

export default SetupScreen;