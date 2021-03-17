import styled from 'styled-components';

export const Container = styled.div`
    width: 68px;
    height: 32px;

    background-color: #1A1D24;
    border-radius: 30px;

    display: flex;
    align-items: center;

    cursor: pointer;
`

export const ToggleCheckIcon = styled.div`
    color: ${({ theme }) => theme.colors.yellow};
    display: flex;
    align-items: center;

    font-size: 24px;
    visibility: ${({ toggle }) => !toggle && 'hidden'};
    padding: 0 0.2em;
`

export const ToggleUnCheckIcon = styled.div`
    color: ${({ theme }) => theme.colors.yellow};
    display: flex;
    align-items: center;
    
    font-size: 24px;
    visibility: ${({ toggle }) => toggle && 'hidden'};
    padding: 0 0.2em;

`

export const ToggleCircle = styled.div`
    width: 24px;
    height: 24px;

    border-radius: 30px;

    background-color: #fff;

    position: absolute;

    -webkit-transform: ${({ toggle }) => toggle && 'translateX(26px)'};
    -ms-transform: ${({ toggle }) => toggle && 'translateX(26px)'};
    transform: ${({ toggle }) => toggle ? 'translateX(38px)' : 'translateX(6px)'};

    -webkit-transition: .4s;
    transition: .4s;
    cursor: pointer;
`