import React from 'react';
import { createStackNavigator, createBottomTabNavigator,  createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Categorties from '../screens/Categories';
import CategoryMeals from '../screens/CategoryMeals';
import MealDetails from '../screens/MealDetails';
import FavoriteMeals from '../screens/FavoriteMeals';

import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: Categorties, 
            navigationOptions: {
                headerTitle: "Categories"
            }
        },
        CategoryMeals: CategoryMeals,
        MealDetails: MealDetails
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primary,
            },
            headerTintColor: "white",
            headerTitleStyle: {
                alignSelf: "center",
                flex: 1,
                textAlign: "center"
            }
        },   
    }
);

const FavoriteMealsNavigator = createBottomTabNavigator(
    {
        // Meals: MealsNavigator,
        Meals: {
            screen: MealsNavigator,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <Icon name="ios-restaurant" size={25} color={tabInfo.tintColor} />
                }
            }
        },
        
        // Favorites: FavoriteMeals
        Favorites: {
            screen: FavoriteMeals, 
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <Icon name="ios-star" size={25} color={tabInfo.tintColor} />
                }
            }
        }
    },
    {
        tabBarOptions: {
            labelStyle:{
                fontSize: 14
            },
            activeBackgroundColor: Colors.primary,
            activeTintColor: "yellow",
            inactiveBackgroundColor: Colors.primary,
            inactiveTintColor: "#ccc"
        }
    }
);

export default createAppContainer(FavoriteMealsNavigator);