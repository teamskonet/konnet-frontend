import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { HeadBar, HeaderWrapper, Nav, NavContent, SlideImgWrapper, SlideTextWrapper, SlideWrapper, ToggleMenu } from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu, logoutUser} from '../../../actions'

const Header: React.FC = ()  => {
    const dispatch = useDispatch();


    const toggleState = useSelector((state: {navigation: any}) => state.navigation);

    const sidebarRef = useRef(null)
    const contentRef = useRef(null)

    const closeMenu = (e: { target: any }) => {
        if (e.target == sidebarRef.current) {
            dispatch(toggleMenu());
        }
    }

    return (
        <HeaderWrapper>
            <HeadBar>
                <div className="banner">
                    <img src="/assets/svg/logo.svg" alt="logo" />
                    <h2>TeamKonect</h2>
                </div>
                <Nav ref={sidebarRef} onClick={e => closeMenu(e)} navigationState={toggleState}>
                    <NavContent navigationState={toggleState}>
                        <div className="nav-head">
                            <img src="/assets/svg/logo.svg" alt="logo" />
                            <h2>TeamKonect</h2>
                        </div>
                        <ul>
                            <li><a href="#">Rooms</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Resources</a></li>
                        </ul>
                        <ul>
                            <li><Link to="/signin">login</Link></li>
                            <li><Link to="/signup">join community</Link></li>
                        </ul>
                    </NavContent>
                </Nav>
                <ToggleMenu onClick={() => dispatch(toggleMenu())}>
                    <span></span>
                </ToggleMenu>
            </HeadBar>
            <SlideWrapper>
                <SlideTextWrapper>
                    <span className="tag">Connecting teams</span>
                    <h1>A one stop collaboration tool to make connection easier</h1>
                    <h6>Access all tools needed to connect and collaborate with your team in one platform.</h6>
                    <div className="slide-form">
                        <input type="email" name="" placeholder="Input email" />
                        <button>Join Community</button>
                    </div>
                </SlideTextWrapper>
                <SlideImgWrapper>
                    <img src="/assets/svg/banner.svg" alt="banner" />
                </SlideImgWrapper>
            </SlideWrapper>
        </HeaderWrapper>
    )
}

export default Header