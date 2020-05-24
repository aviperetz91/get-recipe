export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_MEALS = 'GET_MEALS';
export const SELECT_MAEL = 'SELECT_MAEL';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const fetchCategories = categories => {
    return { type: GET_CATEGORIES, categories }
}

export const fetchMeals = meals => {
    return { type: GET_MEALS, meals }
}

export const selectMeal = meal => {
    return { type: SELECT_MAEL, meal }
}

export const toggleFavorite = favMeal => {
    return { type: TOGGLE_FAVORITE, favMeal }
}

