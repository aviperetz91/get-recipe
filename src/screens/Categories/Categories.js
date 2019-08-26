import React, { Component } from 'react';
import { FlatList } from 'react-native';

import styles from './style';
import { CATEGORIES } from '../../data/temp-data';
import CategoryBox from '../../components/CategotyBox';

class Categories extends Component {

    render() {
        return (
            <FlatList 
                numColumns={2} 
                data={CATEGORIES}
                keyExtractor={(item, index) => item.id}
                renderItem={(catrgory) => {
                    return (
                        <CategoryBox 
                            title={catrgory.item.title}
                            color={catrgory.item.color}
                            onSelect={() => this.props.navigation.navigate("CategoryMeals", {
                                categoryId: catrgory.item.id,
                                categoryTitle: catrgory.item.title
                            })}
                        />
                    )
                }}
            />
        )
    }
};

export default Categories;