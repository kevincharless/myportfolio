import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

import { AboutMeSection, HeroSection, Sidebar, SwitchThemeButton } from '../../components';

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
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            
        },
        color: '#DA5077'
    },
    // necessary for content to be below app bar
    drawerPaper: {
        width: drawerWidth,
        "& .MuiPaper-root": {
            color: "none"
        }
    },
    content: {
        flexGrow: 1,
    },
}));

const Home = ({ theme, changeTheme }) => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Sidebar theme={theme} />
    );

    return (
        <div className={classes.root}>
            <SwitchThemeButton theme={theme} changeTheme={changeTheme} />

            <AppBar position="fixed" className={classes.appBar}>
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
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
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
            <main className={classes.content}>
                <HeroSection />
                <AboutMeSection />
            </main>
        </div>
    );
    }

export default Home
