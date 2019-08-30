import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import axios from 'axios';

import { GET_CATEGORIES } from '../../store/actions/actionsTypes';

import HeaderButton from '../../components/HeaderButton';
import CategoryBox from '../../components/CategotyBox';

class Categories extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: "Categories",
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

    componentDidMount = () => {
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(response => {
            this.props.getCategories(response.data.categories)
        });
    }

    render() {
        return (
            <FlatList 
                numColumns={2} 
                data={this.props.categories}
                keyExtractor={(item, index) => item.idCategory}
                renderItem={(category) => {
                    return (
                        <CategoryBox 
                            title={category.item.strCategory}
                            backImage={category.item.strCategoryThumb}
                            onSelect={() => this.props.navigation.navigate("CategoryMeals", {
                                categoryTitle: category.item.strCategory
                            })}
                        />
                    )
                }}
            />
        )
    }
};

const mapStateToProps = state => {
    return {
        categories: state.meals.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCategories: (categories) => dispatch({type: GET_CATEGORIES, categories})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);