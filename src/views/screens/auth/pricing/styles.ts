import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #fff;
    position: relative;

    ::before {
        content: "";
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 50vh;
        background-color: #E0ECF5;
        z-index: 2;
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
    }
`;

export const  HeadBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding: 0px 8%;
    position: relative;
    z-index: 9;

    .banner {
        display: flex;
        align-items: center;

        img {
            width: 40px;
            margin-right: 15px;
        }

        a {
            font-size: 20px;
            color: ${props => props.theme.primaryColor};
            font-weight: 600;
        }
    }
`;

export const  Content = styled.div<{finishedFirstStep: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0px 8%;
    background-color: #fff0;
    margin-top: 40px;
    width: 100%;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    position: relative;
    top: 0;
    left: 0px;
    z-index: 999;

    h2 {
        color: #048EB9;
        text-align: center;
        font-size: 35px;
        font-weight: 600;
        margin-bottom: 20px;
    }

    h4 {
        color: #048EB9;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 30px;
    }
`;

export const PriceCardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border-radius: 30px;
    flex-wrap: wrap;
    flex-direction: column;

    @media screen and (min-width: 880px) {
        flex-direction: row;
        align-items: stretch;
    }
`;

export const PriceCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #169DC8;
    box-shadow: 1px 7px 9px 9px rgba(188, 183, 183, 0.15);
    border-radius: 20px;
    padding: 0px;
    width: 100%;
    max-width: 310px;
    overflow: hidden;
    margin-bottom: 40px;

    
    @media screen and (min-width: 880px) {
        width: calc(50% - 40px);
    }

    .head {
        display: flex;
        align-items: flex-end;
        margin-top: 20px;
        margin-bottom: 20px;

        span {
            font-size: 40px;
            font-weight: 500;
            color: #fff;

            :last-child {
                font-size: 13px;
                font-weight: 400;
                margin-left: 10px;
                margin-bottom: 5px;
            }
        }
    }

    .features {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 20px;
        padding: 0px 20px;
        span {
            margin: 0px 20px;
            font-size: 14px;
            font-weight: 400;
            color: #fff;
        }

        ::before {
            content: "";
            display: block;
            width: 60px;
            height: 1px;
            background-color: #C8C8C8;
        }
        ::after {
            content: "";
            display: block;
            width: 60px;
            height: 1px;
            background-color: #C8C8C8;
        }
    }

    ul {
        margin-top: 10px;
        flex: 1;
        li {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            color: #fff;

            svg {
                color: #A1D24C;
                font-size: 18px;
                margin-right: 18px;
            }
            span {
                font-size: 13px;
                font-weight: 300;
            }
        }
    }
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60px;
        margin-top: 50px;
        background-color: #fff;
        color: #169DC8;
        font-size: 15px;
        font-weight: 600;
    }

    :first-child {
        background-color: #fff;
        overflow: unset;

        .head {
            span {
                color: #040D42;
            }
        }
        ul {
            li {
                color: #000;
                span {
                    font-weight: 400;
                }
            }
        }
        .features {
            span {
                color: #040D42;
            }
        }
        a {
            background: #169DC8;
            color: #fff;
            border-radius: 4px;
        }
    }
    :last-child {
        display: flex;
        .head {
            span {
                font-size: 20px;
                font-weight: 600;
            }
        }

        ul {
            display: flex;
            justify-content: center;
            align-items: center;
            li {
                font-size: 13px;
                padding: 0px 20px;
                font-weight: 400;
                text-align: center;
                line-height: 23px;
            }
        }
    }
`;
