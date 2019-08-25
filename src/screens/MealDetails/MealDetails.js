import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import styles from './style';
import { MEALS } from '../../data/temp-data';

class MealDetails extends Component {
    
    static navigationOptions  = ({navigation}) => {
        return {
            headerTitle: navigation.getParam("mealTitle"),
        }
    }

    render() {
        const mealId = this.props.navigation.getParam("mealId");
        const selectedMeal = MEALS.find(meal => meal.id === mealId);
        return(
            <View style={styles.screen}>
                <Text>{selectedMeal.title}</Text>
                <Button 
                    title="Go To Main Screen"
                    onPress={() => {
                        this.props.navigation.popToTop();
                    }}
                />
            </View>
        )
    }
};

export default MealDetails;