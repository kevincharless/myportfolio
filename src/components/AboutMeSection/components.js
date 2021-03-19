import styled from 'styled-components';
import { Container, Grid } from '@material-ui/core';

export const SectionContainer = styled(Container)`    
    display: flex;
    align-items: center;
    justify-content: center;

`

export const Row = styled(Grid)`
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Col = styled(Grid)`
    display: flex;
    justify-content: center;
`