const initialState = {
    data:[]
}


const GithubReducer = (state=initialState, action) => {
    switch(action.type){
        case 'GITHUB-FETCH-DATA':
            return{
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                full_name: action.payload.full_name,
                owner_name: action.payload.owner_name,
                owner_avatar: action.payload.owner_avatar,
                url: action.payload.url,
                data:action.payload.data
            }
        default:
            return state
    }
}

export default GithubReducer