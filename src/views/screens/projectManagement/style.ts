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


    .stats-sec {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
        margin-right: 20px;
        width: 30px;
        cursor: pointer;
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
            position: relative;
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
            text-transform: uppercase;

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
    cursor: pointer;

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
export const FloatingBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    right: 8%;
    bottom: 90px;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px -5px #555;
    z-index: 99999;
    cursor: pointer;

    img {
        width: 20px;
    }

    @media screen and (min-width: 880px) {
        width: 80px;
        height: 80px;
        bottom: 110px;
        img {
            width: 30px;
        }
    }
`;
export const NewProjectModal = styled.div<{showModal: boolean}>`
    display: flex;
    visibility: ${props => props.showModal ? 'visible' : 'hidden'};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    padding: 20px;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100vw;
    z-index: 999999999;

    ::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: #0006;
        position: absolute;
        left: 0px;
        top: 0px;
        cursor: pointer;
        z-index: 2;
    }
`;

export const NewProjectModalContent = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 30px 40px;
    position: relative;
    z-index: 9;
    width: 100%;
    max-width: 640px;
    border-radius: 10px;
    overflow-y: auto;
    /* flex: 1; */

    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }

    .project-input {
        margin-bottom: 20px;
        input {
            width: 100%;
            border: 0.5px solid #169DC8;
            height: 50px;
            padding: 0px 20px;
            border-radius: 8px;
            font-size: 15px;
            font-weight: 600;
            color: #169DC8;

            ::placeholder {
                color: rgba(73, 71, 71, 0.3);
            }
        }
    }

    .date-col {
        display: flex;
        color: #128C7E;
        align-items: center;
        margin-bottom: 20px;

        span {
            font-size: 15px;
            font-weight: 400;
        }

        input {
            border: none;
            margin-left: 20px;
            color: #128C7E;
            font-size: 13px;
            font-weight: 600;
            padding: 8px 15px;
            border-radius: 6px;
            background-color: #e0fffb;
            cursor: pointer;

            ::placeholder {
                color: #128C7E;
            }
        }
    }

    h4 {
        color: #128C7E;
        font-weight: 600;
        font-size: 15px;
        margin-bottom: 10px;
    }
    textarea {
        border: 0.5px solid #169DC8;
        height: 150px;
        min-height: 150px;
        flex: 0;
        width: 100%;
        border-radius: 8px;
        resize: none;
        margin-bottom: 20px;
        padding: 20px;
    }

    .team-title-col {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        h5 {
            color: #128C7E;
            margin-right: 20px;
            font-size: 15px;
            font-weight: 500;
        }
        svg {
            fill: #128C7E;
        }
    }

    .team-select-col {
        margin-bottom: 20px;
        ul {
             li {
                 display: flex;
                 align-items: center;
                 background-color: #F6FDFF;
                 padding: 10px 20px;
                 color: #169DC8;
                 margin-top: 4px;
                 font-size: 15px;

                 span {
                     flex: 1;
                     margin-left: 10px;
                 }
                 svg {
                     font-size: 16px;
                     cursor: pointer;
                 }

                 ::before {
                     content: "";
                     display: block;
                     width: 4px;
                     height: 4px;
                     border-radius: 50%;
                     background: #169DC8;
                 }
             }
        }
    }

    .check-list-sec {
        h2 {
            color: #128C7E;
            margin-bottom: 10px;
            font-size: 15px;
            font-weight: 600;
        }

        .input-col {
            display: flex;
            align-items: center;
            margin-bottom: 20px;

            input {
                flex: 1;
                width: 100%;
                border: 0.5px solid #169DC8;
                height: 40px;
                padding: 0px 20px;
                border-radius: 8px;
                font-size: 14px;
                font-weight: 400;
                color: #222;

                ::placeholder {
                    color: #929495;
                }
            }

            select {
                width: 200px;
                margin: 0px 10px;
                border: 0.5px solid #169DC8;
                height: 40px;
                padding: 0px 20px;
                border-radius: 8px;
                font-size: 14px;
                font-weight: 400;
                color: #222;
            }
            svg {
                fill: #169DC8;
                font-size: 20px;
            }
        }

        button {
            padding: 15px 20px;
            border: none;
            background-color: #169DC8;
            color: #fff;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 20px;
            cursor: pointer;
        }
    }
    button {
        padding: 15px 20px;
        border: none;
        background-color: #169DC8;
        color: #fff;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
    }
`;

export const SpacesModal = styled.ul<{showModal: boolean}>`
    display: flex;
    visibility: ${props => props.showModal ? 'visible' : 'hidden'};
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
    position: absolute;
    padding: 10px 20px;
    left: 0px;
    min-width: 180px;
    background-color: #fff;
    z-index: 999999999;
    box-shadow: 0px 0px 20px -5px #ccc;
    border-radius: 4px;



    opacity: ${props => props.showModal ? '1' : '0'};
    top: ${props => props.showModal ? '0px' : '40px'};
    transition: all 0.3s ease-out;

    /* ::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: #0006;
        position: absolute;
        left: 0px;
        top: 0px;
        cursor: pointer;
        z-index: 2;
    } */

    li {
        padding: 10px 0px;
        color: #5d5b5b;
        cursor: pointer;

        :first-child {
            color: #5d5b5b;
        }

    }
    li.selected {
        color: ${props => props.theme.primaryColor} !important;
    }
`;

export const InviteModal = styled.div<{showModal: boolean}>`
    display: flex;
    visibility: ${props => props.showModal ? 'visible' : 'hidden'};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    padding: 20px;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100vw;
    z-index: 999999999;

    ::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: #0006;
        position: absolute;
        left: 0px;
        top: 0px;
        cursor: pointer;
        z-index: 2;
    }
`;
export const InviteModalContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 30px 40px;
    border-radius: 8px;
    background-color: #fff;
    position: relative;
    max-width: 480px;
    z-index: 99;

    h2 {
        color: rgba(73, 71, 71, 0.8);
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 15px;
    }

    input {
        height: 50px;
        width: 100%;
        border-radius: 8px;
        padding: 0px 20px;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 20px;
        color: #186DA5;
        border: 0.5px solid #169DC8;

        ::placeholder {
            color: rgba(73, 71, 71, 0.8);
        }
    }

    .row {
        display: flex;
        align-items: center;

        svg {
            color: #666666;
            font-size: 30px;
        }
        .spacer {
            flex: 1;
        }

        button {
            border: none;
            padding-bottom: 5px;
            font-weight: 500;
            background-color: #fff;
            color: #186DA5;
            font-size: 16px;
            margin-left: 20px;
            border-bottom: 1px solid #145266;
            cursor: pointer;

            :last-child {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: ${props => props.theme.primaryColor};
                color: #fff;
                width: 100px;
                height: 38px;
                border-radius: 4px;
                border: none;
                padding: 0px;
            }
        }
    }
`;