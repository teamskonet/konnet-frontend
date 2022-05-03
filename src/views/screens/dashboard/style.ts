import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: #fff;
    position: relative;
    z-index: 99;
    width: 100%;
`;

export const PageTitle = styled.h3`
    color: #494747;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
`;

export const Content = styled.div`
    padding: 20px 8%;
    width: 100%;
`;
export const RoomsWrapper = styled.div`
    width: 100%;


    @media screen and (min-width: 880px) {
        display: flex;
        justify-content: space-between;
    }
`;
export const Room = styled.ul`
    width: 100%;
    padding: 0px 0px;
    background: #3B97D3;
    box-shadow: 2px 6px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px 20px 0px 0px;
    margin-bottom: 20px;


    @media screen and (min-width: 880px) {
        width: calc(25% - 15px);
    }

    .head {
        display: flex;
        align-items: center;
        padding: 20px;

        .icon-box {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            background-color: #fff;
            width: 30px;
            height: 30px;
            font-size: 14px;
            color: #666666;
        }

        h3 {
            color: #fff;
            font-size: 15px;
            font-weight: 600;
            padding-left: 20px;
        }
    }

    .action-sec {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        background-color: #fff;
        border-top-right-radius: 20px;
        color: #414141;

        font-size: 16px;
        
        span {
            padding-left: 10px;
            color: #414141;
            font-size: 14px;
            font-weight: 500;
        }
    }
`;

export const TabContent = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #169DC8;
        height: 40px;
        width: 120px;
        color: #ffff;
        border-radius: 20px;
        font-weight: 600;
        font-size: 13px;
        cursor: pointer;

        :last-child {
            background-color: #fff;
            color: #169DC8;
        }
    }
`;

export const LiveRoomWrapper = styled.ul`

`;

export const LiveRoom = styled.ul`
    width: 100%;
    max-width: 480px;
    border-radius: 20px;
    height: 140px;
    margin: 0px auto;
    background-image: url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    padding: 20px;
    margin-bottom: 20px;
    overflow: hidden;

    ::before {
        content: "";
        width: 100%;
        height: 100%;
        background-color: #0006;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 1;
    }

    .row {
        display: flex;
        position: relative;
        z-index: 2;
        height: 100%;

        .col {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 1;
            padding: 0px 10px 0px 0px;

            .head {
                display: flex;
                color: #fff;

                .img-box {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    position: relative;
                    overflow: hidden;

                    img {
                        min-width: 100%;
                        min-height: 100%;
                        max-width: unset;
                        max-height: unset;
                    }
                }

                .info-sec {
                    padding-left: 10px;
                    h2 {
                        font-size: 14px;
                        font-weight: 600;
                        margin-bottom: 4px;
                    }
                    h4 {
                        font-size: 11px;
                        font-weight: 300;
                    }
                }
            }

            .footer-sec {
                display: flex;
                align-items: flex-end;
                color: #fff;

                img {
                    height: 15px;
                    margin-right: 10px;
                    margin-bottom: 5px;
                }

                span {
                    font-size: 13px;
                }
            }
        }
        .circle {
            display: flex;
            justify-content: center;
            align-items: center;
            align-self: center;
            background-color: #E7FFF5;
            height: 70px;
            width: 70px;
            border-radius: 50%;
            span {
                color: #004F68;
                font-size: 12px;
                font-weight: 500;
            }
        }
    }
`;