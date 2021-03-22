import { AboutMeSection, HeroSection, Sidebar, SwitchThemeButton } from '../../components';
import { Container } from './components'; 

const Home = ({ theme, changeTheme }) => {
    
    return (
        <Container>
            <Sidebar theme={theme} />
            <SwitchThemeButton theme={theme} changeTheme={changeTheme} />
            <HeroSection />
            <AboutMeSection />
        </Container>
    )
}

export default Home
