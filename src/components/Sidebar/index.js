import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

import { Button, ButtonList, Container, Logo, SocialMedia, SocialMediaLink } from './components';
import LogoDarkMode from '../../assets/images/logo_darkmode.png';
import LogoLightMode from '../../assets/images/logo_lightmode.png';

const Sidebar = ({theme}) => {

    return (
        <Container theme={theme}>
            {theme.themeName === 'dark' ? (
                <Logo src={LogoDarkMode} />
            ) : (
                <Logo src={LogoLightMode} />
            )}
            <ButtonList>
                <Button>Home</Button>
                <Button>About Me</Button>
                <Button>My Skills</Button>
                <Button>Work</Button>
                <Button>Contact</Button>
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
