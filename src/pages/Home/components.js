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