import styled from 'styled-components'

export const FooterWrapper = styled.footer`
    background-color: #fff;
    ::after {
        content: "";
        display: block;
        width: 100%;
        height: 100px;
        background-color: ${(props) => props.theme.primaryColor};
    }
`;

export const FooterContent = styled.div`
    padding: 100px 8% 50px 8%;
`;

export const FooterNavWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    img {
        display: none;
        width: 100px;
        margin: 0px 30px 50px 0px;

        @media screen and (min-width: 880px) {
            display: block;
        }
    }
`;
export const FooterNav = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    flex: 1;
    @media screen and (min-width: 640px) {
        flex-direction: row;
    }
`;

export const FooterItem = styled.div`
    /* flex: 1; */
    margin-bottom: 50px;
    h4 {
        color: #494747;
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 18px;
    }
    ul {
        li {
            margin-bottom: 10px;
            a {
                color: #494747;
                font-size: 13px;
                font-weight: 400;
            }
        }
    }

    @media screen and (min-width: 640px) {
        flex-basis: 50%;
    }

    @media screen and (min-width: 880px) {
        flex-basis: 30%;
    }
    @media screen and (min-width: 1080px) {
        flex-basis: 20%;
    }
`;


export const FooterMetaWrapper = styled.div`
    border-top: 0.5px solid #000;
    padding: 100px 0px;
    background-color: #fff;

    .row {
        display: flex;
        flex-direction: column;
        width: 100%;
        .col {
            flex: 1;
            ul {
                display: flex;
                flex-wrap: wrap;
                li {
                    margin-right: 15px;
                    :last-child {
                        margin-right: 0px;
                        a {
                            display: flex;
                            align-items: center;
                            margin-right: 0px;
                            span {
                                margin: 0px 5px;
                            }
                        }
                    }
                    a {
                        color: #000;
                        font-size: 14px;
                        font-weight: 500;
                    }
                }
            }
            p {
                margin-top: 60px;
                color: #000;
                font-size: 13px;
                font-weight: 400;
            }
        }
        ul.social-col {
            margin-top: 40px;
            display: flex;
            li {
                margin-right: 20px;
                :last-child {
                    margin-right: 0px;
                }
                a {
                    display: block;
                    font-size: 30px;
                    color: ${(props) => props.theme.primaryColor};
                }
            }
            @media screen and (min-width: 880px) {
                margin-top: 0px;
            }
        }

        @media screen and (min-width: 880px) {
            flex-direction: row;
        }
    }
`;