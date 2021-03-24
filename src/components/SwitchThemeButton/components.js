import styled from 'styled-components';

export const Container = styled.div`
    width: 68px;
    height: 34px;

    background-color: ${({ toggle }) => toggle ? '#1A1D24' : '#fff'};
    border-radius: 30px;

    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;

    @media only screen and (max-width: 600px) {
        width: 48px;
        height: 24px;
    }
`

export const ToggleCheckIcon = styled.div`
    color: ${({ theme }) => theme.colors.yellow};
    display: flex;
    align-items: center;

    font-size: 24px;
    visibility: ${({ toggle }) => !toggle && 'hidden'};
    position: absolute;
    left: 12%;

    @media only screen and (max-width: 600px) {
        font-size: 16px;
        /* padding-left: 0;
        padding: 0 0.2em; */
    }
`

export const ToggleUnCheckIcon = styled.div`
    color: ${({ theme }) => theme.colors.yellow};
    display: flex;
    align-items: center;
    
    font-size: 24px;
    visibility: ${({ toggle }) => toggle && 'hidden'};
    /* padding: 0 0.18em;
    padding-right: 0.3em; */
    position: absolute;
    left: 56%;

    @media only screen and (max-width: 600px) {
        font-size: 16px;
        /* padding-right: 0;
        padding: 0 0.2em; */
    }
`

export const ToggleCircle = styled.div`
    width: 18px;
    height: 18px;

    border-radius: 30px;

    background-color: ${({ toggle }) => toggle ? '#FBFBFD' : '#1A1D24'};

    position: absolute;

    -webkit-transform: ${({ toggle }) => toggle ? 'translateX(41px)' : 'translateX(8px)'};
    -ms-transform: ${({ toggle }) => toggle ? 'translateX(41px)' : 'translateX(8px)'};
    transform: ${({ toggle }) => toggle ? 'translateX(41px)' : 'translateX(8px)'};

    -webkit-transition: .4s;
    transition: .4s;
    cursor: pointer;

    @media only screen and (max-width: 600px) {
        width: 14px;
        height: 14px;

        -webkit-transform: ${({ toggle }) => toggle ? 'translateX(28px)' : 'translateX(6px)'};
        -ms-transform: ${({ toggle }) => toggle ? 'translateX(28px)' : 'translateX(6px)'};
        transform: ${({ toggle }) => toggle ? 'translateX(28px)' : 'translateX(6px)'};
    }
`