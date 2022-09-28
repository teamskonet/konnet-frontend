import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Content, HeadBar, PriceCard, PriceCardWrapper, Wrapper } from "./styles";
import { BsCheck2 } from 'react-icons/bs'

const PricingScreen: React.FC = () => {
    const location: any = useLocation();

    const navigate = useNavigate()

    const [finishedFirstStep, setFinishedFirstStep] = useState<boolean>(false);

    const selectPlan = (e: any) => {
        e.preventDefault();
        // console.log("space id", location.state.spaceId)
        return navigate("/invite", {state: {spaceId: location.state.spaceId}});
    }
    return (
        <Wrapper>
            <HeadBar>
                <div className="banner">
                    <img src="/assets/svg/logo.svg" alt="logo" />
                    <Link to="/">TeLinkmKonect</Link>
                </div>
            </HeadBar>
            <Content finishedFirstStep={finishedFirstStep}>
                <h2>Pricing</h2>
                <h4>Our affordable pricing scales with your business</h4>

                <PriceCardWrapper>
                    <PriceCard>
                        <div className="head">
                            <span>$0</span>
                            <span>per person</span>
                        </div>
                        <div className="features">
                            <span>Features</span>
                        </div>
                        <ul>
                            <li><BsCheck2 /> <span>Acess to audio spaces</span></li>
                            <li><BsCheck2 /> <span>Access to video spaces</span></li>
                            <li><BsCheck2 /> <span>Access to chat spaces.</span></li>
                            <li><BsCheck2 /> <span>Available to 50 persons</span></li>
                        </ul>
                        <a href="#" onClick={(e) => selectPlan(e)}>Start My Free Trial</a>
                    </PriceCard>
                    <PriceCard>
                        <div className="head">
                            <span>$10</span>
                            <span>per person</span>
                        </div>
                        <div className="features">
                            <span>Features</span>
                        </div>
                        <ul>
                            <li><BsCheck2 /> <span>Acess to audio spaces</span></li>
                            <li><BsCheck2 /> <span>Access to video spaces</span></li>
                            <li><BsCheck2 /> <span>Access to chat spaces.</span></li>
                            <li><BsCheck2 /> <span>Available to 50 persons</span></li>
                        </ul>
                        <Link to="/invite">Subscribe</Link>
                    </PriceCard>
                    <PriceCard>
                        <div className="head">
                            <span>$25</span>
                            <span>per person</span>
                        </div>
                        <div className="features">
                            <span>Features</span>
                        </div>
                        <ul>
                            <li><BsCheck2 /> <span>Acess to audio spaces</span></li>
                            <li><BsCheck2 /> <span>Access to video spaces</span></li>
                            <li><BsCheck2 /> <span>Access to chat spaces.</span></li>
                            <li><BsCheck2 /> <span>Available to 50 persons</span></li>
                        </ul>
                        <Link to="/invite">Subscribe</Link>
                    </PriceCard>
                    <PriceCard>
                        <div className="head">
                            <span>Enterprise</span>
                        </div>
                        <div className="features">
                            <span>Features</span>
                        </div>
                        <ul>
                            <li>This package is for comapnies who would love to have full access to the product features.</li>
                        </ul>
                        <Link to="/invite">Send quote</Link>
                    </PriceCard>
                </PriceCardWrapper>
            </Content>
        </Wrapper>
    )
}

export default PricingScreen;