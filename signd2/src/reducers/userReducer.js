const SET_USER = 'SET_USER';
const SET_REPO_NUM = 'SET_REPO_NUM';


const defaultState  = {
    username: '',
    exist: false,
    isFetching: true,
    repoNum: 0,
    
}

export default function usersReducer(state = defaultState, action) {
    switch (action.type) {  
        case SET_USER:
            return {
                ...state, 
                username: action.payload
            }

        case SET_REPO_NUM:
            return {
                ...state,
                repoNum: action.payload
            }


        default:
             return state
    }

}

export const setUser = (username) => ({ type: SET_USER, payload: username})
export const setRepoNum = (num) => ({ type: SET_REPO_NUM, payload: num})

