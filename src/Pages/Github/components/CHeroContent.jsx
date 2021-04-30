import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {useDispatch} from 'react-redux'
import { fetchGithubList } from '../../../services/redux/actions/GihubAction';

const CHeroContent = () => {
    let timer;
    const classes = useStyles()
    const dispatch = useDispatch()

    const handleGetData = (input) => {
        dispatch({type:'GITHUB-LOADING'})
        dispatch(fetchGithubList(input))
    }

    const handleChangeInput = (input) => {        
        console.log(input)
        // console.log(timer)
        clearTimeout(timer)
        if(input!==''){
            timer = setTimeout(()=> handleGetData(input), 750)
        }else{
            timer = setTimeout(()=>{alert('Enter your github username')}, 750)
        }  
     }

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Github List
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Find the github repository based on the username you want
                </Typography>
                <div className={classes.heroButtons}>
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            labelWidth={60}
                            onChange={(e) => handleChangeInput(e.target.value)}
                            placeholder='Search User Keyword Here'
                        />
                    </FormControl>
                </div>
            </Container>
        </div>
    );
}

export default CHeroContent;

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
}));
