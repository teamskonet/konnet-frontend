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


export const Content = styled.div`
    padding: 20px 8% 20px 8%;
    width: 100%;
    height: calc(100% - 90px);
    flex: 1;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
`;

export const VideoWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1080px;
    border-radius: 10px;
    background-color: #ccc;
    height: 100%;
    position: relative;
    overflow: hidden;
    margin: 0px auto;
`;

export const CallBlock = styled.div`
    /* flex: 1; */
    width: 50%;
    height: 50%;
    position: relative;

    img {
        min-height: 100%;
        min-width: 100%;
        object-fit: cover;
    }

    span {
        position: absolute;
        bottom: 20px;
        left: 20px;
        font-size: 13px;
        color: #09132C;
        background-color: #fff6;
        padding: 8px 10px;
        border-radius: 4px;
        backdrop-filter: blur(3px);
    }
`;

export const UserCallBlock = styled.div`
    width: 130px;
    height: 80px;
    position: absolute;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 10px -2px #ccc;
    right: 20px;
    bottom: 20px;

    img {
        min-height: 100%;
        min-width: 100%;
        object-fit: cover;
    }
`;

export const AddPeople = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 9px 10px;
    border-radius: 8px;
    position: absolute;
    top: 20px;
    right: 20px;
    box-shadow: 0px 0px 20px -5px #ccc;

    span {
        color: #09132C;
        font-size: 13px;
    }
    svg {
        color: #09132C;
        font-size: 18px;
        margin-right: 4px;
    }
`;