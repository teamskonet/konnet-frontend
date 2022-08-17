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
    background-color: #fff;

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
    .header-spacer {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding: 0px 20px;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 0.8px solid ${props => props.theme.primaryColor};
            border-radius: 19px;
            height: 38px;
            padding: 8px 20px;
            color: ${props => props.theme.primaryColor};
            font-weight: 500;
            font-size: 13px;
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

export const ColumWrapper = styled.div`
    padding: 20px 0px;
    width: 100%;
    max-width: 720px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    margin: 0px auto;

    h3 {
        color: #222;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 15px;

        :nth-of-type(2) {
            margin-top: 20px;
        }
    }

    .edit-avatar {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        

        .img-cover {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            margin-right: 20px;
            overflow: hidden;

            img {
                object-fit: cover;
                min-height: 100%;
                min-width: 100%;
            }
        }

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 150px;
            height: 38px;
            border-radius: 19px;
            background-color: transparent;
            border: 1px solid ${props => props.theme.primaryColor};
            color: ${props => props.theme.primaryColor};
            font-size: 13px;
            font-weight: 400;
            cursor: pointer;
        }
    }

    .input-row {
        display: flex;

        .input-col {
            :first-of-type {
                margin-right: 20px;
            }
        }
    }

    label {
         display: block;
         font-size: 13px;
         font-weight: 400;
         color: #0A033C;
         margin-bottom: 4px;
     }
     .input-col {
         display: flex;
         flex-direction: column;
         justify-content: flex-start;
         align-items: flex-start;
         margin-bottom: 15px;
         width: 100%;
         font-size: 18px;
         color: #5D5A6F;

        input {
            flex: 1;
            border: none;
            height: 40px;
            background-color: transparent;
            font-size: 13px ;
            width: 100%;
            color: #5D5A6F;
            border: 0.8px solid ${props => props.theme.primaryColor};
            padding: 10px 20px;
            border-radius: 20px;

            ::placeholder {
                color: #5D5A6F;
            }
        }
     }

     .save-action {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px auto;
        width: 150px;
        height: 38px;
        border-radius: 19px;
        background-color: ${props => props.theme.primaryColor};
        color: #fff;
        font-size: 13px;
        font-weight: 400;
        border: none;
        cursor: pointer;
     }
`;
