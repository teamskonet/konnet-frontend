import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    position: relative;
    height: 100%;
    overflow: hidden;
`;

export const  HeadBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding: 0px 8%;
    top: 0px;
    left: 0px;
    width: 100%;
    background-color: #f7f5fa;

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
            position: absolute;
        }
    }
`;

export const PageTitle = styled.h3`
    color: #494747;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
`;

export const Content = styled.div`
    padding: 20px 8% 0px 8%;
    width: 100%;
    flex: 1;
    overflow-y: auto;
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

    :nth-child(2) {
        background: #FF6652;
    }
    :nth-child(3) {
        background: #2EB67D;
    }
    :nth-child(4) {
        background: #ECB22E;
    }


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
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;

export const LiveRoom = styled.ul`
    width: 100%;
    max-width: 480px;
    border-radius: 20px;
    height: 140px;
    background: linear-gradient(111.88deg, #169DC8 0%, #007BA2 87.25%);
    position: relative;
    padding: 20px;
    overflow: hidden;

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
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    position: relative;
                    overflow: hidden;

                    img {
                        min-width: 100%;
                        min-height: 100%;
                        object-fit: cover;
                    }
                }

                .info-sec {
                    padding-left: 10px;
                    h2 {
                        font-size: 17px;
                        font-weight: 600;
                        margin-bottom: 4px;
                    }
                    h4 {
                        font-size: 13px;
                        font-weight: 400;
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
                }

                span {
                    font-size: 13px;
                }
            }
        }
        .join-sec {
            display: flex;
            flex: 1;
            justify-content: flex-end;
            align-items: flex-end;
            button {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #fff;
                width: 80px;
                height: 26px;
                border-radius: 4px;
                font-size: 14px;
                font-weight: 600;
                color: #053D71;
                border: none;
            }
        }
    }
`;