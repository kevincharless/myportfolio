import styled from 'styled-components';
import { Button, Container, Grid, TextareaAutosize } from '@material-ui/core';
import { animated } from 'react-spring'

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

export const Title = styled.h1`
    color: ${({theme}) => theme.colors.text};
    font-size: 32px;
    font-weight: 600;

    margin: 0;
    margin-bottom: -12px;

    @media only screen and (max-width: 600px) {
        font-size: 24px;
    }
`

export const Description = styled.p`
    color: ${({theme}) => theme.colors.secondarytext};
    font-size: 18px;

    margin: 18px 0;

    @media only screen and (max-width: 600px) {
        margin: 16px 0;
        font-size: 16px;
    }
`
export const TextArea = styled(TextareaAutosize)`
    width: 100%;
    padding: 0.5em;
    background-color: ${({theme}) => theme.colors.secondary};
    color: ${({theme}) => theme.colors.secondarytext};
    border: none;
    border-radius: 0.3em;
    font-family: 'poppins';
    font-size: 1em;
    resize: none;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: ${({theme}) => theme.colors.secondarytext};
        font-family: 'poppins';
    }
`

export const SubmitButton = styled(Button)`
    border: solid 2px ${({theme}) => theme.colors.red};
    color: ${({theme}) => theme.colors.red};
    padding: 0.5em 2em;
    margin-right: -1em;
    font-family: 'poppins';

    &:hover {
        background-color: ${({theme}) => theme.colors.red};
        color: ${({theme}) => theme.colors.secondary};
    }

    @media only screen and (max-width: 960px) {
        margin-right: 0;
    }
    
`

export const MyContact = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3em 0;
`

export const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.colors.secondarytext};
    font-family: 'poppins';
    font-size: 24px;
    padding: 0.5em 0;

    @media only screen and (max-width: 600px) {
        font-size: 18px;
        padding: 0.2em 0;
    }
`

export const SocialMediaLink = styled.a`
    color: ${({theme}) => theme.colors.secondarytext};
`

export const SocialMediaIcon = styled.div`
    display: flex;
    align-items: center;
    padding-right: 1em;
`

export const SocialMediaId = styled.div`
    font-size: 0.8em; 
`

export const NotifContainer = styled('div')`
    position: fixed;
    z-index: 1000;
    width: 0 auto;
    top: ${props => (props.top ? '30px' : 'unset')};
    bottom: ${props => (props.top ? 'unset' : '30px')};
    margin: 0 auto;
    left: 30px;
    right: 30px;
    display: flex;
    flex-direction: ${props => (props.top ? 'column-reverse' : 'column')};
    pointer-events: none;
    align-items: ${props => (props.position === 'center' ? 'center' : `flex-${props.position || 'end'}`)};

    @media (max-width: 680px) {
        align-items: center;
    }
`

export const Message = styled(animated.div)`
    box-sizing: border-box;
    position: relative;
    width: 40ch;

    @media (max-width: 680px) {
        width: 100%;
    }
`

export const NotifContent = styled('div')`
    color: ${({theme}) => theme.colors.secondarytext};
    background: ${({theme}) => theme.colors.secondary};
    opacity: 0.9;
    padding: 12px 22px;
    font-size: 1em;
    display: grid;
    grid-template-columns: ${props => (props.canClose === false ? '1fr' : '1fr auto')};
    grid-gap: 10px;
    height: auto;
    border-radius: 3px;
    margin-top: ${props => (props.top ? '0' : '10px')};
    margin-bottom: ${props => (props.top ? '10px' : '0')};
`

export const NotifCloseButton = styled('button')`
    cursor: pointer;
    pointer-events: all;
    outline: 0;
    border: none;
    background: transparent;
    display: flex;
    align-self: flex-end;
    margin: 0;
    padding: 0;
    padding-bottom: 14px;
    color: ${({theme}) => theme.colors.secondarytext};
    opacity: 0.5;

    :hover {
        color: ${({theme}) => theme.colors.secondarytext};
        opacity: 0.9;
    }
`

export const Life = styled(animated.div)`
    position: absolute;
    bottom: ${props => (props.top ? '10px' : '0')};
    left: 0px;
    width: auto;
    background-image: linear-gradient(130deg, ${({theme}) => theme.colors.text}, ${({theme}) => theme.colors.secondarytext});
    height: 5px;
`

export const ContentText = styled.p`
    color: ${({theme}) => theme.colors.secondarytext};
`

export const BigDiamondAbstractBlue = styled.img`
    position: absolute;
    top: -12%;
    left: 90%;
    z-index: -5;

    @media only screen and (max-width: 1366px) {
        top: -12%;
        left: 86%;
    }

    @media only screen and (max-width: 960px) {
        width: 50%;
        top: -2%;
        left: 78%;
    }
    @media only screen and (max-width: 600px) {
        top: -2%;
        left: 80%;
    }
`

export const BigBoxAbstractRed = styled.img`
    position: absolute;
    top: 90%;
    left: -26%;
    z-index: -5;

    @media only screen and (max-width: 1366px) {
        top: 98%;
        left: -25%;
    }
    @media only screen and (max-width: 960px) {
        top: 92%;
        left: -45%;
    }
    @media only screen and (max-width: 600px) {
        top: 93%;
        left: -80%;
    }
`

export const DNAAbstractBlue = styled.img`
    position: absolute;
    z-index: -5;
    top: 45%;
    left: 0%;
    animation: loop1 4s 0s linear  infinite;

    @keyframes loop1 {
        from {
            transform:  rotate(45deg) rotateY(0);
        }
        to {
            transform: rotate(45deg) rotateY(-360deg);
        }
    }
`

export const DNAAbstractRed = styled.img`
    position: absolute;
    z-index: -5;
    top: 16%;
    left: 60%;
    animation: loop2 2.5s 0s linear  infinite;

    @keyframes loop2 {
        from {
            transform: rotate(45deg) rotateY(0);
        }
        to {
            transform: rotate(45deg) rotateY(360deg);
        }
    }
`

export const DNAAbstractYellow = styled.img`
    position: absolute;
    z-index: -5;
    top: 80%;
    left: 80%;
    animation: loop3 3s 0s linear  infinite;

    @keyframes loop3 {
        from {
            transform: rotate(45deg) rotateY(0);
        }
        to {
            transform: rotate(45deg) rotateY(-360deg);
        }
    }
`