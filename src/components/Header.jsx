import React from 'react';
import { useEffect, useState } from 'react';

import '../styles/Header.css';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import gitHubLogo from '../assets/GitHub-Mark-Light-120px-plus.png';

export default function Header(props) {
    const { isDarkMode, setIsDarkMode, headerTheme } = props;
    const [ displayDarkButton, setDisplayDarkButton ] = useState('block');
    const [ displayLightButton, setDisplayLightButton ] = useState('none');

    function setTheme() {
        if (!isDarkMode) {
            setIsDarkMode(true);
            setDisplayLightButton('block');
            setDisplayDarkButton('none');
        } else {
            setIsDarkMode(false);
            setDisplayDarkButton('block');
            setDisplayLightButton('none');
        }
    }

    const headerStyles = makeStyles((theme) => ({
        appBar: {
            backgroundColor: headerTheme,
            minWidth: '100%',
        },
        brightnessIconDark: {
            display: displayDarkButton,
            height: 40,
            marginRight: 10,
            transform: 'scale(1)',
            transition: '250ms',
            width: 40,
            '&:hover': {
                cursor: 'pointer',
                transform: 'scale(1.1)',
                transition: '250ms',
            },
        },
        brightnessIconLight: {
            display: displayLightButton,
            height: 40,
            marginRight: 10,
            transform: 'scale(1)',
            transition: '250ms',
            width: 40,
            '&:hover': {
                cursor: 'pointer',
                transform: 'scale(1.1)',
                transition: '250ms',
            },
        },
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
            fontSize: 20,
        },
    }));

    const classes = headerStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <Typography className={classes.title}> 
                        Historical Events
                    </Typography>
                    <Brightness4Icon className={classes.brightnessIconDark} onClick={() => setTheme()} />
                    <Brightness7Icon className={classes.brightnessIconLight} onClick={() => setTheme()} />
                    <a href="https://github.com/Angoooose/historical-events-app">
                        <img src={gitHubLogo} className="github-img"></img>
                    </a>
                </Toolbar>
            </AppBar>
        </div>
      );
}
