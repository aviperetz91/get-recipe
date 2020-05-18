import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { Card, List, ListItem, Left, Body, Right, Thumbnail, Header, Button, Title, Icon } from 'native-base';
import { connect } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import axios from 'axios';
import { selectMeal, toggleFavorite } from '../../store/actions/MealsActions';
import HeaderButton from '../../components/HeaderButton';
import styles from './style';
import Colors from '../../constants/Colors';

class MealDetails extends Component {

    // static navigationOptions = ({ navigation }) => {
    //     return {
    //         headerTitle: navigation.getParam("mealTitle"),
    //         headerRight:
    //             <HeaderButtons HeaderButtonComponent={HeaderButton} >
    //                 <Item
    //                     title="Favorite"
    //                     iconName={navigation.getParam("isFav") ? "ios-star" : "ios-star-outline"}
    //                     onPress={navigation.getParam("toggleFavorite")}
    //                 />
    //             </HeaderButtons>
    //     }
    // }

    componentDidMount = () => {
        const id = this.props.navigation.getParam("mealId");
        axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
            .then(response => this.props.onSelectMeal(response.data.meals[0]));
        this.props.navigation.setParams({ toggleFavorite: this.toggleFavoriteHandler, isFav: this.props.isFavorite })
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.isFavorite !== prevProps.isFavorite) {
            this.props.navigation.setParams({ isFav: this.props.isFavorite })
        }
    }

    toggleFavoriteHandler = () => {
        this.props.onToggleFavorite(this.props.selectedMeal);
    }

    makeIngredientsArray = (meal) => {
        const ingredientList = [];
        const temp = Object.keys(meal).filter(el => {
            return el.includes("strIngredient")
        });
        temp.forEach(el => {
            if (meal[el]) {
                ingredientList.push(meal[el])
            }
        })
        return ingredientList
    }

    makeMeasureArray = (meal) => {
        const measureList = [];
        const temp = Object.keys(meal).filter(el => {
            return el.includes("strMeasure")
        });
        temp.forEach(el => {
            if (meal[el]) {
                measureList.push(meal[el])
            }
        })
        return measureList;
    }

    extendMealObject = (meal, ingredientList, measureList) => {
        const selectedMeal = { ...meal, ingredientList, measureList }
        return selectedMeal;
    }

    render() {
        const navigation = this.props.navigation;

        if (Object.keys(this.props.selectedMeal).length > 0) {
            const ingredientList = this.makeIngredientsArray(this.props.selectedMeal);
            const measureList = this.makeMeasureArray(this.props.selectedMeal);
            const updatedSelectedMeal = this.extendMealObject(this.props.selectedMeal, ingredientList, measureList);

            const ingredientAndMeasure = updatedSelectedMeal.ingredientList.map((cur, index) => (
                <ListItem thumbnail>
                    <Left>
                        <Thumbnail source={{ uri: "https://www.themealdb.com/images/ingredients/" + cur + ".png" }} />
                    </Left>
                    <Body>
                        <Text style={styles.listItemTitle}>{cur}</Text>
                    </Body>
                    <Right>
                        <Text style={styles.listItemTitle}>{updatedSelectedMeal.measureList[index]}</Text>
                    </Right>
                </ListItem>
            ));

            return (
                <View>
                    <Header style={styles.headerStyle} androidStatusBarColor={Colors.darkPrimary}>
                        <Left>
                            <Button transparent onPress={() => navigation.goBack()}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>{navigation.getParam("mealTitle")}</Title>
                        </Body>
                        <Right>
                            <Button transparent onPress={() => this.props.onToggleFavorite(this.props.selectedMeal)}>
                                <Icon name={navigation.getParam("isFav") ? 'star' : 'star-outline'} />
                            </Button>
                            <Button transparent onPress={() => navigation.navigate("Home")}>
                                <Icon name='home' />
                            </Button>
                        </Right>
                    </Header>
                    <ScrollView>
                        <Image
                            style={styles.image}
                            source={{ uri: this.props.selectedMeal.strMealThumb }}
                        />
                        <View style={{ padding: 7, marginTop: 10 }}>
                            <Text style={styles.title}>Ingredients</Text>
                            <Card>                                
                                <List>{ingredientAndMeasure}</List>
                            </Card>
                            <Text style={{ ...styles.title, marginTop: 15 }}>Instructions</Text>
                            <Card>
                                <View style={{ padding: 7 }}>
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
                            </Card>
                        </View>
                    </ScrollView>
                </View>
            )
        } else {
            return (
                <View>
                    <Text>
                        LOADING.....
                    </Text>
                </View>
            )
        }
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