import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import MealList from '../../components/MealList';

class FavoriteMeals extends Component {

    render() {
        if (this.props.favoriteMeals.length == 0 ) {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>There is no favorite Mmeals yet...</Text>
                </View>
            )
        } else {
            return (
                <MealList
                    listData={this.props.favoriteMeals}
                    navigation={this.props.navigation}
                />
            )
        }
    }
};

const mapStateToProps = state => {
    return {
        favoriteMeals: state.meals.favoriteMeals
    }
}

export default connect(mapStateToProps, null)(FavoriteMeals);