import React, { Component, Fragment } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Header, Left, Body, Right, Button, Title, Icon } from 'native-base';
import axios from 'axios';
import { fetchMeals } from '../../store/actions/MealsActions';
import MealList from '../../components/MealList';
import SearchBar from '../../components/SearchBar';
import styles from './style';
import Colors from '../../constants/Colors';

class CategoryMeals extends Component {

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
        this.props.navigation.setParams({ toggle: this.toggleSearchBarHandler })
    }

    toggleSearchBarHandler = () => {
        const toggle = !this.state.searchActive;
        this.setState({ searchActive: toggle })
    }

    displaySearchBarHandler = () => {
        if (this.state.searchActive) {
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
        if (userInput === "") {
            this.props.getMeals(this.props.meals);
        }
        const searchResults = this.props.meals.filter(meal => {
            return meal.strMeal.toLowerCase().includes(userInput.toLowerCase())
        })
        this.setState({ filteredMeals: searchResults });
    }

    render() {
        const navigation = this.props.navigation;
        return (
            <Fragment>
                <Header style={styles.headerStyle} androidStatusBarColor={Colors.darkPrimary}>
                    <Left>
                        <Button 
                            transparent
                            onPress={() => navigation.goBack()}    
                        >
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{navigation.getParam("categoryTitle")}</Title>
                    </Body>
                    <Right />
                </Header>
                <ScrollView>
                    {this.displaySearchBarHandler()}
                    <MealList
                        listData={this.state.filteredMeals}
                        navigation={this.props.navigation}
                    />
                </ScrollView>
            </Fragment>
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