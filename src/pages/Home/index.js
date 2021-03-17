import { Sidebar, SwitchThemeButton } from '../../components';
import { Container } from './components'; 

const Home = ({ theme, changeTheme }) => {
    
    return (
        <Container>
            <Sidebar theme={theme} />
            <SwitchThemeButton theme={theme} changeTheme={changeTheme} />
        </Container>
    )
}

export default Home
