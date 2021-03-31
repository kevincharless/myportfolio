import styled from 'styled-components';
import { Container, Grid } from '@material-ui/core';

export const SectionContainer = styled(Container)`    
    display: flex;
    align-items: center;
    justify-content: flex-end;

    position: relative;
    padding: 0;
`

export const Row = styled(Grid)`
    color: ${({theme}) => theme.colors.secondarytext};
    padding: 0 1.5em 2em 0;
    font-size: 14px;

    @media only screen and (max-width: 1366px) {
        padding: 0 1.5em 1em 0;
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`