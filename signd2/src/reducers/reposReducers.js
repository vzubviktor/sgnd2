const SET_REPOS = 'SET_REPOS';
const REPOS_FETCHNG = 'REPOS_FETCHNG';
const SET_REPO_NUM = 'SET_REPO_NUM';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USER = 'SET_USER';
const SET_ORGS = 'SET_ORGS';



const defaultState  = {
    items: [],
    orgs: [],
    user: '', 
    isFetching: false,
    repoNum: 0,
    currentPage : 1,
    perPage: 30,
    
}

export default function reposReducer(state = defaultState, action) {
    switch (action.type) { 
        
        case SET_REPO_NUM:
            return {
                ...state,
                repoNum: action.payload
            }
        case SET_ORGS:
            return {
                ...state,
                orgs: action.payload
            }

        case SET_USER:
            return {
                ...state,
                user: action.payload
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

        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.payload
            }


        default:
             return state
    }

}

export const setUser = (user) => ({ type: SET_USER, payload: user})
export const setRepos = (repos) => ({ type: SET_REPOS, payload: repos})
export const setOrgs = (orgs) => ({ type: SET_ORGS, payload: orgs})
export const setReposFetching = (bool) => ({ type: REPOS_FETCHNG, payload: bool})
export const setRepoNum = (num) => ({ type: SET_REPO_NUM, payload: num})
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page})



