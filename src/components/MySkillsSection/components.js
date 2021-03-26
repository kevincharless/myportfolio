import styled from 'styled-components';
import { Container, Grid } from '@material-ui/core';
import { animated } from 'react-spring';

export const SectionContainer = styled(Container)`    
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
    position: relative;

    @media only screen and (max-width: 960px) {
        margin: 4em 0;
    }
`

export const Row = styled(Grid)`
    height: 80%;

    display: flex;
    align-items: center;
    justify-content: center;

    @media only scree and (max-width: 600px) {
        height: 100%;
    }
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
    margin-bottom: 24px;

    @media only screen and (max-width: 600px) {
        font-size: 24px;
        margin-bottom: 18px;
    }
`

export const SubTitle = styled.h3`
    color: ${({ theme }) => theme.colors.secondarytext};

    font-size: 24px;
    font-weight: 600;

    margin: 0;
    margin: 18px 0;

    @media only screen and (max-width: 960px) {
        font-size: 18px;

        margin: 16px 0;
    }
`

export const Description = styled.div`
    display: flex;
`

export const DescriptionTitle = styled.p`
    color: ${({ theme }) => theme.colors.secondarytext};

    font-size: 18px;
    font-weight: 600;
    margin: 0;
    width: 100%;
    @media only screen and (max-width: 960px) {
        font-size: 14px;
    }
`

export const Colon = styled.p`
    color: ${({ theme }) => theme.colors.secondarytext};

    font-size: 18px;
    font-weight: 600;
    margin: 0;

    position: relative;
    left: -1%;
`

export const DescriptionContent = styled.p`
    color: ${({ theme }) => theme.colors.tertiarytext};

    font-size: 18px;
    margin: 0;
    width: 100%;
    @media only screen and (max-width: 960px) {
        font-size: 14px;
    }
`

export const  ProgressBarGroup = styled.div`
    
`

export const ProgressBar = styled.div`
    padding: 0.5em 0;

    @media only screen and (max-width: 600px) {
        padding: 0.2em 0;
    }
`

export const ProgressBarTitle = styled.h5`
    color: ${({theme}) => theme.colors.secondarytext};
    font-size: 16px;
    margin: 0;

    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`

export const Bar = styled.div`
    position: relative;
    width: 320px;
    height: 24px;
    background: ${({theme}) => theme.colors.secondary};

    border-radius: 0.3em;
    overflow: hidden;

    @media only screen and (max-width: 600px) {
        height: 18px;
    }
`

export const Fill = styled(animated.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({theme}) => theme.colors.red};

    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme}) => theme.colors.secondary};
    font-size: 14px;
    border-radius: 0.3em;
`

export const FillPercent = styled(animated.div)`
    position: absolute;
    top: 0;
    left: 1em;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme}) => theme.colors.secondary};
    font-size: 14px;
    border-radius: 0.3em;
`

export const ProgrammingLanguages = styled(Grid)`
    background-color: ${({theme}) => theme.colors.secondary};;
    width: 100%;
    height: 5em;

    margin: 5.5em 0;
    border-radius: 0.3em;

    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1366px) {
        margin: 3.2em 0;
    }
    @media only screen and (max-width: 960px) {
        height: 12.5em;
        padding: 1em;
        margin: 2em 5em;
    }
    @media only screen and (max-width: 600px) {
        height: 8em;
        padding: 0.5em;
        margin: 2em 1em;
    }
`

export const ProgrammingLogo = styled.img`
    height: 48px;

    @media only screen and (max-width: 960px) {
        height: 40px;
    }
    @media only screen and (max-width: 600px) {
        height: 32px;
    }

`

export const ProgrammingLogoLG = styled.img`
    height: 36px;

    @media only screen and (max-width: 960px) {
        height: 28px;
    }
`

export const XAbstractYellow= styled.img`
    position: absolute;
    top: 10%;
    left: 33%;
    
    z-index: -5;

    @media only screen and (max-width: 600px) {
        left: 40%;
    }
`

export const DiamondAbstractRed = styled.img`
    position: absolute;
    top: 2%;
    left: 66%;
    
    z-index: -5;
`

export const CircleAbstractBlue1 = styled.img`
    position: absolute;
    top: 15%;
    left: 95%;
    
    z-index: -5;
`

export const PlusAbstractRed = styled.img`
    position: absolute;
    top: 70%;
    left: 15%;
    
    z-index: -5;

    @media only screen and (max-width: 600px) {
        top: 100%;
        left: 30%;
    }
`

export const CircleAbstractBlue2 = styled.img`
    position: absolute;
    top: 55%;
    left: 45%;
    
    z-index: -5;

    @media only screen and (max-width: 600px) {
        top: 60%;
        left: 40%;
    }
`

export const ArrowTopAbstractYellow = styled.img`
    position: absolute;
    top: 58%;
    left: 90%;
    
    z-index: -5;

    @media only screen and (max-width: 600px) {
        top: 69%;
        left: 87%;
    }
`