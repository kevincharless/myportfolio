import styled from 'styled-components';
import { Container, Grid } from '@material-ui/core';

export const SectionContainer = styled(Container)`    
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 960px) {
        padding: 4em 0;
    }
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
    width: 450px;
`

export const Title = styled.h1`
    font-size: 32px;
    font-weight: 600; 
    margin: 0;

    @media only screen and (max-width: 960px) {
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
        font-size: 14px;
    }
`

export const AboutImageContainer = styled.div`
    width: 251px;
    height: 251px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    padding-right: 6em;
`

export const AboutImage = styled.img`
    width: 311px;
    height: 235px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    margin-left: 8em;
`

export const ImageRingAbstract = styled.img`
    position: relative;
    left: -28%;
    z-index: -5;
    margin-bottom: 150px;

    @media only screen and (max-width: 960px) {
        left: -55%;
        margin-bottom: 140px;
    }
`

export const ImageCrossArrowAbstract = styled.img`
    position: absolute;
    top: 146%;
    left: 70%;
    z-index: -5;
    margin-top: 0px;

    @media only screen and (max-width: 960px) {
        top: 174%;
        left: 50%;
    }
`

export const DotAbstractYellow = styled.img`
    position: absolute;
    top: 188%;
    left: 10%;

    z-index: -5;
`

export const XAbstractRed = styled.img`
    position: absolute;
    top: 110%;
    left: 29%;
    
    z-index: -5;
`

export const XAbstractYellow = styled.img`
    position: absolute;
    top: 193%;
    left: 84%;
    
    z-index: -5;
`

export const TriangleShadowAbstractBlue = styled.img`
    position: absolute;
    top: 120%;
    left: 56%;
    
    z-index: -5;
`

export const CircleAbstractRed = styled.img`
    position: absolute;
    top: 126%;
    left: 91%;
    
    z-index: -5;
`

export const CircleAbstractBlue = styled.img`
    position: absolute;
    top: 187%;
    left: 34%;
    
    z-index: -5;
`

export const BoxAbstractRed = styled.img`
    width: 38px;
    height: 38px;
    position: absolute;
    top: 175%;
    left: 57%;
    
    z-index: -5;
`