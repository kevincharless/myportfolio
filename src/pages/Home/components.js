import styled from 'styled-components';

export const SwitchThemeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 120px;
    position: relative;
    z-index: 10000;
    padding-right: 3em;
    width: 85%;
    left: 15%;

    @media only screen and (max-width: 600px) {
        height: 56px;
        padding-right: 1em;
    }
`

export const ModalBackground = styled.div`
    position: absolute;
    background-color: #1A1D24;
    width: 100%;
    height: 100%;

    opacity: 5%;
`

export const Information = styled.div`
    width: 160px;
    height: auto;
    background-color: ${({theme}) => theme.colors.text};
    color: ${({theme}) => theme.colors.primary};
    padding: 1.2em;
    position: relative;
    margin: 2.5em;
    float: left;
    font-size: 14px;
    border-radius: 0.3em;
    opacity: 0;

    &::after {
        content: " ";
        position: absolute;
        right: -15px;
        top: 15px;
        border-top: 15px solid transparent;
        border-right: none;
        border-left: 15px solid ${({theme}) => theme.colors.text};
        border-bottom: 15px solid transparent;
    }

    @media only screen and (max-width: 600px) {
        width: 140px;
        font-size: 12px;
    }
`