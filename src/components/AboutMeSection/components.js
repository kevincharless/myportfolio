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

export const Content = styled.div`
    width: 455px;
`

export const Title = styled.h1`
    font-size: 32px;
    font-weight: 600; 
    margin: 0;
`

export const SubTitle = styled.h3`
    color: ${({ theme }) => theme.colors.secondarytext};

    font-size: 24px;
    font-weight: 400;

    margin: 0;
    margin: 24px 0;
`

export const Description = styled.p`
    color: ${({ theme }) => theme.colors.tertiarytext};

    font-size: 18px;
    margin: 0;
`