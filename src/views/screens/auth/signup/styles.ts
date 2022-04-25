import styled from 'styled-components'

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

export const  ColumWrapper = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    padding: 20px 0px;
    height: calc(100vh - 90px);
    
    @media screen and (min-width: 880px) {

        ::after {
            content: "";
            width: 1px;
            display: block;
            background: linear-gradient(180deg, rgba(10, 3, 60, 0) 0%, #0A033C 51.56%, rgba(10, 3, 60, 0) 100%);
            order: 2;
        }
    }
`;
export const  ColumOne = styled.div`
    display: none;
    padding: 0px 8%;
    order: 1;
    @media screen and (min-width: 880px) {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        h3 {
            font-size: 30px;
            font-weight: 700;
            color: #0A033C;
            margin-bottom: 40px;
        }
        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
`;
export const  ColumTwo = styled.div`
    display: flex;
    order: 3;
    flex-direction: column;
    width: 100%;
    flex: 1;
    padding: 0px 8%;
    height: calc(100vh - 90px);
    overflow-y: auto;

    * {
        max-width: 500px;
    }

    @media screen and (min-width: 880px) {
        justify-content: center;
    }

    .google-auth {
        display: flex;
        align-items: center;
        padding: 4px;
        border-radius: 4px;
        border: 1px solid #DEDDE4;
        margin-bottom: 30px;
        width: 100%;
        div {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            border-radius: 4px;
            background-color: #E93E30;
            color: #fff;
            margin-right: 10px;
            font-size: 20px;
        }
        span {
            font-size: 13px;
            font-weight: 400;
            color: #5D5A6F;
        }
    }

    .email-auth {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        color: #5D5A6F;
        font-size: 13px;

        ::before {
            content: "";
            display: block;
            width: 30px;
            height: 1.2px;
            background-color: #5D5A6F;
            margin-right: 10px;
        }
        ::after {
            content: "";
            display: block;
            width: 30px;
            height: 1.2px;
            background-color: #5D5A6F;
            margin-left: 10px;
        }
    }
     label {
         display: block;
         font-size: 13px;
         font-weight: 600;
         color: #0A033C;
         margin: 10px 0px 10px 0px;
     }
     .input-col {
         display: flex;
         align-items: center;
         padding: 4px 10px;
         border: 1px solid #DEDDE4;
         margin-bottom: 20px;
         border-radius: 4px;
         font-size: 18px;
         color: #5D5A6F;

         input {
             flex: 1;
             margin-left: 10px;
             border: none;
             height: 40px;
             background-color: #fff;
             font-size:13px ;
             color: #5D5A6F;

             ::placeholder {
                 color: #5D5A6F;
             }
         }
     }
     .terms-col {
         display: flex;
         align-items: center;
         margin-top: 3px;

         .check-box {
             display: flex;
             justify-content: center;
             align-items: center;
             width: 16px;
             height: 16px;
             border-radius: 4px;
             border: 1.5px solid #9C4DF4;
             margin-right: 10px;
             color: #9C4DF4;
         }
         .terms-text {
             display: flex;
             align-items: center;
            span {
                font-size: 14px;
                color: #5D5A6F;
                font-weight: 400;
                margin-right: 10px;
            }
            a {
                font-size: 14px;
                font-weight: 400;
                color: #333;
            }
         }
     }
     button {
         background-color: #3B97D3;
         border: none;
         width: 100%;
         flex-basis: 45px;
         height: 45px;
         border-radius: 4px;
         color: #fff;
         margin-top: 30px;
     }

     .form-meta {
         display: flex;
         justify-content: center;
         align-items: center;
         margin-top: 30px;

         span {
             font-size: 14px;
             color: #5D5A6F;
             font-weight: 400;
             margin-right: 10px;
         }
         a {
             font-size: 14px;
             font-weight: 400;
             color: #9C4DF4;
         }
     }
`;