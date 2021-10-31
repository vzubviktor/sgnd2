const SET_USER = 'SET_USER'


const defaultState  = {
    username: '',
    exist: false,
    isFetching: true,
    repoNum: 0,
    
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {  
        case SET_USER:
            return {
                ...state, 
                username: action.payload.username 
            }


        default:
             return state
    }

}

export const setUser = (username) => ({ type: SET_USER, payload: username})
