import React, { Component } from 'react';

import { MEALS } from '../../data/temp-data';
import MealList from '../../components/MealList';

class FavoriteMeals extends Component {
    render() {
        // temp favorites.. for now it just for render somthing to the screen
        const favMeals = MEALS.filter(meal => meal.id === "m1" || meal.id === "m3" || meal.id === "m5");
        return (
            <MealList 
                listData={favMeals}
                navigation={this.props.navigation}
            />
        )
    }
};

export default FavoriteMeals;