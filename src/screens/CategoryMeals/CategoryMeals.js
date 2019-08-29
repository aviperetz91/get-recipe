import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import axios from 'axios';

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
        meals: [],
        category: this.props.navigation.getParam("categoryTitle"),
        filteredMeals: [],
        searchActive: false
    }

    componentDidMount = () => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + this.state.category)
        .then(response => this.setState({
            meals: response.data.meals,
            filteredMeals: response.data.meals
        }))
        this.props.navigation.setParams({toggle: this.toggleSearch})
    }

    toggleSearch = () => {
        const toggle = !this.state.searchActive;
        this.setState({searchActive: toggle});
    }

    displaySearchBar = () => {
        if(this.state.searchActive) {
            return (
                <SearchBar 
                    title="Search"
                    placeHolder="Enter a meal name"
                    onActive={this.searchMeal}
                />
            )
        }
        return;
    }
    
    searchMeal = userInput => {
        if(userInput === "") {
            this.setState({
                filteredMeals: this.state.meals
            })
        }
        const searchResults = this.state.meals.filter(meal => {
            return meal.strMeal.toLowerCase().includes(userInput.toLowerCase())
        })
        this.setState({filteredMeals: searchResults})
    }
    

    render() {
        return (
            <ScrollView>
                {this.displaySearchBar()}
                <MealList
                    listData={this.state.filteredMeals}
                    navigation={this.props.navigation}
                />
            </ScrollView>
        ) 
    }
};

export default CategoryMeals;