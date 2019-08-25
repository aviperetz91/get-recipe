import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import styles from './style'
import { MEALS } from '../../data/temp-data';
import MealItem from '../../components/MealItem';

class CategoryMeals extends Component {

    static navigationOptions  = ({navigation}) => {
        return {
            headerTitle: navigation.getParam("categoryTitle"),
        }
    }

    render() {
        const catId = this.props.navigation.getParam("categoryId");
        const filteredMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) !== -1)
        return(
            <View style={styles.screen}>
                <FlatList
                    style={styles.list}
                    data={filteredMeals}
                    keyExtractor={(item, index) => item.id}
                    renderItem={meal => (
                        <MealItem 
                            title={meal.item.title}
                            image={meal.item.imageUrl}
                            duration={meal.item.duration}
                            complexity={meal.item.complexity}
                            affordability={meal.item.affordability}
                            onSelectMeal={() => this.props.navigation.navigate("MealDetails", {
                                mealId: meal.item.id,
                                mealTitle: meal.item.title
                            })}
                        />
                    )}/>
            </View>
        )
    }
};

export default CategoryMeals;