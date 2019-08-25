import React, { Component } from 'react';
import { FlatList } from 'react-native';

import styles from './style';
import { CATEGORIES } from '../../data/temp-data';
import CategoryBox from '../../components/CategotyBox';

class Categories extends Component {

    static navigationOptions = {
        headerTitle: "Categories",
    };

    renderGridItem = (itemData) => {
        return (
            <CategoryBox 
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => this.props.navigation.navigate("CategoryMeals", {
                    categoryId: itemData.item.id,
                    categoryTitle: itemData.item.title
                })}
            />
        )
    }

    render() {
        return(
            <FlatList 
                numColumns={2} 
                data={CATEGORIES}
                keyExtractor={(item, index) => item.id}
                renderItem={this.renderGridItem}
            />
        )
    }
};

export default Categories;