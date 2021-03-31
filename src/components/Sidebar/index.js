import { useEffect } from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

import { scrollSpy } from 'react-scroll';


import { Button, ButtonLink, ButtonList, Container, Logo, SocialMedia, SocialMediaLink } from './components';
import LogoDarkMode from '../../assets/images/logo_darkmode.png';
import LogoLightMode from '../../assets/images/logo_lightmode.png';

const Sidebar = ({theme}) => {
    useEffect(() => {
        scrollSpy.update();
    }, [])

    const handleSetActive = to => {
        console.log(to);
    }

    return (
        <Container theme={theme}>
            {theme.themeName === 'dark' ? (
                <Logo src={LogoDarkMode} />
            ) : (
                <Logo src={LogoLightMode} />
            )}
            <ButtonList>
                <Button>
                    <ButtonLink activeClass="active" to="HeroSection" spy={true} smooth={true} offset={0} duration={500} onSetActive={handleSetActive}>
                        Home
                    </ButtonLink>
                </Button>
                <Button>
                    <ButtonLink activeClass="active" to="AboutSection" spy={true} smooth={true} offset={0} duration={500} onSetActive={handleSetActive}>
                        About Me
                    </ButtonLink>
                </Button>
                <Button>
                    <ButtonLink activeClass="active" to="SkillSection" spy={true} smooth={true} offset={0} duration={500} onSetActive={handleSetActive}>
                        My Skills
                    </ButtonLink>
                </Button>
                <Button>
                    <ButtonLink activeClass="active" to="WorkSection" spy={true} smooth={true} offset={0} duration={500} onSetActive={handleSetActive}>
                        Work
                    </ButtonLink>
                </Button>
                <Button>
                    <ButtonLink activeClass="active" to="ContactSection" spy={true} smooth={true} offset={0} duration={500} onSetActive={handleSetActive}>
                        Contact
                    </ButtonLink>
                </Button>
            </ButtonList>
            <SocialMedia>
                <SocialMediaLink href="https://www.facebook.com/kevin.charlesii" target="_blank">
                    <FacebookIcon />
                </SocialMediaLink>
                <SocialMediaLink href="https://github.com/kevincharless" target="_blank">
                    <GitHubIcon />
                </SocialMediaLink>
                <SocialMediaLink href="https://www.instagram.com/vinxing_/" target="_blank">
                    <InstagramIcon />
                </SocialMediaLink>
            </SocialMedia>
        </Container>
    )
}

export default Sidebar
