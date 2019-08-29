import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
 
import styles from './style';
import { makeIngredientsArray, makeMeasureArray } from './methods'
import HeaderButton from '../../components/HeaderButton';

class MealDetails extends Component {

    state = {
        selectedMeal: {}
    }

    componentDidMount = () => {
        const id = this.props.navigation.getParam("mealId");
        axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
        .then(response => this.setState({
            selectedMeal: response.data.meals[0]
        }));
    }
    
    static navigationOptions  = ({navigation}) => {
        return {
            headerTitle: navigation.getParam("mealTitle"),
            headerRight: 
                <HeaderButtons HeaderButtonComponent={HeaderButton} >
                    <Item 
                        title="Favorite"
                        iconName="ios-star"   
                        onPress={() => console.log("Mark as favorite!")} 
                    />
                </HeaderButtons>
        }
    }

    render() {
        const ingredients = makeIngredientsArray(this.state.selectedMeal);
        const measure = makeMeasureArray(this.state.selectedMeal);

        const ingredientList = ingredients.map((cur,index) => (
            <View style={styles.listItem}>
                <Image 
                    style={styles.ingredientImage}
                    source={{uri:"https://www.themealdb.com/images/ingredients/" + cur + ".png"}}
                />
                <Text style={styles.listItemTitle} key={index}>{cur}</Text>
            </View>
            
        ));

        const measureList = measure.map((cur,index) => (
            <View style={styles.listItem}>
                <Text style={styles.listItemTitle} key={index}>{cur}</Text>
            </View>
        ));

        return (
            <ScrollView style={styles.container}>
                <Image 
                    style={styles.image}
                    source={{uri: this.state.selectedMeal.strMealThumb}}
                />
                <Text style={styles.title}>Ingredients & Measure</Text>
                <View style={styles.ingredientsContainer}>
                    <View style={styles.list}>
                        {ingredientList}
                    </View>
                    <View style={styles.list}>
                        {measureList}
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>Instructions</Text>
                    <Text style={styles.content}>{this.state.selectedMeal.strInstructions}</Text>
                </View>
                <TouchableOpacity 
                    style={styles.iconContainer}
                    activeOpacity={0.6}
                    onPress={() => Linking.openURL(this.state.selectedMeal.strYoutube)} >
                    <Icon 
                        size={40} 
                        name="logo-youtube" 
                        color="#ff0000"  
                    />
                    <Text style={styles.iconTitle}>Recipe Video</Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }
};

export default MealDetails;