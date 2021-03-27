import styled from 'styled-components';
import { Container, Grid } from '@material-ui/core';

export const SectionContainer = styled(Container)`    
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    height: 100vh;
`

export const Row = styled(Grid)`
    height: 70%;

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

export const HeroAbstract = styled.img`
    position: absolute;
    top: 1%;
    left: -10.2%;

    @media only screen and (max-width: 1600px) {
        top: 1%;
        left: -2.6%;
    }

    @media only screen and (max-width: 900px) {
        left: -1.2%;
    }

    @media only screen and (max-width: 600px) {
        top: 1%;
        left: 16%;
    }
`

export const HeroAbstract2 = styled.img`
    position: absolute;
    top: 80.7vh;
    left: 98%;

    @media only screen and (max-width: 1600px) {
        top: 76.8vh;
        left: 90%;
    }

    @media only screen and (max-width: 960px) {
        top: 85vh;
        left: 79%;
    }

    @media only screen and (max-width: 600px) {
        top: 80vh;
        left: 57%;
    }
`

export const TitleAbstract = styled.div`
    display: flex;
    align-items: center;
    
    position: absolute;
    top: -45%;
    left: 78%;

    @media only screen and (max-width: 600px) {
        left: 74%;
    }
`

export const TitleAbstract1 = styled.img`
    padding: 0.5em;
`

export const TitleAbstract2 = styled.img`
    
`

export const TitleAbstract3 = styled.img`
    
`

export const DescriptionAbstract = styled.img`
    position: absolute;
    left: 90%;

    animation-name: arrow;
    animation-delay: 500ms;
    animation-duration: 3s;
    animation-play-state: running;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    

    @keyframes arrow {
        0% {
            transform: scale(1, 1) translate(0, 0);
        }

        30% {
            transform: scale(1.2, 0.8) translate(0.6em, 0);
        }
        50% {
            transform: scale(1, 1);
        }
        90% {
            transform: scale(1, 1) translate(0, 0);
        }
    }

    @media only screen and (max-width: 600px) {
        left: 89%;
    }
`

export const Title = styled.h1`
    font-size: 32px;
    font-weight: 600;

    margin: 0;
    margin-bottom: -12px;

    @media only screen and (max-width: 600px) {
        font-size: 24px;
    }
`

export const Description = styled.p`
    font-size: 18px;

    margin: -12px 0;

    @media only screen and (max-width: 600px) {
        font-size: 16px;
    }
`

export const ImageContainer = styled.div`
    width: 251px;
    height: 251px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImageAbstractBackground = styled.img`
    width: 210px;
    height: 210px;
    
    position: absolute;
    top: 42%;
    left: 69%;

    z-index: -2;

    @media only screen and (max-width: 960px) {
        top: 59%;
        left: 41%;
    }

    @media only screen and (max-width: 600px) {
        top: 56%;
        left: 35%;
    }
`

export const ScrollDownContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;

    top: 85vh;

    @media only screen and (max-width: 600px) {
        top: 90vh;
    }
`

export const ScrollDown = styled.p`
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    font-size: 16px;
    
    width: 93px;
    margin-bottom: 0.6em;

    @media only screen and (max-width: 600px) {
        width: 82px;
        font-size: 14px;/
    }
`

export const ScrollDownAbstract = styled.img`
    width: 43px;

    animation: updown 3s ease infinite;

    @keyframes updown {
        0% {
            transform: translateY(-25%);
        }

        50% {
            transform: translateY(25%);
        }

        100% {
            transform: translateY(-25%);
        }
    }
`