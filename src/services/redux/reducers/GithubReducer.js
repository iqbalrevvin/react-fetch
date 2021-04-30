const initialState = {
    data:[]
}


const GithubReducer = (state=initialState, action) => {
    switch(action.type){
        case 'GITHUB-FETCH-DATA':
            return{
                ...state,
                data:action.payload.data
            }
        default:
            return state
    }
}

export default GithubReducer