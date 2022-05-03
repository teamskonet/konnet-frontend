import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #fff;
    position: relative;
`;

export const  HeadBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding: 0px 8%;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    background-color: #f7f5fa;
    z-index: 9;

    .banner {
        display: flex;
        align-items: center;

        img {
            width: 30px;
            margin-right: 15px;
        }

        a {
            font-size: 17px;
            color: ${props => props.theme.primaryColor};
            font-weight: 600;
        }
    }

    .head-img {
        width: 30px;
        height: 30px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0px 0px 5px 7px rgba(0, 0, 0, 0.05);

        img {
            display: block;
            min-width: 100%;
            min-height: 100%;
            /* max-width: unset; */
            position: absolute;
        }
    }
`;

export const  ContentWappper = styled.div`
    padding: 0px 8%;
    /* background-color: #606; */
    width: 100%;
    padding: 90px 0px 90px 0px;
    z-index: 2;
`;
export const  Content = styled.div`

`;

export const Footer = styled.footer`
    display: flex;
    width: 100%;
    background-color: #169DC8;
    height: 60px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    z-index: 99999;

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