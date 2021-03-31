import styled from 'styled-components';
import { Link} from 'react-scroll';


export const Button = styled.li`
    background-color: ${({ theme }) => theme.colors.secondary};
    list-style-type: none;

    padding: 0;
    font-size: 14px;
`

export const ButtonLink = styled(Link)`
    display: block;
    width: 100%;
    height: 100%;
    padding: 21px 0;
    cursor: pointer;
`

export const ButtonList = styled.ul`
    text-align: center;
    padding: 0;
`

export const Container = styled.div`
    width: 160px;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.secondary};

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    position: fixed;
    z-index: 999;

    @media only screen and (max-width: 600px) {
        width: 100vw;
    }
`

export const Logo = styled.img`
    width: 160px;
    align-self: center;
`

export const SocialMedia = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: space-around;

    font-size: 20px;
    padding: 0.5em;
`

export const SocialMediaLink = styled.a`
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    text-decoration: none;
`