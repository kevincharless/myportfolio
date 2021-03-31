import { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

import { SwitchThemeContainer, ModalBackground } from './components';
import { AboutMeSection, ContactSection, Footer, HeroSection, MySkillsSection, Sidebar, SwitchThemeButton, WorkSection } from '../../components';

const drawerWidth = 160;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            backgroundColor: 'transparent',
            boxShadow: 'none',
        },
        backgroundColor: 'transparent',
        boxShadow: 'none',
        position: 'absolute'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            
        },
        position: 'fixed',
        color: '#DA5077'
    },
    // necessary for content to be below app bar
    drawerPaper: {
        width: drawerWidth,
        fontWeight: '400',
        "& .MuiPaper-root": {
            color: "inherit"
        }
    },
    content: {
        flexGrow: 1,
    },
}));

const Home = ({ theme, changeTheme }) => {
    const [open, setOpen] = useState('');
    const [isZoom, setIsZoom] = useState('');
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Sidebar theme={theme} />
    );

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <SwitchThemeContainer>
                        <SwitchThemeButton theme={theme} changeTheme={changeTheme} />
                    </SwitchThemeContainer>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders" style={{ pointerEvents: open &&'none' }}>
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        className={classes.drawerPaper}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        className={classes.drawerPaper}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content} id="containerElement">
                <Element name="HeroSection" className="element">
                    <HeroSection />
                </Element>
                <Element name="AboutSection" className="element">
                    <AboutMeSection name="firstInsideContainer" />
                </Element>
                <Element name="SkillSection" className="element">
                    <MySkillsSection theme={theme} />
                </Element>
                <Element name="WorkSection" className="element">
                    <WorkSection open={open} setOpen={setOpen} isZoom={isZoom} setIsZoom={setIsZoom} />
                </Element>
                <Element name="ContactSection" className="element">
                    <ContactSection theme={theme} />
                </Element>
                <Footer />
            </main>
            <ModalBackground style={{ display: !open && 'none' }} onClick={() => setOpen('')} />
            <ModalBackground style={{ display: !isZoom && 'none', opacity: '50%' }} onClick={() => setIsZoom('')} />
        </div>
    );
    }

export default Home
