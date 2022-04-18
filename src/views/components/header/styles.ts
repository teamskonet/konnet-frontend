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

export const  Nav = styled.nav`
    display: none;

    @media screen and (min-width: 880px) {
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex-end;
        ul {
            display: flex;
            :first-child {
                flex: 1;
                justify-content: center;
                li {
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
                li {
                    :first-child {
                        margin-right: 15px;
                        a {
                            color: #fff;
                        }
                    }
                    :last-child {
                        a {
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
        font-size: 50px;
        color: #fff;
        font-weight: 700;
        margin-bottom: 40px;
    }
    h6 {
        color: #fff;
        font-size: 14px;
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