import styled from 'styled-components';
import { Container, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

import { animated } from 'react-spring'


export const SectionContainer = styled(Container)`    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100vh;
    position: relative;

    @media only screen and (max-width: 960px) {
        padding: 4em 0;
        height: auto;
    }
`

export const Row = styled(Grid)`
    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 5;
`

export const Col = styled(Grid)`
    position: ${({isZoom}) => !isZoom && 'relative'}; 
    @media only screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
    }
`

export const ModalCol = styled(Grid)`
    position: ${({iszoom}) => !iszoom && 'relative'}; 
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
    margin-bottom: 4em;

    @media only screen and (max-width: 600px) {
        max-width: 325px;
        height: 305px;
    }
`

export const CardAction = styled(animated.div)`
`

export const CardTitle = styled.h3`
    color: ${({theme}) => theme.colors.text};
    font-family: Poppins;
    font-size: 18px;
    font-weight: 500;
    margin: 0;

    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`

export const CardDescription= styled.h5`
    color: ${({theme}) => theme.colors.secondarytext};
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    margin: 0;

    @media only screen and (max-width: 600px) {
        font-size: 10px;
    }
`

export const CardButton = styled(Button)`
    color: ${({theme}) => theme.colors.text};
    font-family: Poppins;
    font-weight: 500;
    margin-left: auto;
`

export const CardBackground = styled.div`
    width: 345px;
    height: 325px;

    position: absolute;
    left: 5%;
    top: 6%;
    z-index: -5;

    border-radius: 0.3em;
    border: ${({theme}) => `3px solid ${theme.colors.blue}`};

    @media only screen and (max-width: 960px) {
        left: 25%;
    }

    @media only screen and (max-width: 600px) {
        max-width: 325px;
        height: 305px;
        top: 5%;
        left: 11%;
    }
`

export const CardModal = styled.div`
    background-color: ${({theme}) => theme.colors.secondary};
    width: 90%;
    min-height: 70%;
    border-radius: 0.3em;

    position: absolute;
    z-index: 5;
    animation: show 1s normal;

    -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.04);
    -moz-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.04);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.04);

    @keyframes show {
        from {
            opacity: 10;
            transform: scale(0);
        }
        to {
            opacity: 100;
            transform: scale(1);
        }
    }
`

export const CardModalBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    background-color: #1A1D24;
    opacity: 10%;
    z-index: 1;
`

export const ModalCloseButton = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
`

export const CloseButton = styled(CloseIcon)`
    padding-top: 0.5em;
    padding-right: 0.5em;
    font-size: 28px;
    cursor: pointer;
`

export const ModalContent = styled.div`
    padding: 0 3em 3em 3em;

    @media only screen and (max-width: 960px) {
        padding: 0 2em 2em 2em;
    }
    @media only screen and (max-width: 960px) {
        padding: 0 1em 1em 1em;
    }
`

export const ModalTitle = styled.h1`
    color: ${({theme}) => theme.colors.text};
    font-family: Poppins;
    font-size: 28px;
    font-weight: 600;
    margin: 0;
    padding-bottom: 1.2em;

    @media only screen and (max-width: 960px) {
        padding-bottom: 0.6em;
    }

    @media only screen and (max-width: 600px) {
        padding-bottom: 0.3em;
        font-size: 24px;
    }
`

export const ModalSubTitle = styled.h1`
    color: ${({theme}) => theme.colors.text};
    font-family: Poppins;
    font-size: 24px;
    font-weight: 500;
    margin: 0;
    padding-top: 1.6em;

    @media only screen and (max-width: 960px) {
        padding-top: 1em;
    }

    @media only screen and (max-width: 600px) {
        font-size: 18px;
    }
`

export const ModalDescription = styled.h5`
    color: ${({theme}) => theme.colors.secondarytext};
    font-family: Poppins;
    font-size: 18px;
    font-weight: 400;
    margin: 0;

    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`

export const ModalSubDescription = styled.p`
    color: ${({theme}) => theme.colors.secondarytext};
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    opacity: 75%;

    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`

export const GroupLists = styled.ul`
    padding-left: 1.4em;
    margin: 0;
`

export const List = styled.li`

`

export const GaleryImage = styled.img`
    width: 100%;
    height: 100%;
`

export const ImageText = styled.div`
    position: absolute;
    background-color: rgba(33, 38, 48, 25%);
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;

    &:hover {
    opacity: 1;
    }
`

export const ZoomCloseButton = styled.div`
    position: absolute;
    z-index: 5;
    top: -15%;
    left: 105%;

    color: #FBFBFD;

    @media only screen and (max-width: 1366px) {
        top: -9%;
        left: 101.5%;
    }

    @media only screen and (max-width: 900px) {
        top: -5%;
        left: 95%;
    }

`

export const ZoomBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    opacity: 55%;
`

export const BlockAbstractRed1 = styled.img`
    position: absolute;
    top: 74%;
    left: -3%;

    @media only screen and (max-width: 1366px) {
        top: 70%;
        left: 1%
    }

    @media only screen and (max-width: 900px) {
        top: 86.5%;
        left: 2%
    }
`

export const BlockAbstractRed2 = styled.img`
    position: absolute;
    transform: rotate(180deg);
    top: 1%;
    left: 100.5%;
    z-index: -5;

    @media only screen and (max-width: 1366px) {
        top: 1%;
        left: 96.5%;
    }

    @media only screen and (max-width: 900px) {
        top: 1%;
        left: 93%;
    }

    @media only screen and (max-width: 600px) {
        top: -2%;
        left: 88%;
    }
`

export const TriangleAbstractBlue = styled.img`
    position: absolute;
    top: 90%;
    left: 20%;
    z-index: -5;
`

export const BoxAbstractRed = styled.img`
    position: absolute;
    top: 84%;
    left: 80%;
    z-index: -5;
`

export const DiamondBorderAbstractYellow = styled.img`
    position: absolute;
    top: 15%;
    left: 60%;
    z-index: -5;
`

export const DNAAbstractBlue = styled.img`
    position: absolute;
    top: 3%;
    left: 60%;
    z-index: -5;
    animation: loop 4s 0s linear  infinite;

    @keyframes loop {
        from {
            transform: rotate(45deg) rotateY(0);
        }
        to {
            transform: rotate(45deg) rotateY(-360deg);
        }
    }
`

export const DNAAbstractYellow = styled.img`
    position: absolute;
    top: 45%;
    left: 85%;
    z-index: -5;
    animation: loop 4s 0s linear  infinite;
`

export const RingAbstractBlue = styled.img`
    position: absolute;
    top: 45%;
    left: 25%;
    z-index: -5;
    animation: leftToRight 4s 0s linear infinite;
    animation-direction: alternate;

    @keyframes leftToRight {
        from {
            transform: translateX(-20px);
        }
        to {
            transform: translateX(20px);
        }
    }
`

export const BoxAbstractYellow = styled.img`
    position: absolute;
    top: 95%;
    left: 15%;
    z-index: -5;
    animation: rotate 8s 0s linear infinite;

    @keyframes rotate {
        to {
            transform: rotateZ(360deg);
        }
    }
`

export const TriangleAbstractRed = styled.img`
    position: absolute;
    top: 93%;
    left: 85%;
    z-index: -5;
    animation: rotate 8s 0s linear infinite;
`