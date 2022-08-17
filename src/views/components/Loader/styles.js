import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    ::after {
        content: "";
        top: 2px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 4px solid ${props => props.sideColor ? props.sideColor  : '#0004'};
        border-top-color: ${props => props.topColor ? props.topColor  : '#fff'};
        animation: Loading 0.5s linear infinite;
    }

    @keyframes Loading {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export const LoaderBox = styled.div`
    display: block;
`;