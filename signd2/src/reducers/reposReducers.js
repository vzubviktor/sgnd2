const SET_REPOS = 'SET_REPOS'
const REPOS_FETCHNG = 'REPOS_FETCHNG'


const defaultState  = {
    items: [],
    isFetching: false, 
    
}

export default function reposReducer(state = defaultState, action) {
    switch (action.type) {  
        case SET_REPOS:
            return {
                ...state, 
                items: action.payload, 
                isFetching : false 
            }
        
        case REPOS_FETCHNG:
            return{
                ...state,
                isFetching: action.payload
            }


        default:
             return state
    }

}

export const setRepos = (repos) => ({ type: SET_REPOS, payload: repos})
export const setReposFetching = (bool) => ({ type: REPOS_FETCHNG, payload: bool})


