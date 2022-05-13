import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(22, 157, 200, 0.19);
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

export const CardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 720px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

export const Cards = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 20px -5px #ccc;
    margin-bottom: 20px;
    width: 100%;
    max-width: 480px;

    @media screen and (min-width: 720px) {
        flex-direction: row;
        flex-wrap: wrap;
        margin-right: 20px;
        width: calc(50% - 10px);

        :nth-child(2n) {
            margin-right: 0px;
        }
    }

    @media screen and (min-width: 880px) {
        flex-direction: row;
        flex-wrap: wrap;
        margin-right: 20px;
        width: calc(33.33% - 13.33px);

        :nth-child(2n) {
            margin-right: 20px;
        }

        :nth-child(3n) {
            margin-right: 0px;
        }
    }

    @media screen and (min-width: 1080px) {
        margin-right: 20px;
        width: calc(25% - 15px);

        :nth-child(3n) {
            margin-right: 20px;
        }
        :nth-child(4n) {
            margin-right: 0px;
        }
    }

    h1 {
        display: flex;
        align-items: center;
        color: #169DC8;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;

        svg {
            margin-left: 6px;
        }
    }
    h5 {
        color: #128C7E;
        font-weight: 500;
        font-size: 13px;
        margin-bottom: 20px;
        
        b {
            font-weight: 600;
        }
    }
    h4 {
        color: #128C7E;
        font-weight: 600;
        font-size: 14px;
        margin-bottom: 10px;
    }

    span {
        display: block;
        color: #169DC8;
        font-size: 13px;
        font-weight: 400;
        line-height: 18px;
        margin-bottom: 20px;
    }

    ul {
        li {
            color: #169DC8;
            font-size: 13px;
            font-weight: 400;
            margin-bottom: 4px;
            list-style: disc;
            margin-left: 13px;
        }
    }

    .meta-sec {
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
        color: #169DC8;
        padding: 0px;
        height: 6px;

        span, ::before, ::after {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: #169DC8;
        }

        span {
            margin: 0px 4px;
        }
    }
`;
export const CardTitle = styled.div`
`;
