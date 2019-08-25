import { createStackNavigator, createAppContainer } from 'react-navigation';

import Categorties from '../screens/Categories';
import CategoryMeals from '../screens/CategoryMeals';
import MealDetails from '../screens/MealDetails';

import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator(
    {
        Categories: Categorties,
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

export default createAppContainer(MealsNavigator);