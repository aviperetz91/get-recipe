import React from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './style';
import MealItem from '../MealItem'

const MealList = props => {
    return (
        <View style={styles.listContainer}>
            <FlatList
                style={styles.list}
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={meal => (
                    <MealItem 
                        title={meal.item.title}
                        image={meal.item.imageUrl}
                        duration={meal.item.duration}
                        complexity={meal.item.complexity}
                        affordability={meal.item.affordability}
                        onSelectMeal={() => props.navigation.navigate("MealDetails", {
                            mealId: meal.item.id,
                            mealTitle: meal.item.title
                        })}
                    />
                )}/>
        </View>
    )
}

export default MealList;