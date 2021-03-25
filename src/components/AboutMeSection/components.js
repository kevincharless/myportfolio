import styled from 'styled-components';
import { Container, Grid } from '@material-ui/core';

export const SectionContainer = styled(Container)`    
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
    position: relative;

    @media only screen and (max-width: 960px) {
        padding: 4em 0;
    }
`

export const Row = styled(Grid)`
    height: 80%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Col = styled(Grid)`
    display: flex;
    justify-content: center;
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

    @media only screen and (max-width: 600px) {
        font-size: 24px;
    }
`

export const SubTitle = styled.h3`
    color: ${({ theme }) => theme.colors.secondarytext};

    font-size: 24px;
    font-weight: 400;

    margin: 0;
    margin: 24px 0;

    @media only screen and (max-width: 960px) {
        font-size: 18px;

        margin: 18px 0;
    }
`

export const Description = styled.p`
    color: ${({ theme }) => theme.colors.tertiarytext};

    font-size: 18px;
    margin: 0;

    @media only screen and (max-width: 960px) {
        font-size: 16px;
    }
`

export const AboutImageContainer = styled.div`
    width: 251px;
    height: 251px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    padding-right: 6em;

    position: relative;
`

export const AboutImage = styled.img`
    width: 311px;
    height: 235px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
`

export const ImageRingAbstract = styled.img`
    position: absolute;
    top: -3%;
    left: 42%;
    z-index: -5;
`

export const ImageCrossArrowAbstract = styled.img`
    position: absolute;
    top: 46%;
    left: 26%;
    z-index: -5;
`

export const DotAbstractYellow = styled.img`
    position: absolute;
    z-index: -5;

    top: 88%;
    left: -4%;

    @media only screen and (max-width: 1366px) {
        top: 86.5%;
        left: -1%;
    }

    @media only screen and (max-width: 960px) {
        top: 91.5%;
        left: -1%;
    }

    @media only screen and (max-width: 600px) {
        top: 89.5%;
        left: -2%;
    }
`

export const XAbstractRed = styled.img`
    position: absolute;
    top: 10%;
    left: 25%;
    
    z-index: -5;
`

export const XAbstractYellow = styled.img`
    position: absolute;
    top: 93%;
    left: 84%;
    
    z-index: -5;
`

export const TriangleShadowAbstractBlue = styled.img`
    position: absolute;
    top: 20%;
    left: 56%;
    
    z-index: -5;
`

export const CircleAbstractRed = styled.img`
    position: absolute;
    top: 26%;
    left: 91%;
    
    z-index: -5;
`

export const CircleAbstractBlue = styled.img`
    position: absolute;
    top: 87%;
    left: 20%;
    
    z-index: -5;
`

export const BoxAbstractRed = styled.img`
    width: 38px;
    height: 38px;
    position: absolute;
    top: 75%;
    left: 45%;
    
    z-index: -5;

    @media only screen and (max-width: 960px) {
        top: 50%;
        left: 15%;
    }
`