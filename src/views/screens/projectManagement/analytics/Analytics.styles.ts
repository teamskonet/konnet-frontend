import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    position: relative;
    width: 100%;
    height: 100%;
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


    .stats-sec {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
        margin-right: 20px;
        width: 30px;
        img {
            display: block;
            width: 25px;
        }

        @media screen and (min-width: 880px) {
            flex: unset;
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
        cursor: pointer;

        img {
            display: block;
            min-width: 100%;
            min-height: 100%;
            /* max-width: unset; */
            position: absolute;
        }
    }
`;

export const  MenuBar = styled.ul<{showModal: boolean}>`
    display: flex;
    visibility: ${props => props.showModal ? 'visible' : 'hidden'};
    opacity: ${props => props.showModal ? '1' : '0'};
    flex-direction: column;
    position: fixed;
    top: ${props => props.showModal ? '20px' : '40px'};
    right: 20px;
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0px 0px 20px -5px #ccc;
    z-index: 99999;
    transition: all 0.3s ease-out;

    li {
        margin-bottom: 20px;
        color: #646363;
        white-space: nowrap;
        cursor: pointer;

        :first-child {
            display: flex;
            align-items: center;
            color: #169DC8;
            span {
                font-size: 14px;
                font-weight: 500;
                margin-right: 4px;
            }

            svg {
                font-size: 18px;
            }
        }

        :last-child {
            margin-bottom: 0px;
        }
    }

    .members-sec {
        display: flex;
        position: relative;
        height: 40px;

        span {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #169DC8;
            position: relative;
            z-index: 9;
            color: #fff;
            font-weight: 600;
            font-size: 14px;

            :nth-child(2) {
                left: 30px;
                z-index: 10;
                left: -10px;
                background-color: #E01E5A;
            }
            :last-child {
                left: 60px;
                z-index: 11;
                left: -20px;
                background-color: #ECB22E;
            }
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }

    .invite-sec {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #169DC8;
        padding: 10px 30px;
        color: #fff;
        border-radius: 10px;
        margin-right: 20px;
        width: 100%;

        svg {
            font-size: 18px;
        }

        span {
            margin-left: 6px;
            font-weight: 500;
            white-space: nowrap;
        }
    }

    .switch-sec {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #169DC8;
        padding: 10px 20px;
        width: 100%;
        border-radius: 10px;
        color: #169DC8;
        font-size: 13px;
        white-space: nowrap;

        span {
            font-size: 13px;
        }
    }

    @media screen and (min-width: 880px) {
        display: flex;
        visibility: unset;
        opacity: unset;
        flex-direction: row;
        box-shadow: none;
        position: unset;
        background-color: transparent;
        align-items: center;
        flex: 1;
        margin-left: 20px;
        transition: none;

        li {
            margin-bottom: 0px;
        }

        .members-sec {
            flex: 1;
        }
        .members-sec span {
            display: none;
        }

        .switch-sec {
            width: unset;
        }
    
        .invite-sec {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            span {
                display: none;
            }
        }
    }

    @media screen and (min-width: 1080px) {

        .members-sec {
            margin-left: 40px;
            justify-content: flex-end;
            span {
                display: flex;
                :nth-child(2) {
                    left: -10px;
                }
                :last-child {
                    left: -20px;
                }
            }
        }

        .invite-sec, .switch-sec  {
            width: unset;
        }
        .switch-sec {
            padding: 10px 30px;
        }

        .invite-sec {
            padding: 10px 30px;
            border-radius: 10px;

            span {
                display: block;
            }
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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 8% 20px 8%;
    width: 100%;
    flex: 1;
    overflow-y: auto;

`;
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

`;
export const TopWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SortBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;

    span {
        font-size: 13px;
        font-weight: 500;
        color: #169DC8;
        margin-right: 8px;
    }

    select {
        border: none;
        background-color: #169DC8;
        color: #fff;
        padding: 8px 15px;
        border-radius: 8px;
    }
`;

export const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
export const CartContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 250px;
    height: 250px;
    padding: 20px;
    box-shadow: 0px 0.5px 1.75px rgba(0, 0, 0, 0.039), 0px 1.85px 6.25px rgba(0, 0, 0, 0.19);
`;
export const TaskTypeListWrapper = styled.div`
    margin-top: 20px;
`;
export const TaskTypeList = styled.ul`
    display: flex;
    flex-direction: column;

    li {
        display: flex;
        align-items: center;
        margin-top: 20px;

        ::before {
            content: "";
            display: block;
            width: 30px;
            height: 30px;
            background: #3B00ED;
            margin-right: 12px;
        }

        :nth-child(2) {
            ::before {
                background: #26A69A;
            }
        }
        :nth-child(3) {
            ::before {
                background: #679309;
            }
        }
        :nth-child(4) {
            ::before {
                background: #EE6002;
            }
        }
        :nth-child(5) {
            ::before {
                background: #FFC107;
            }
        }
        :nth-child(6) {
            ::before {
                background: #E01E5A;
            }
        }

        span {
            color: #169DC8;
            font-size: 14px;
            font-weight: 400;
        }
    }

`;