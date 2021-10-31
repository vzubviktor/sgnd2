const SET_REPOS = 'SET_REPOS'
const REPOS_FETCHNG = 'REPOS_FETCHNG'
const SET_REPO_NUM = 'SET_REPO_NUM';



const defaultState  = {
    items: [],
    isFetching: false,
    repoNum: 0 
    
}

export default function reposReducer(state = defaultState, action) {
    switch (action.type) { 
        
        case SET_REPO_NUM:
            return {
                ...state,
                repoNum: action.payload
            }
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
export const setRepoNum = (num) => ({ type: SET_REPO_NUM, payload: num})


