import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { connect } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
 
import { selectMeal, toggleFavorite } from '../../store/actions/MealsActions';

import styles from './style';
import { makeIngredientsArray, makeMeasureArray } from './methods'
import HeaderButton from '../../components/HeaderButton';
import InfoSection from '../../components/InfoSection';

class MealDetails extends Component {

    static navigationOptions  = ({navigation}) => {
        return {
            headerTitle: navigation.getParam("mealTitle"),
            headerRight: 
                <HeaderButtons HeaderButtonComponent={HeaderButton} >
                    <Item 
                        title="Favorite"
                        iconName={navigation.getParam("isFav") ? "ios-star" : "ios-star-outline"}   
                        onPress={navigation.getParam("toggleFavorite")} 
                    />
                </HeaderButtons>
        }
    }

    componentDidMount = () => {
        const id = this.props.navigation.getParam("mealId");
        axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
        .then(response => {
            this.props.onSelectMeal(response.data.meals[0]);
        });
        this.props.navigation.setParams({toggleFavorite: this.toggleFavoriteHandler, isFav: this.props.isFavorite})
    }

    componentDidUpdate = (prevProps) => {
        if(this.props.isFavorite !== prevProps.isFavorite){
            this.props.navigation.setParams({isFav: this.props.isFavorite})
        }
    }

    toggleFavoriteHandler = () => {
        this.props.onToggleFavorite(this.props.selectedMeal);
        // this.props.navigation.navigate("FavoriteMeals");
    }

    render() {
        const ingredients = makeIngredientsArray(this.props.selectedMeal);
        const measure = makeMeasureArray(this.props.selectedMeal);

        const ingredientList = ingredients.map((cur,index) => (
            <View style={styles.listItem} key={/*temporary*/Math.random().toString()}>
                <Image 
                    style={styles.ingredientImage}
                    source={{uri:"https://www.themealdb.com/images/ingredients/" + cur + ".png"}}
                />
                <Text style={styles.listItemTitle}>{cur}</Text>
            </View>
        ));

        const measureList = measure.map((cur,index) => (
            <View style={styles.listItem} key={/*temporary*/Math.random().toString()}>
                <Text style={styles.listItemTitle}>{cur}</Text>
            </View>
        ));

        return (
            <ScrollView>
                <Image 
                    style={styles.image}
                    source={{uri: this.props.selectedMeal.strMealThumb}}
                />
                <InfoSection>
                    <Text style={styles.title}>Ingredients</Text>
                    <View style={styles.ingredientsContainer}>
                        <View style={styles.list}>
                            {ingredientList}
                        </View>
                        <View style={styles.list}>
                            {measureList}
                        </View>
                    </View>
                </InfoSection>
                <InfoSection>
                    <View>
                        <Text style={{...styles.title, marginBottom: 10}}>Instructions</Text>
                        <Text style={styles.content}>{this.props.selectedMeal.strInstructions}</Text>
                    </View>
                    <TouchableOpacity 
                        style={styles.iconContainer}
                        activeOpacity={0.6}
                        onPress={() => Linking.openURL(this.props.selectedMeal.strYoutube)} >
                        <Icon 
                            size={40} 
                            name="logo-youtube" 
                            color="#ff0000"  
                        />
                        <Text style={styles.iconTitle}>Recipe Video</Text>
                    </TouchableOpacity>
                </InfoSection>
            </ScrollView>
        )
    }
};

const mapStateToProps = state => {
    return {
        selectedMeal: state.meals.selectedMeal,
        favoriteMeals: state.meals.favoriteMeals,
        isFavorite: state.meals.favoriteMeals.some(meal => meal.idMeal === state.meals.selectedMeal.idMeal)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectMeal: (meal) => dispatch(selectMeal(meal)),
        onToggleFavorite: (favMeal) => dispatch(toggleFavorite(favMeal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealDetails);