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

export const HeroAbstract = styled.img`
    position: absolute;
    top: 1%;
    left: 10%;
`
export const HeroAbstract2 = styled.img`
    position: absolute;
    top: 74%;
    left: 90%;
`

export const TitleAbstract = styled.div`

    position: relative;
    left: 65%;

    display: flex;
    align-items: center;
`

export const TitleAbstract1 = styled.img`
    padding: 0.5em;

    animation-name: bounce;
    animation-delay: 500ms;
    animation-duration: 2s;
    animation-play-state: running;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    

    @keyframes bounce {
        0% {
            transform: scale(1, 1);
        }
        10% {
            transform: scale(1.2, 0.8);
        }
        30% {
            transform: scale(0.8, 1.2) translate(0, -24px);
        }
        50% {
            transform: scale(1, 0.9) translate(0, 0);
        }
        60% {
            transform: scale(1, 1);
        }
        70% {
            transform: scale(1.05, .95);
        }
        80% {
            transform: scale(1, 1);
        }
    }
`

export const TitleAbstract2 = styled.img`
    animation-name: bounce;
    animation-delay: 1000ms;
    animation-duration: 2s;
    animation-play-state: running;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    @keyframes bounce {
        0% {
            transform: scale(1, 1);
        }
        10% {
            transform: scale(1.2, 0.8);
        }
        30% {
            transform: scale(0.8, 1.2) translate(0, -24px);
        }
        50% {
            transform: scale(1, 0.9) translate(0, 0);
        }
        60% {
            transform: scale(1, 1);
        }
        70% {
            transform: scale(1.05, .95);
        }
        80% {
            transform: scale(1, 1);
        }
    }
`

export const TitleAbstract3 = styled.img`
    animation-name: bounce;
    animation-duration: 2s;
    animation-play-state: running;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    @keyframes bounce {
        0% {
            transform: scale(1, 1);
        }
        10% {
            transform: scale(1.2, 0.8);
        }
        30% {
            transform: scale(0.8, 1.2) translate(0, -24px);
        }
        50% {
            transform: scale(1, 0.9) translate(0, 0);
        }
        60% {
            transform: scale(1, 1);
        }
        70% {
            transform: scale(1.05, .95);
        }
        80% {
            transform: scale(1, 1);
        }
    }
`

export const DescriptionAbstract = styled.img`
    position: relative;
    left: 78%;

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
            transform: scale(1.2, 0.8) translate(24px, 0);
        }
        50% {
            transform: scale(1, 0.9);
        }
        60% {
            transform: scale(1, 1);
        }
        70% {
            transform: scale(.95, 1.05);
        }
        80% {
            transform: scale(1, 1) translate(0, 0);
        }
    }
`

export const Title = styled.h1`
    font-size: 32px;
    font-weight: 600;

    margin: 0;
    margin-bottom: -12px;
`

export const Description = styled.p`
    font-size: 18px;

    margin: -12px 0;
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
    left: 72%;

    z-index: -2;
`

export const ScrollDown = styled.p`
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    font-size: 18px;
    
    position: absolute;
    top: 85%;
    left: 52%;
`

export const ScrollDownAbstract = styled.img`
    width: 43px;

    position: absolute;
    top: 93%;
    left: 54%;

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