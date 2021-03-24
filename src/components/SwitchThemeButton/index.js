import React, { useState } from 'react';
import { Container, ToggleCheckIcon, ToggleUnCheckIcon, ToggleCircle } from './components';

import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const SwitchThemeButton = ({theme, changeTheme}) => {
    const [toggle, setToggle] = useState(theme.themeName === 'dark' ? true : false);

    const triggerToggle = () => {
        setToggle(!toggle);
        changeTheme();
    }

    return (
        <Container onClick={triggerToggle} theme={theme} toggle={toggle}>
            <ToggleCheckIcon toggle={toggle}>
                <NightsStayIcon style={{ fontSize: '1em' }} />
            </ToggleCheckIcon>
            <ToggleCircle toggle={toggle} />
            <ToggleUnCheckIcon toggle={toggle}>
                <WbSunnyIcon style={{ fontSize: '1em' }} />
            </ToggleUnCheckIcon>
        </Container>
    )
}

export default SwitchThemeButton
