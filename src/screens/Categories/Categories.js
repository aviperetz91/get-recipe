import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../../data/temp-data';
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