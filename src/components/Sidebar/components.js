import styled from 'styled-components';

export const Button = styled.li`
    background-color: ${({ theme }) => theme.colors.primary};
    list-style-type: none;

    padding: 21px;
    font-size: 14px;
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