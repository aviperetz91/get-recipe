import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchCategories } from '../../store/actions/MealsActions';
import CategoryBox from '../../components/CategotyBox';

class Categories extends Component {

    componentDidMount = () => { 
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(response => this.props.getCategories(response.data.categories));
    }

    render() {
        let categories = [];
        for(let i of this.props.categories) {
            if(i.strCategory !== "Pork" && i.strCategory !== "Seafood" && i.strCategory !== "Goat" && i.strCategory !== "Vegan") {
                categories.push(i);
            }
        }
        return (
            <FlatList 
                numColumns={2} 
                data={categories}
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
        getCategories: (categories) => dispatch(fetchCategories(categories))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);