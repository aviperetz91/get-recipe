import React, { Component } from 'react';

import { MEALS } from '../../data/temp-data';
import MealList from '../../components/MealList';

class CategoryMeals extends Component {

    static navigationOptions  = ({navigation}) => {
        return {
            headerTitle: navigation.getParam("categoryTitle"),
        }
    }

    render() {
        const catId = this.props.navigation.getParam("categoryId");
        const filteredMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) !== -1)
        return (
            <MealList
                listData={filteredMeals}
                navigation={this.props.navigation}
            />
        )
    }
};

export default CategoryMeals;