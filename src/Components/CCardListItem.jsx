import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const CCardListItem = ({name, owner, description, url}) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image="https://vantura.id/images/blog/gWwHFIrBpNv2wYBqsxGctxkICDUU73ft5nbFumjU.png"
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography>
                        <b>Owner:</b> {owner} <br />
                        <b>Description:</b> <br />
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" href={url}>
                    View Detail
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

const useStyles = makeStyles(() => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

export default CCardListItem