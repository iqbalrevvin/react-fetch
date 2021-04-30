const initialState = {
    loadingGithub:false,
}

const LoadingReducer = (state=initialState, action) => {
    switch(action.type){
        //Start::Auth Loading
        case 'GITHUB-LOADING':
            return{
                loadingGithub: true
            }
        case 'GITHUB-UNLOADING':
            return{
                loadingGithub: false
            }
        default:
            return state
    }
}

export default LoadingReducer