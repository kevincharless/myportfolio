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

export const AboutImage = styled.img`
    width: 311px;
    height: 235px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
`

export const ImageRingAbstract = styled.img`
    position: relative;
    left: -28%;
    z-index: -5;
    margin-bottom: 150px;
`

export const ImageCrossArrowAbstract = styled.img`
    position: absolute;
    top: 146%;
    left: 70%;
    z-index: -5;
    margin-top: 0px;
`

export const DotAbstractYellow = styled.img`
    position: absolute;
    top: 188%;
    left: 10%;
`

export const XAbstractRed = styled.img`
    position: absolute;
    top: 110%;
    left: 29%;
`

export const XAbstractYellow = styled.img`
    position: absolute;
    top: 193%;
    left: 84%;
`

export const TriangleShadowAbstractBlue = styled.img`
    position: absolute;
    top: 120%;
    left: 56%;
`

export const CircleAbstractRed = styled.img`
    position: absolute;
    top: 126%;
    left: 91%;
`

export const CircleAbstractBlue = styled.img`
    position: absolute;
    top: 187%;
    left: 34%;
`

export const BoxAbstractRed = styled.img`
    width: 38px;
    height: 38px;
    position: absolute;
    top: 175%;
    left: 57%;
`