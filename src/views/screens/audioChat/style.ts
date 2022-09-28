import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F7F5FA;
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
    padding: 20px;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    align-items: flex-start;
    width: 100%;
    max-width: 1080px;
    border-radius: 10px;
    background-color: #ccc;
    gap: 20px;
    /* height: 100%; */
    position: relative;
    overflow: hidden;
    margin: 0px auto;
    background: #fff;

    /* ::after {
        content: "";
        flex: 1;
    } */
`;

export const CallBlock = styled.div`
    position: relative;
    /* margin-right: 10px; */
    margin-bottom: 20px;
    :first-child {
        .img-wrapper {
            border: 3px solid ${props => props.theme.primaryColor};
            padding: 3px;
        }
    }
    :last-child {
        margin-right: auto;
    }
    .img-wrapper {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;

        img {
            min-height: 100%;
            min-width: 100%;
            border-radius: 50%;
            object-fit: cover;
        }
    }

    span {
        font-size: 13px;
        color: #09132C;
        margin-top: 4px;
        font-weight: 600;
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