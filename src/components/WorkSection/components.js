import styled from 'styled-components';
import { Container, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const SectionContainer = styled(Container)`    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100vh;
    position: relative;

    @media only screen and (max-width: 960px) {
        padding: 4em 0;
    }
`

export const Row = styled(Grid)`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Col = styled(Grid)`
    @media only screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
    }
`

export const Content = styled.div`
    width: 450px;

    position: relative;

    @media only screen and (max-width: 600px) {
        width: 90vw;
    }
`

export const Title = styled.h1`
    font-size: 32px;
    font-weight: 600;

    margin: 0;
    margin: 28px 0;

    @media only screen and (max-width: 600px) {
        font-size: 24px;
    }
`

export const WorkCard = styled(Card)`
    max-width: 345px;
    height: 325px;

    background-color: ${({theme}) => theme.colors.secondary};
    color: ${({theme}) => theme.colors.secondarytext};

    -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.04);
    -moz-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.04);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.04);

    border-radius: 0.3em;

    margin-bottom: 2em;

`

export const CardTitle = styled(Typography)`
    color: ${({theme}) => theme.colors.text};
`

export const CardDescription= styled(Typography)`
    color: ${({theme}) => theme.colors.secondarytext};
`

export const CardButton = styled(Button)`
    color: ${({theme}) => theme.colors.text};
    font-weight: 500;
    margin-left: auto;
`

export const CardBackground = styled.div`
    width: 290px;
    height: 325px;

    position: absolute;
    left: 15%;
    top: 6%;
    z-index: -5;

    border-radius: 0.3em;
    border: ${({theme}) => `3px solid ${theme.colors.blue}`};

    @media only screen and (max-width: 960px) {
        width: 350px;
    }
`