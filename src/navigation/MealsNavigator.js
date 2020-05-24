import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Categorties from '../screens/Categories';
import CategoryMeals from '../screens/CategoryMeals';
import MealDetails from '../screens/MealDetails';
import FavoriteMeals from '../screens/FavoriteMeals';
import FilterMeals from '../screens/FilterMeals';

import Colors from '../constants/Colors';

const navOptions = {
    header: null,
    headerStyle: {
        backgroundColor: Colors.primary,
    },
    headerTintColor: "white",
}

const MealsNavigator = createStackNavigator(
    {
        Home: Home,
        Categories: Categorties,
        CategoryMeals: CategoryMeals,
        MealDetails: MealDetails,
        FavoriteMeals: FavoriteMeals,
        FilterMeals: FilterMeals,
    },
    {
        defaultNavigationOptions: navOptions
    }
);

export default createAppContainer(MealsNavigator);