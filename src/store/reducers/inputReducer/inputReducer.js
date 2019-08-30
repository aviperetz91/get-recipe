import { CHANGE_TEXT, RESET_INPUT } from '../../actions/actionsTypes';

const initialState = {
    userInput: "",
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TEXT:
            return {
                ...state,
                userInput: action.input
            }
        case RESET_INPUT:
            return {
                ...state,
                userInput: ""
            }
        default:
            return state;
    }
}

export default mealsReducer;