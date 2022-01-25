import { ACTION_TYPES } from "../actions/Profile";

const initialState = {
    list:[]
}

export const Profile = (state = initialState,action) => {
    switch (action.type){
        case ACTION_TYPES.FETCH_ALL:
            return{
                ...state,
                list: [...action.payload]
            }
        default:
            return state;
    }
}