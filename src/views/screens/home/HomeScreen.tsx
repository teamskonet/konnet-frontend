import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { Article, ArticleWrapper, CommunityCard, NewSpace, SectionOneContent, SectionOneWrapper, SectionThreeContent, SectionThreeWrapper, SectionTwoContent, SectionTwoWrapper, Wrapper } from './style'

const HomeScreen: React.FC = ()  => {
    return (
        <>
            <Header />
            <Wrapper>
                <SectionOneWrapper>
                    <SectionOneContent>
                        <h1>High-quality video, audio <br/> & live brainstorming and meetup spaces</h1>
                        <h4>Take advantage of our high-quality video, audio and chat spaces to discuss, connect and catch up on happenings and build together</h4>
                        <a className="join-link" href="#">Join lounge rooms</a>
                        <img src="/assets/img/video-call.png" alt="video call" />
                        <ul>
                            <li><span><img src="/assets/svg/audio-icon.svg" alt="audio icon" /></span><span>Audio Meetup</span></li>
                            <li><span><img src="/assets/svg/live-icon.svg" alt="live icon" /></span><span>Live Meetup</span></li>
                            <li><span><img src="/assets/svg/play-icon.svg" alt="play icon" /></span><span>Recorded Meetups</span></li>
                        </ul>
                    </SectionOneContent>
                </SectionOneWrapper>

                <SectionTwoWrapper>
                    <SectionTwoContent>
                        <h1>&nbsp;👋 	&nbsp; 	&nbsp;Welcome back to TeamKonect</h1>
                        <CommunityCard>
                            <div className="head">
                                <h2>Communities you can join...</h2>
                            </div>
                            <div className="row">
                                <div className="sec">
                                    <img src="/assets/svg/community-icon.svg" alt="community icon" />
                                    <div className="col">
                                        <h4>Tech365</h4>
                                        <h6>44 community members</h6>
                                    </div>
                                </div>
                                <a href="#">ENTER SPACE</a>
                            </div>
                        </CommunityCard>
                        <CommunityCard>
                            <div className="head">
                                <h2>Communities you can join...</h2>
                            </div>
                            <div className="row">
                                <div className="sec">
                                <img src="/assets/svg/community-icon.svg" alt="community icon" />
                                <div className="col">
                                    <h4>Banking 101</h4>
                                    <h6>44 community members</h6>
                                </div>  
                                </div>
                                <a href="#">ENTER SPACE</a>
                            </div>
                        </CommunityCard>
                        
                        <NewSpace>
                            <h4>Want to create a new room  for your team?</h4>
                            <a href="#">CREATE A NEW SPACE</a>
                        </NewSpace>
                    </SectionTwoContent>
                </SectionTwoWrapper>
                <SectionThreeWrapper>
                    <SectionThreeContent>
                        <SectionThreeContent>
                            <h1>Learn how to use TeamKonect to connect</h1>

                            <ArticleWrapper>
                                <Article>
                                    <div className="img-wrapper">
                                        <img src="/assets/img/blog-img-1.png" alt="article image" />
                                    </div>
                                    <div className="post-content">
                                        <span>Solution</span>
                                        <h3>See how TeamKonect works for all kinds of teams</h3>
                                        <div className="row">
                                            <a href="#">LEARN MORE</a>
                                            <a href="#"><img src="/assets/svg/arrow-right.svg" alt="arrow icon" /></a>
                                        </div>
                                    </div>
                                </Article>
                                <Article>
                                    <div className="img-wrapper">
                                        <img src="/assets/img/blog-img-2.png" alt="article image" />
                                    </div>
                                    <div className="post-content">
                                        <span>Blog</span>
                                        <h3>See how TeamKonect works for all kinds of teams</h3>
                                        <div className="row">
                                            <a href="#">LEARN MORE</a>
                                            <a href="#"><img src="/assets/svg/arrow-right.svg" alt="arrow icon" /></a>
                                        </div>
                                    </div>
                                </Article>
                                <Article>
                                    <div className="img-wrapper">
                                        <img src="/assets/img/blog-img-3.png" alt="article image" />
                                    </div>
                                    <div className="post-content">
                                        <span>Blog</span>
                                        <h3>How to use TeamKonect to brainstorm and solve problems.</h3>
                                        <div className="row">
                                            <a href="#">LEARN MORE</a>
                                            <a href="#"><img src="/assets/svg/arrow-right.svg" alt="arrow icon" /></a>
                                        </div>
                                    </div>
                                </Article>
                            </ArticleWrapper>
                        </SectionThreeContent>
                    </SectionThreeContent>
                </SectionThreeWrapper>
            </Wrapper>
            <Footer />
        </>
    )
}

export default HomeScreen