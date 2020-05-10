import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import styles from './style';
import MealItem from '../MealItem'


class MealList extends Component {

    render() {
        return (
            <View style={styles.listContainer}>
                <FlatList
                    style={styles.list}
                    data={this.props.listData}
                    keyExtractor={(item, index) => item.idMeal}
                    renderItem={meal => {
                        const isFavorite = this.props.favoriteMeals.some(cur => cur.idMeal === meal.item.idMeal)
                        return (
                        <MealItem 
                            title={meal.item.strMeal}
                            image={meal.item.strMealThumb}
                            onSelectMeal={() => this.props.navigation.navigate("MealDetails", {
                                mealId: meal.item.idMeal,
                                mealTitle: meal.item.strMeal,
                                isFav: isFavorite
                            })}
                        />
                    )}}/>
            </View>
        )
    }
}

mapStateToProps = state => {
    return {
        favoriteMeals: state.meals.favoriteMeals,
    }
}

export default connect(mapStateToProps, null)(MealList);