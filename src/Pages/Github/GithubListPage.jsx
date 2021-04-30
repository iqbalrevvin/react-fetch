import React, { Component, Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CAppBar from './components/CAppBar'
import CFooter from './components/CFooter';
import CHeroContent from './components/CHeroContent';
import CListContent from './components/CListContent';
import { connect } from 'react-redux';
import { fetchGithubList } from '../../services/redux/actions/GihubAction';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';

class GithubListPage extends Component {
    componentDidMount() {
        this.props.FetchGithub()
    }
    render() {
        const {loadingState:{loadingGithub}, githubState:{data}} = this.props
        return (
            <Fragment>
                <CssBaseline />
                <CAppBar />
                {/* {JSON.stringify(this.props.githubState.data)} */}
                <main>
                    <CHeroContent />
                    {loadingGithub && (
                        <Container maxWidth="lg" style={{marginTop:50}}>
                            <Grid container spacing={4}>
                                {Array(6).fill('').map((_,i) => (
                                    <Grid key={i} item xs={12} sm={6} md={4}>
                                        <Skeleton variant="rect" width={400} height={200} />
                                        <Skeleton width={400} />
                                        <Skeleton width={400} />
                                    </Grid>
                            
                                ))}
                            </Grid>
                        </Container>
                    )}
                    {!loadingGithub && (
                        <CListContent data={this.props.githubState.data} />
                    )}
                    {data.length === 0 && (
                        <Typography variant="h3" gutterBottom>
                            Type in the github username you want to see!
                      </Typography>
                    )}
                </main>
                <CFooter />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    loadingState: state.loading,
    githubState: state.github
})

const mapDispatchToProps = (dispatch) => ({
    FetchGithub: (username) => dispatch(fetchGithubList(username))
})


export default connect(mapStateToProps, mapDispatchToProps)(GithubListPage)