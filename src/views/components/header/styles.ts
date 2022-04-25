import styled from "styled-components";

export const  HeaderWrapper = styled.header`
    background-color: ${(props) => props.theme.primaryColor};
    padding: 0px 8%;
`;

export const  HeadBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .banner {
        display: flex;
        align-items: center;
        height: 90px;

        img {
            width: 40px;
            margin-right: 15px;
        }

        h2 {
            font-size: 20px;
            color: #fff;
            font-weight: 900;
        }
    }
`;

export const ToggleMenu = styled.div`
    display: block;
    width: 22px;
    cursor: pointer;

    span {
        margin: 4px 0px;
    }
    span, ::before, ::after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: #fff;
    }

    @media screen and (min-width: 880px) {
        display: none;
    }
`;

export const  Nav = styled.nav<{navigationState: boolean}>`
    display: block;
    position: fixed;
    left: 0px;
    top: 0px;
    height: 100vh;
    z-index: 9999;

    ::before {
        content: "";
        position: fixed;
        left: 0px;
        top: 0px;
        display: ${props => props.navigationState ? "block" : "none"};
        height: 100vh;
        width: 100%;
        background-color: ${props => props.navigationState ? "#0006" : "transparent"};
        transition: all 0.2s ease-in-out;

        @media screen and (min-width: 800px) {
            background-color: transparent;
            width: 240px;
            height: unset;
            z-index: 999999999;
        }
    }

    @media screen and (min-width: 800px) {
        width: 100%;
        height: unset;
        position: unset;
        background-color: transparent;
    }
`;
export const NavContent = styled.div<{navigationState: boolean}>`
    display: block;
    background-color: #fff;
    position: fixed;
    left: ${props => props.navigationState ? "0px" : "-240px"};
    width: 240px;
    height: 100%;
    z-index: 999999;
    transition: all 0.2s ease-in-out;

    .nav-head {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 20px 30px;
        border-bottom: 1px solid #ccc;
        h2 {
            font-size: 18px;
            font-weight: 500;
            margin-left: 10px;
            color: ${props => props.theme.primaryColor};
        }
        img {
            width: 40px;
        }
    }

    ul {
        :first-of-type {
            padding: 0px 20px;
            margin-top: 20px;
            li {
                margin-bottom: 15px;
                a {
                    display: block;
                    padding: 10px 10px;
                    color: #333;
                    font-weight: 400;
                }
            }
        }
        :last-child {
            margin-top: 20px;
            padding: 20px 30px;
            li {
                margin-bottom: 20px;
                :first-child {
                    a {
                        color: ${props => props.theme.primaryColor};
                    }
                }
                :last-child {
                    a {
                        background-color: ${props => props.theme.primaryColor};
                        color: #fff;
                    }
                }
                a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 50px;
                    font-weight: 600;
                    font-size: 11px;
                    border:  1px solid ${props => props.theme.primaryColor};
                    border-radius: 4px;
                    text-transform: uppercase;
                }
            }
        }
    }

    @media screen and (min-width: 880px) {
        display: flex;
        align-items: center;
        position: unset;
        background-color: unset;
        height: unset;
        flex: 1;
        justify-content: flex-end;
        width: 100%;
        transition:unset;

        .nav-head {
            display: none;
        }

        ul {
            display: flex;
            padding: 0px 0px;
            margin-top: 0px;
            :first-of-type {
                flex: 1;
                justify-content: center;
                padding: 0px 0px;
                margin-top: 0px;
                li {
                    margin-bottom: 0px;
                    margin-right: 40px;
                    :last-child {
                        margin-right: 0px;
                    }
                    a {
                        color: #fff;
                        font-size: 14px;
                        font-weight: 800;
                    }
                }
            }
            :last-child {
                padding: 0px;
                li {
                    :first-child {
                        margin-right: 15px;
                        a {
                            color: #fff;
                        }
                    }
                    :last-child {
                        a {
                            color: rgba(69, 5, 85, 1);
                            background-color: #fff;
                        }
                    }
                    a {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 140px;
                        height: 40px;
                        font-weight: 700;
                        font-size: 11px;
                        color: rgba(69, 5, 85, 1);
                        border:  2px solid #fff;
                        border-radius: 7px;
                        text-transform: uppercase;
                    }
                }
            }
        }
    }
`;

export const SlideWrapper = styled.div`
    padding: 20px 0%;
    @media screen and (min-width: 880px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const SlideTextWrapper = styled.div`
    width: 100%;
    max-width: 550px;
    margin-bottom: 40px;
    span {
        display: inline-block;
        background-color: #fff;
        border-radius: 10px;
        padding: 12px 15px;
        border-radius: 6px;
        font-size: 13px;
        font-weight: 600;
        margin-bottom: 35px;
        color: #FF6652;
    }
    h1 {
        font-size: 40px;
        color: #fff;
        font-weight: 700;
        margin-bottom: 40px;
    }
    h6 {
        color: #fff;
        font-size: 15px;
        font-weight: 400;
        margin-bottom: 48px;
    }
    .slide-form {
        display: flex;
        background-color: #fff;
        padding: 6px;
        border-radius: 5px;
        input {
            flex: 1;
            height: 40px;
            padding: 0px 15px;
            border: none;
            color: #222;
            ::placeholder {
                color: rgba(93, 90, 111, 0.6);
            }
        }
        button {
            background-color: ${(props) => props.theme.secondaryColor};
            border: none;
            font-size: 14px;
            width: 140px;
            border-radius: 5px;
            color: #fff;
        }
    }
    @media screen and (min-width: 880px) {
        margin-bottom: 0px;
    }
`;
export const SlideImgWrapper = styled.div`

`;