import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: #fff;
    position: relative;
    z-index: 99;
`;
export const SectionOneWrapper = styled.div`
    background-color: #fff;
`;
export const SectionOneContent = styled.div`
    background-color: #fff;
    padding: 100px 8%;

    h1 {
        color: rgba(10, 3, 60, 1);
        text-align: center;
        max-width: 640px;
        line-height: 40px;
        margin: 0px auto;
        font-size: 35px;
        font-weight: 600;
        margin-bottom: 30px;
    }
    h4 {
        color: rgba(93, 90, 111, 1);
        text-align: center;
        max-width: 640px;
        margin: 0px auto;
        font-weight: 400;
        font-size: 14px;
        line-height: 25px;
    }
    a.join-link {
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${(props) => props.theme.secondaryColor};
        width: 200px;
        height: 45px;
        border-radius: 6px;
        margin: 0px auto;
        color: #fff;
        font-size: 13px;
        margin-top: 20px;
    }

    img {
        width: 100%;
        position: relative;
        @media screen and (min-width: 880px) {
            margin-top: -50px;
        }
    }

    ul {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-top: 20px;
        li {
            display: flex;
            align-items: center;
            flex: 1;
            width: 100%;
            max-width: 300px;
            margin: 0px auto;
            :nth-child(2) {
                margin: 20px auto;
            }
            background: #fff;
            padding: 15px 20px;
            border-radius: 5px;
            filter: drop-shadow(3px 4px 4px rgba(99, 96, 96, 0.25));
            span:first-child {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 65px;
                height: 60px;
                margin-right: 20px;
                border-radius: 8px;
                background-color: #FFF4F2;

                img {
                    display: block;
                    width: 30px;
                    margin-top: 0px;
                }
            }

            span:last-child {
                color: rgba(10, 3, 60, 1);
                font-size: 15px;
                font-weight: 700;
            }

            :nth-child(2) {
                span {
                    :first-child {
                        background-color: rgba(248, 242, 255, 1);
                    }
                }
            }
            :last-child {
                span {
                    :first-child {
                        background-color: rgba(229, 255, 243, 1);
                    }
                }
            }
        }

        @media screen and (min-width: 880px) {
            flex-direction: row;
            justify-content: center;
            li {
                margin: 0px;
                :nth-child(2) {
                    margin: 0px 40px;
                }
            }
        }
    }
`;

export const SectionTwoWrapper = styled.div`
    background-color: ${(prop) => prop.theme.primaryColor};
    padding: 100px 8%;
`;
export const SectionTwoContent = styled.div`
    h1 {
        color: #fff;
        font-size: 33px;
        font-weight: 900;
        margin-bottom: 20px;
        text-align: center;
    }
`;
export const CommunityCard = styled.div`
    background-color: #fff;
    border-radius: 10px;
    border: 7px solid #83afd6;
    border-bottom-width: 15px;
    margin-bottom: 25px;

    .head {
        background-color: #FFDC5D;
        padding: 15px 20px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        margin-top: -10px;
        h2 {
            color: #000;
            font-size: 16px;
            font-weight: 400;
        }
    }
    .row {
        display: flex;
        flex-direction: column;
        padding: 20px;
        background: #fff;
        margin-bottom: -8px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

        @media screen and (min-width: 880px) {
            flex-direction: row;
        }

        .sec {
            display: flex;
            flex: 1;
            margin-bottom: 20px;
            @media screen and (min-width: 880px) {
                margin-bottom: 0px;
            }
            img {
                width: 70px;
                height: 70px;

                margin-right: 20px;
            }
            .col {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 8px 0px;
                flex: 1;
                h4 {
                    color: #000;
                    font-size: 14px;
                    font-weight: 600;
                }
                h6 {
                    color: #000;
                    font-size: 13px;
                    font-weight: 400;
                }
            }
        }
        a {
            white-space: nowrap;
            padding: 12px 20px;
            border-radius: 8px;
            background-color: #FFDC5D;
            font-size: 13px;
            font-weight: 800;
            color: #494747;
            align-self: flex-end;
        }
    }
`;

export const NewSpace = styled.div`
    background-color: #fff;
    outline: 5px solid #83afd6;
    padding: 30px 20px;
    border-radius: 10px;
    margin-top: 120px;
    display: flex;
    justify-content: space-between;
    flex-direction:column ;
    align-items: center;

    h4 {
        color: #000;
        font-weight: 700;
        font-size: 16px;
        margin-bottom: 20px;
    }
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #450555;
        padding: 12px 40px;
        font-size: 14px;
        font-weight: 400;
        border-radius: 8px;
        color: #000;
        white-space: nowrap;
    }

    @media screen and (min-width: 880px) {
        flex-direction: row;
        h4 {
            font-weight: 700;
            margin-bottom: 0px;
            padding-left: 30px;
        }
    }
`;



export const SectionThreeWrapper = styled.div`
    background-color: ${(prop) => prop.theme.primaryColor};
    position: relative;
    overflow: hidden;
    ::before {
        content: "";
        display: block;
        position: absolute;
        background-color: #fff;
        height: 100%;
        width: 100%;
        bottom: -350px;
        left: 0px;

        @media screen and (min-width: 880px) {
            bottom: -200px;
        }
    }
`;
export const SectionThreeContent = styled.div`
    position: relative;
    padding: 0px 8%;
    h1 {
        color: #fff;
        font-size: 33px;
        font-weight: 900;
        margin-bottom: 40px;
        text-align: center;
    }
`;
export const ArticleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;

    @media screen and (min-width: 880px) {
        flex-direction: row;
    }
`;
export const Article = styled.div`
    width: 100%;
    max-width: 320px;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0px 0px 50px 0px;

    @media screen and (min-width: 880px) {
        margin: 0px;
    }

    :nth-child(2) {
        @media screen and (min-width: 880px) {
            margin: 0px 50px;
        }
    }

    .img-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ccc;
        height: 200px;
        position: relative;
        img {
            min-width: 100%;
            min-height: 100%;
            position: absolute;
        }
    }
    .post-content {
        padding: 20px 0px;
        span {
            color: #000;
            font-weight: 300;
            font-size: 14px;
        }
        h3 {
            margin-top: 10px;
            color: #000;
            font-weight: 800;
            font-size: 18px;
            line-height: 25px;
        }
        .row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 30px;
            a {
                color: #7AA9F0;
                font-size: 14px;
                font-weight: 600;
                
                :last-child {
                    padding-right: 20px;
                    img {
                        width: 15px;
                    }
                }
            }
        }
    }
`;