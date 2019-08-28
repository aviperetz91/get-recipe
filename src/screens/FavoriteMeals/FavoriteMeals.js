import React, { Component } from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../../data/temp-data';
import HeaderButton from '../../components/HeaderButton';
import MealList from '../../components/MealList';

class FavoriteMeals extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: "Your Favorites",
            headerLeft: 
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title="Menu"
                        iconName="ios-menu"   
                        onPress={() => {
                            navigation.toggleDrawer();
                        }} 
                    />
                </HeaderButtons>
        }
    }

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