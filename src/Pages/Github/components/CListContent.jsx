import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CCardListItem from '../../../Components/CCardListItem';

const CListContent = ({data}) => {
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="lg">
            {/* {JSON.stringify(data)} */}
            <Grid container spacing={3}>
                {data.map((item,i) => (
                    <CCardListItem key={i} name={item.name} owner={item.owner.login} description={item.description} url={item.html_url} />
                ))}
            </Grid>
        </Container>
    );
}

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },

}));

export default CListContent;

