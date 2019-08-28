import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import axios from 'axios';

import HeaderButton from '../../components/HeaderButton';
import CategoryBox from '../../components/CategotyBox';


class Categories extends Component {
    
    state = {
        categories: [],
    }

    componentDidMount = () => {
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(response => this.setState({
            categories: response.data.categories
        }));
    }

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

    render() {
        return (
            <FlatList 
                numColumns={2} 
                data={this.state.categories}
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

export default Categories;