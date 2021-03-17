import styled from 'styled-components';

export const Container = styled.div`
    width: 72px;
    height: 36px;

    background-color: ${({ toggle }) => toggle ? '#1A1D24' : '#fff'};
    border-radius: 30px;

    display: flex;
    align-items: center;

    cursor: pointer;

    position: absolute;
    top: 8%;
    left: 90%;
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

    background-color: ${({ toggle }) => toggle ? '#FBFBFD' : '#1A1D24'};

    position: absolute;

    -webkit-transform: ${({ toggle }) => toggle ? 'translateX(40px)' : 'translateX(8px)'};
    -ms-transform: ${({ toggle }) => toggle ? 'translateX(40px)' : 'translateX(8px)'};
    transform: ${({ toggle }) => toggle ? 'translateX(40px)' : 'translateX(8px)'};

    -webkit-transition: .4s;
    transition: .4s;
    cursor: pointer;
`