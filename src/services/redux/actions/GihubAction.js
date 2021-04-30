import API from "../../API/ApiContainer"

const fetchGithubList = (username = 'facebook') => async dispatch => {
    try {
        dispatch({type:'GITHUB-LOADING'})
        const response = await API.get(`/users/${username}/repos`)
        if(response.data){
            dispatch({type:'GITHUB-FETCH-DATA', payload:{data: response.data}})
            dispatch({type:'GITHUB-UNLOADING'})
        }else{
            dispatch({type:'GITHUB-FETCH-DATA', payload:{data: []}})
            dispatch({type:'GITHUB-UNLOADING'})
        }
    } catch (error) {
        dispatch({type:'GITHUB-UNLOADING'})
        alert('Data Not Found!')
    }
}

export {fetchGithubList}