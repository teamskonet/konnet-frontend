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
    /* background-color: #f0f; */
    min-height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0px;
    z-index: 2;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    margin-bottom: 80px;

    h2 {
        color: #048EB9;
        font-size: 25px;
        font-weight: 600;
        margin-bottom: 30px;
    }

    h4 {
        color: #5D5A6F;
        font-size: 13px;
        font-weight: 400;
        margin-bottom: 10px;
    }
    input {
        background: #fff;
        border-radius: 4px;
        height: 40px;
        border: none;
        color: #222;
        margin-bottom: 20px;
        padding: 0px 20px;
        border: 1px solid #E0ECF5;
    }
    button {
        background: ${props => props.theme.primaryColor};
        border: none;
        height: 45px;
        font-weight: 600;
        color: #fff;
        border-radius: 4px;
        border: 1px solid ${props => props.theme.primaryColor};
        cursor: pointer;
    }

    @media screen and (min-width: 880px) {
        max-width: 480px;
        margin-bottom: 100px;

        h2 {
            font-size: 30px;
        }
        h4 {
            font-size: 18px;
        }
        input {
            margin-bottom: 30px;
        }
        input, button {
            height: 50px;
        }
    }
`;