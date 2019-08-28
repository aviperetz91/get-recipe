import React, { Component } from 'react';
import axios from 'axios';

import MealList from '../../components/MealList';

class CategoryMeals extends Component {

    state = {
        meals: [],
        category: this.props.navigation.getParam("categoryTitle")
    }

    componentDidMount = () => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + this.state.category)
        .then(response => this.setState({
            meals: response.data.meals
        }))
    }

    static navigationOptions  = ({navigation}) => {
        return {
            headerTitle: navigation.getParam("categoryTitle"),
        }
    }

    render() {
        return (
            <MealList
                listData={this.state.meals}
                navigation={this.props.navigation}
            />
        ) 
    }
};

export default CategoryMeals;