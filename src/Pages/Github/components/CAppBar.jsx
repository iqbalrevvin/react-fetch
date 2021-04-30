import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const CAppBar = () => {
    const classes = useStyles();
    return (
        <AppBar position="relative">
            <Toolbar>
                <GitHubIcon className={classes.icon} />
                <Typography variant="h6" color="inherit" noWrap>
                    Github List
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default CAppBar;

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
}));
