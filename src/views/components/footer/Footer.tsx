import React from 'react'
import { FooterContent, FooterItem, FooterMetaWrapper, FooterNav, FooterNavWrapper, FooterWrapper } from './styles'
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FiChevronDown, FiGlobe }  from 'react-icons/fi';

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <FooterContent>
                <FooterNavWrapper>
                    <img src="/assets/svg/logo.svg" alt="logo" />
                    <FooterNav>
                        <FooterItem>
                            <h4>WHY TeamKonect?</h4>
                            <ul>
                                <li><a href="#">TeamKonect vs. Whatsapp</a></li>
                                <li><a href="#">Community groups</a></li>
                                <li><a href="#">Watch the Demo</a></li>
                            </ul>
                        </FooterItem>
                        <FooterItem>
                            <h4>PRODUCT</h4>
                            <ul>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Resources</a></li>
                                <li><a href="#">Solutions</a></li>
                            </ul>
                        </FooterItem>
                        <FooterItem>
                            <h4>PRICING</h4>
                            <ul>
                                <li><a href="#">Plans</a></li>
                                <li><a href="#">Paid vs. Free</a></li>
                            </ul>
                        </FooterItem>
                        <FooterItem>
                            <h4>RESOURCES</h4>
                            <ul>
                                <li><a href="#">Partners</a></li>
                                <li><a href="#">Developers</a></li>
                                <li><a href="#">wefwCommunityef</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </FooterItem>
                        <FooterItem>
                            <h4>COMPANY</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Leadership</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </FooterItem>
                    </FooterNav>
                </FooterNavWrapper>

                <FooterMetaWrapper>
                    <div className="row">
                        <div className="col">
                            <ul>
                                <li><a href="#">Status</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Cookie Preferences</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#"><FiGlobe /><span>Change Region</span><FiChevronDown /></a></li>
                            </ul>
                            <p>©2022 TeamKonect Technologies, LLC. All rights reserved. Various trademarks held by their respective owners.</p>
                        </div>

                        <ul className="social-col">
                            <li><a href="#"><FaFacebook /></a></li>
                            <li><a href="#"><FaTwitter /></a></li>
                            <li><a href="#"><FaYoutube /></a></li>
                            <li><a href="#"><FaLinkedin /></a></li>
                        </ul>
                    </div>
                </FooterMetaWrapper>
            </FooterContent>
        </FooterWrapper>
    )
}

export default Footer