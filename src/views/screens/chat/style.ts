import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: #fff;
    position: relative;
    width: 100%;
    height: 100%;
`;

export const  HeadBar = styled.div`
    display: block;
    padding: 20px 20px;
    width: 100%;
    max-width: 480px;

    .banner {
        display: flex;
        align-items: center;
        margin-bottom: 30px;

        img {
            width: 40px;
            margin-right: 15px;
        }

        a {
            font-size: 22px;
            color: ${props => props.theme.primaryColor};
            font-weight: 600;
        }
    }
    
    .search-bar {
        display: flex;
        align-items: center;
        background-color: #fff;
        height: 40px;
        border-radius: 20px;
        padding: 0px 10px;
        color: #9393C1;
        widows: 100%;
        max-width: 480px;

        input {
            border: none;
            color: #222;
            font-size: 12px;
            margin-left: 10px;
            flex: 1;
            ::placeholder {
                color: #9393C1;
            }
        }

        svg {
            font-size: 17px;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 0% 0px 0%;
    width: 100%;
    height: 100%;

    @media screen and (min-width: 880px) {
        flex-direction: row;
    }
`;

export const TabWrapper = styled.ul`
    padding: 0px 20px;
    width: 100%;
    max-width: 480px;
`;
export const Tab = styled.ul`
    display: flex;
    width: 100%;
    max-width: 480px;
    height: 50px;
    background-color: #169DC8;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    overflow: hidden;

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 14px;
        font-weight: 500;
    
        :first-child {
            width: 30%;
        }
        :last-child {
            flex: 1;
        }
    }

    li.active {
        background: #fff;
        color: #169DC8;
    }
`;

export const ChatsViewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(22, 157, 200, 0.1);

    /* background-color: #f0f; */
    width: 100%;
    height: 100%;

    @media screen and (min-width: 880px) {
        width: 30%;
        max-width: 560px;
    }
`;

export const ChatList = styled.div`
    flex: 1;
    margin-top: 20px;
    overflow-y: auto;
`;
export const ChatCardWrapper = styled.div`
    width: 100%;
    max-width: 480px;
`;

export const ChatCard = styled.div`
    display: flex;
    padding: 0px 20px;
    margin-bottom: 20px;

    .img-box {
        position: relative;
        width: 60px;
        height: 60px;
        background-color: #cecece;
        border-radius: 30px;
        margin-right: 8px;
        overflow: hidden;

        img {
            position: absolute;
            min-width: 100%;
            min-height: 100%;
        }
    }

    .sec-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        padding: 3px 0px;
    }

    .head {
        display: flex;
        justify-content: space-between;

        h3 {
            color: #09132C;
            font-size: 15px;
            font-weight: 700;
        }

        span {
            color: #829C99;
            font-size: 10px;
            font-weight: 400;
        }
    }

    .footer {
        display: flex;
        justify-content: space-between;

        h6 {
            font-size: 11px;
            font-weight: 400;
            color: #5A6A9D;
        }

        .meta-sec {
            display: flex;
            svg {
                font-size: 14px;
                color: #2361FF;
            }
        }
    }
`;

export const MessageViewWrapper = styled.div<{showView: boolean}>`
    display: block;
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: #F7F5FA;
    z-index: 999;
    top: 0px;
    right: ${props => props.showView ? '0px' : '-100%'};
    transition: all 0.2s ease-in-out;

    @media screen and (min-width: 880px) {
        right: 0px;
        position: unset;
        flex: 1;
    }
`;

export const MessageContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 20px 20px 20px;
    height: 100%;
`;

export const MessageHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 0px;

    .toggle-action {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 40px;
        height: 40px;
        font-size: 20px;
        color: #130F26;

        @media screen and (min-width: 880px) {
            display: none;
        }
    }
`;


export const MessageHeader = styled.div`
    display: flex;
    flex: 1;
    height: 50px;

    @media screen and (min-width: 880px) {
        .clos-chat-view {
            display: none;
        }
    }

    .clos-chat-view {
        align-self: center;
        width: 25px;
        font-size: 18px;
        color: #130F26;
    }

    .photo-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        overflow: hidden;
        margin-right: 10px;
        position: relative;

        img {
            position: absolute;
            width: 100%;
            min-height: 100%;
            max-width: unset;
            max-height: unset;
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 4px 0px;
        flex: 1;

        .title {
            display: flex;
            align-items: center;
            h2 {
                font-size: 15px;
                font-weight: 600;
                margin-right: 8px;
                color: #09132C;
            }
            svg {
                color: #09132C;
            }
        }

        span {
            display: flex;
            align-items: center;
            font-size: 12px;
            color: #6E7FA9;

            ::before {
                content: "";
                width: 8px;
                height: 8px;
                border-radius: 50%;
                margin-right: 4px;
                background-color: #128C7E;
            }
        }
    }
`;

export const HeaderActions = styled.ul `
    display: none;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 60px;
    margin-right: 10px;

    @media screen and (min-width: 880px) {
        display: flex;
        width: unset;
    }

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(30px - 2.5px);
        height: calc(30px - 2.5px);
        background-color: #DCEFED;
        border-radius: 4px;
        color: #666666;
        font-size: 13px;
        margin-bottom: 5px;

        :nth-child(3), :last-child {
            margin-bottom: 0px;
        }

        @media screen and (min-width: 880px) {
            width: 40px;
            height: 40px;
            margin-bottom: 0px;
            margin-left: 10px;
        }
    }
`;

export const ConversationWrapper = styled.div`
    display: flex;
    background-color: #fff;
    width: 100%;
    flex: 1;
    border-radius: 8px;
    overflow: hidden;
`;
export const ConversationContent = styled.div`
    padding: 20px;
    width: 100%;
    flex: 1;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }
`;

export const Disclaimer = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    margin: 0px auto;
    width: 100%;
    max-width: 320px;
    background-color: #FEECDC;
    border-radius: 10px;
    margin-bottom: 20px;

    span {
        font-size: 9px;
        flex: 1;
        color: #312E40;
    }

    svg {
        font-size: 14px;
        margin-right: 10px;
        color: #312E40;
    }

    @media screen and (min-width: 880px) {
        max-width: 480px;
        border-radius: 12px;
        span {
            font-size: 12px;
        }
        svg {
            font-size: 18px;
        }
    }
`;

export const MessageBubbleWrapper = styled.div<{left: boolean}>`
    display: flex;
    align-items: ${props => props.left ? "flex-start" :"flex-end"};
    flex-direction: column;
    width: 100%;
`;
export const MessageBubble = styled.div<{left: boolean}>`
    max-width: 200px;
    margin-bottom: 15px;
    p {
        background-color: #D7F8F4;
        width: 100%;
        font-size: 12px;
        font-weight: 400;
        padding: 15px 15px;
        line-height: 18px;
        border-radius: 10px;
        border-bottom-right-radius: ${props => props.left ? "10px" : "0px"};
        border-bottom-left-radius: ${props => props.left ? "0px" : "10px"};
    }
    .meta {
        display: flex;
        justify-content: ${props => props.left ? "flex-start" :"flex-end"};
        margin-top: 8px;

        .time {
            font-size: 11px;
            font-weight: 400;
            color: #0B3048;
        }
    }
`;

export const InputSection = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    
    input {
        flex: 1;
        height: 40px;
        background-color: #fff;
        border-radius: 20px;
        border: none;
        padding: 0px 20px;
        color: #222;
        ::placeholder {
            color: #8F8F8F;
        }

        @media screen and (min-width: 880px) {
            height: 50px;
            border-radius: 25px;
        }
    }

    .record {
        margin-left: 10px;

        img {
            width: 23px;
        }
    }
    .add-emoji {
        img {
            width: 23px;
        }
    }
    .add-files {
        margin: 0px 10px;
        img {
            width: 23px;
        }
    }
`;