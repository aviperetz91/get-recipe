import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import axios from 'axios';

import { fetchMeals } from '../../store/actions/MealsActions';

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

    state = {
        filteredMeals: [],
        searchActive: false
    }

    componentDidMount = () => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + this.props.navigation.getParam("categoryTitle"))
        .then(response => {
            this.setState({ filteredMeals: response.data.meals });
            this.props.getMeals(response.data.meals); 
        })
        this.props.navigation.setParams({toggle: this.toggleSearchBarHandler})
    }

    toggleSearchBarHandler = () => {
        const toggle = !this.state.searchActive;
        this.setState({ searchActive: toggle })
    }

    displaySearchBarHandler = () => {
        if(this.state.searchActive) {
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
        if(userInput === "") {
            this.props.getMeals(this.props.meals);
        }
        const searchResults = this.props.meals.filter(meal => {
            return meal.strMeal.toLowerCase().includes(userInput.toLowerCase())
        })
        this.setState({ filteredMeals: searchResults });
    }

    render() {
        return (
            <ScrollView>
                {this.displaySearchBarHandler()}
                <MealList
                    listData={this.state.filteredMeals}
                    navigation={this.props.navigation}
                />
            </ScrollView>
        ) 
    }
};

const mapStateToProps = state => {
    return {
        meals: state.meals.meals,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getMeals: (meals) => dispatch(fetchMeals(meals)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMeals);