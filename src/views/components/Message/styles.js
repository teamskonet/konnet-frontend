import styled from 'styled-components'

export const Wrapper = styled.div`
    display: block;
`;

export const Success = styled.div`
    display: block;
    position: fixed;
    top: 20px;
    right: 20px;
    min-width: 150px;
    max-width: 300px;
    min-height: 60px;
    padding: 20px;
    background: #0908;
    border-radius: 2px;
    animation: slideSuccess 0.5s ease-in-out 1;

    @keyframes slideSuccess {
        from {
            right: -220px;
        }
        to {
            right: 20px;
        }
    }
`;

export const Error = styled.div`
    display: block;
    position: fixed;
    top: 20px;
    right: 20px;
    width: 200px;
    min-height: 60px;
    padding: 20px;
    background: #9008;
    border-radius: 2px;
    animation: slideError 0.5s ease-in-out 1;

    @keyframes slideError {
        from {
            right: -220px;
        }
        to {
            right: 20px;
        }
    }
`;

export const Text = styled.span`
    display: block;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
`;