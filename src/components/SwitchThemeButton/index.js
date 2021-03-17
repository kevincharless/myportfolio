import React, { useState } from 'react';
import { Container, ToggleCheckIcon, ToggleUnCheckIcon, ToggleCircle } from './components';

import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const SwitchThemeButton = ({theme, changeTheme}) => {
    const [toggle, setToggle] = useState(false);

    const triggerToggle = () => {
        setToggle(!toggle);
        changeTheme();
    }

    return (
        <Container onClick={triggerToggle} theme={theme} toggle={toggle}>
            <ToggleCheckIcon toggle={toggle}>
                <NightsStayIcon />
            </ToggleCheckIcon>
            <ToggleCircle toggle={toggle} />
            <ToggleUnCheckIcon toggle={toggle}>
                <WbSunnyIcon />
            </ToggleUnCheckIcon>
        </Container>
    )
}

export default SwitchThemeButton
