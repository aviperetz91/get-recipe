import React, { Component } from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { connect } from 'react-redux';
import HeaderButton from '../../components/HeaderButton';
import MealList from '../../components/MealList';

class FavoriteMeals extends Component {

    // static navigationOptions = ({navigation}) => {
    //     return {
    //         headerTitle: "Your Favorites",
    //         headerLeft: 
    //             <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //                 <Item 
    //                     title="Menu"
    //                     iconName="ios-menu"   
    //                     onPress={() => {
    //                         navigation.toggleDrawer();
    //                     }} 
    //                 />
    //             </HeaderButtons>
    //     }
    // }

    render() {
        return (
            <MealList
                listData={this.props.favoriteMeals}
                navigation={this.props.navigation}
            />
        )
    }
};

const mapStateToProps = state => {
    return {
        favoriteMeals: state.meals.favoriteMeals
    }
}

export default connect(mapStateToProps, null)(FavoriteMeals);