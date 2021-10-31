const SET_COUNT = 'SET_COUNT';

const defaultState  = {
    items: [],
    isFetching: true,
    
}

export default function reposReducer(state = defaultState, action) {
    switch (action.type) {  
        case SET_COUNT:
            return {
                ...state, 
                count: action.payload
            }


        default:
             return state
    }

}

