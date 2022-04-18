import React from 'react'
import { HeadBar, HeaderWrapper, Nav, SlideImgWrapper, SlideTextWrapper, SlideWrapper, ToggleMenu } from './styles'

const Header: React.FC = ()  => {
    return (
        <HeaderWrapper>
            <HeadBar>
                <div className="banner">
                    <img src="/assets/svg/logo.svg" alt="logo" />
                    <h2>TeamKonnect</h2>
                </div>
                <Nav>
                    <ul>
                        <li><a href="#">Rooms</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">login</a></li>
                        <li><a href="#">join community</a></li>
                    </ul>
                </Nav>
                <ToggleMenu>
                    <span></span>
                </ToggleMenu>
            </HeadBar>
            <SlideWrapper>
                <SlideTextWrapper>
                    <span className="tag">Connecting teams</span>
                    <h1>Stay Connected, Learn, and Have Fun.</h1>
                    <h6>Create immersive virtual, hybrid, and in-person event experiences with your colleague and friends.</h6>
                    <div className="slide-form">
                        <input type="email" name="" placeholder="Input email" />
                        <button>Join Community</button>
                    </div>
                </SlideTextWrapper>
                <SlideImgWrapper>
                    <img src="/assets/img/slide-banner.png" alt="banner" />
                </SlideImgWrapper>
            </SlideWrapper>
        </HeaderWrapper>
    )
}

export default Header