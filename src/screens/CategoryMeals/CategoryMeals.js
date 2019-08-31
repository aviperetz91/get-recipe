import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import axios from 'axios';

import { GET_MEALS, TOGGLE_SEARCH_BAR, SEARCH_MEAL, RESET_INPUT } from '../../store/actions/actionsTypes';

import MealList from '../../components/MealList';
import HeaderButton from '../../components/HeaderButton';
import SearchBar from '../../components/SearchBar';

class CategoryMeals extends Component {

    static navigationOptions  = ({navigation}) => {
        return {
            headerTitle: navigation.getParam("categoryTitle"),
            headerRight: 
                <HeaderButtons HeaderButtonComponent={HeaderButton} >
                    <Item 
                        title="Search"
                        iconName="ios-search"   
                        onPress={navigation.getParam("toggle")} 
                    />
                </HeaderButtons>
        }
    }

    componentDidMount = () => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + this.props.navigation.getParam("categoryTitle"))
        .then(response => {
            this.props.getMeals(response.data.meals); 
        })
        this.props.navigation.setParams({toggle: this.toggleSearchBarHandler})
    }

    toggleSearchBarHandler = () => {
        const toggle = !this.props.searchActive;
        this.props.onToggleSearchBar(toggle)
    }

    displaySearchBarHandler = () => {
        if(this.props.searchActive) {
            return (
                <SearchBar 
                    title="Search"
                    placeHolder="Enter a meal name"
                    onActiveSearch={this.searchMealHandler}
                />
            )
        }
        return;
    }

    searchMealHandler = userInput => {
        this.props.onResetInput()
        if(userInput === "") {
            this.props.getMeals(this.props.meals);
        }
        const searchResults = this.props.meals.filter(meal => {
            return meal.strMeal.toLowerCase().includes(userInput.toLowerCase())
        })
        this.props.onSearchMeal(searchResults);
    }

    render() {
        return (
            <ScrollView>
                {this.displaySearchBarHandler()}
                <MealList
                    listData={this.props.filteredMeals}
                    navigation={this.props.navigation}
                />
            </ScrollView>
        ) 
    }
};

const mapStateToProps = state => {
    return {
        meals: state.meals.meals,
        filteredMeals: state.meals.filteredMeals,
        searchActive: state.meals.searchActive,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getMeals: (meals) => dispatch({type: GET_MEALS, meals}),
        onToggleSearchBar: (toggle) => dispatch({type: TOGGLE_SEARCH_BAR, toggle}),
        onSearchMeal: (results) => dispatch({type: SEARCH_MEAL, results}),
        onResetInput: () => dispatch({type:RESET_INPUT})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMeals);