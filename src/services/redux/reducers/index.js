import {combineReducers} from 'redux'
import GithubReducer from './GithubReducer'
import LoadingReducer from './LoadingReducer'


const reducer = combineReducers({
    loading: LoadingReducer,
    github: GithubReducer
})

export default reducer