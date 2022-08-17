import styled from "styled-components";

export const Wrapper = styled.div<{height: any}>`
    display: flex;
    flex-direction: column;
    height: ${props => props.height}px;
    background-color: #fff;
    position: relative;
    bottom: 0px;
    overflow: hidden;
    /* height: -webkit-fill-available; */
`;


export const  ContentWappper = styled.div`
    flex: 1;
    padding: 0px 8%;
    /* background-color: #606; */
    width: 100%;
    padding: 0px 0px 0px 0px;
    overflow: hidden;
`;
export const  Content = styled.div`
    height: 100%;
    overflow: hidden;
`;

export const Footer = styled.footer`
    display: flex;
    width: 100%;
    background-color: #169DC8;
    height: 60px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    ul {
        display: flex;
        align-items: center;
        flex: 1;
        li {
            flex: 1;
            a {
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                font-size: 20px;

                img {
                    width: 20px;
                }
                @media screen and (min-width: 880px) {
                    font-size: 30px;
                    img {
                        width: 30px;
                    }
                }
            }
        }
    }
    @media screen and (min-width: 880px) {
        height: 80px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
`;