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
    // headerTitleStyle: {
    //     flex: 1,
    //     textAlign: "center"
    // }
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
        defaultNavigationOptions: navOptions // obj that created on top so that can be reuse   
    }
);

const FavoritesNavigator = createStackNavigator(
    {
        FavoriteMeals: FavoriteMeals,
        MealDetails: MealDetails, 
    },
    {
        defaultNavigationOptions: navOptions
    }
)

const TabsNavigator = createBottomTabNavigator(
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
            screen: FavoritesNavigator, 
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <Icon name="ios-star" size={25} color={tabInfo.tintColor} />
                }
            }
        }
    },
    {
        tabBarOptions: {
            labelStyle: {
                fontSize: 14
            },
            activeBackgroundColor: Colors.primary,
            activeTintColor: Colors.accent,
            inactiveBackgroundColor: Colors.primary,
            inactiveTintColor: "#ccc"
        }
    }
);

// use a stack navigator here so that also have header
const filterNavigator = createStackNavigator(
    {
        FilterMeals: FilterMeals
    },
    {
        defaultNavigationOptions: navOptions
    }
)

const RootNavigator = createDrawerNavigator(
    {
        Meals: TabsNavigator,
        Filters: filterNavigator
    },
    {
        contentOptions: {
            activeTintColor: "orange",
            labelStyle: {
                // fontSize: 16
            }
        }
    }  
)

export default createAppContainer(MealsNavigator);