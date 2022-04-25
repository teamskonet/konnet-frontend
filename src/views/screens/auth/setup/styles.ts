import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
`;

export const  HeadBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding: 0px 8%;
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
    background-color: rgba(22, 157, 200, 0.15);
    height: calc(100vh - 90px);
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;

    .form-indicator {
        display: flex;
        margin-top: 10vh;
        cursor: pointer;

        ::before {
            content: "";
            width: 30px;
            height: 30px;
            background-color:  ${props => !props.finishedFirstStep ?  "rgba(22, 157, 200, 1)" : "transparent"};
            border: 2px solid rgba(22, 157, 200, 1);
            border-radius: 50%;
            margin-right: 20px;
            transition: all 0.5s ease-in-out;
        }
        ::after {
            content: "";
            width: 30px;
            height: 30px;
            background-color:  ${props => props.finishedFirstStep ?  "rgba(22, 157, 200, 1)" : "transparent"};
            border: 2px solid rgba(22, 157, 200, 1);
            border-radius: 50%;
            transition: all 0.5s ease-in-out;
        }
    }
`;

export const  FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const  Form = styled.div`
    display: flex;
    width: 100%;
    max-width: 480px;
    overflow: hidden;
    position: relative;
`;
export const  FormContent = styled.div<{finishedFirstStep: boolean}>`
    display: flex;
    flex-direction: column;
    min-width: 100%;
    position: relative;
    left: ${props => props.finishedFirstStep ? "-100%" : "0%"};
    flex: 1;
    transition: all 0.5s ease-in-out;

    :first-child {
        // margin-right: 20px;
    }
    h2 {
        color: rgba(4, 142, 185, 1);
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 30px;

        @media screen and (min-width: 880px) {
            font-size: 30px;
        }
    }
    label {
        font-size: 12px;
        font-weight: 500;
        color: rgba(11, 126, 163, 1);
        margin-bottom: 6px;
        @media screen and (min-width: 880px) {
            font-size: 13px;
            margin-bottom: 8px;
        }
    }
    input {
        border: none;
        height: 45px;
        border-radius: 6px;
        padding: 0px 20px;
        margin-bottom: 20px;
        font-size: 12px;

        ::placeholder {
            color: rgba(93, 90, 111, 1);
        }

        @media screen and (min-width: 880px) {
            height: 50px;
        }
    }

    button {
        background-color: #169DC8;
        height: 45px;
        border-radius: 6px;
        border: none;
        color: #fff;
        font-size: 13px;
        font-weight: 600;
        margin-top: 10px;
        cursor: pointer;
        @media screen and (min-width: 880px) {
            height: 50px;
        }
    }
`;