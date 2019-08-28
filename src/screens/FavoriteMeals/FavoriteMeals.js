import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import styles from './style';

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
        return (
            <View style={styles.screen}>
                <Text>Favorites Screen!</Text>
            </View>
        )
    }
};

export default FavoriteMeals;