import {
    GET_CATEGORIES,
    GET_MEALS, 
    TOGGLE_SEARCH_BAR, 
    SEARCH_MEAL, 
    SELECT_MAEL,
    TOGGLE_FAVORITE,
} from '../../actions/actionsTypes';

const initialState = {
    categories: [],
    meals: [],
    filteredMeals: [],
    searchActive: false,
    selectedMeal: {},
    favoriteMeals: [],
    isFavorite: false
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }
        case GET_MEALS: {
            return {
                ...state,
                meals: action.meals,
                filteredMeals: action.meals
            }
        }
        case TOGGLE_SEARCH_BAR:
            return {
                ...state,
                searchActive: action.toggle
            }
        case SEARCH_MEAL: 
            return {
                ...state,
                filteredMeals: action.results
            }
        case SELECT_MAEL:
            return {
                ...state,
                selectedMeal: action.meal
            }
        case TOGGLE_FAVORITE:
            const existingMeal = state.favoriteMeals.find(meal => meal.idMeal === action.favMeal.idMeal);
            if (existingMeal) {
                return {
                    ...state,
                    favoriteMeals: state.favoriteMeals.filter(meal => {
                        return meal.idMeal !== action.favMeal.idMeal
                    })
                }
            }
            else {
                return {
                    ...state,
                    favoriteMeals: state.favoriteMeals.concat(action.favMeal)
                }
            }
        default:
            return state;
    }
}

export default mealsReducer;