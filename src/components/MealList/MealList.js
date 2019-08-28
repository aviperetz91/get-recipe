import React from 'react';
import { View, FlatList } from 'react-native';

import styles from './style';
import MealItem from '../MealItem'

const MealList = props => {
    return (
        <View style={styles.listContainer}>
            <FlatList
                style={styles.list}
                data={props.listData}
                keyExtractor={(item, index) => item.idMeal}
                renderItem={meal => (
                    <MealItem 
                        title={meal.item.strMeal}
                        image={meal.item.strMealThumb}
                        onSelectMeal={() => props.navigation.navigate("MealDetails", {
                            mealId: meal.item.idMeal,
                            mealTitle: meal.item.strMeal
                        })}
                    />
                )}/>
        </View>
    )
}

export default MealList;