import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Switch } from 'react-native';
import { Radio, Button } from 'native-base';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import axios from 'axios';
import styles from './style';
import Colors from '../../constants/Colors';
import SearchBar from '../../components/SearchBar';
import MealList from '../../components/MealList';

class FilterMeals extends Component {

    state = {
        areaFilter: false,
        areaList: [],
        selectedArea: '',
        searchResults: [],
    }

    componentDidMount = () => {
        axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
            .then(response => this.setState({ areaList: response.data.meals }, console.log(this.state.areaList)));
    }

    searchHandler = (userInput) => {
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + userInput)
            .then(response => this.setState({ searchResults: response.data.meals }, console.log(this.state.searchResults)));
    }

    render() {
        if (this.state.searchResults.length == 0) {
            return (
                <View style={styles.screen}>
                    <Text style={styles.title}>Search Recipe</Text>
                    <SearchBar
                        placeHolder={'What would you like to eat?'}
                        title={'Search'}
                        onActiveSearch={this.searchHandler}
                    />
                    <Text style={styles.title}>Or</Text>
                    <Text style={styles.title}>Find by Filters</Text>
                    <ScrollView style={styles.accordion}>
                        <View style={styles.accordionHeader}>
                            <Text style={styles.accordionHeaderText}>Select Area</Text>
                            <TouchableOpacity onPress={() => {
                                const toggle = !this.state.areaFilter;
                                this.setState({ areaFilter: toggle });
                            }}>
                                <Icon type={'font-awesome'} name={this.state.areaFilter ? 'chevron-up' : 'chevron-down'} size={16} />
                            </TouchableOpacity>
                        </View>
                        {this.state.areaFilter && this.state.areaList.length > 0 ?
                            <ScrollView style={styles.accordionBody}>
                                {this.state.areaList.map(area => (
                                    <View style={styles.filterContainer}>
                                        <Text style={styles.filterText}>{area.strArea}</Text>
                                        <Radio onPress={() => this.setState({ selectedArea: area.strArea })} selected={this.state.selectedArea == area.strArea} selectedColor={Colors.primary} />
                                    </View>
                                ))}
                            </ScrollView>
                            : null}
                    </ScrollView>
                </View>
            )
        }
        else {
            return (
                <ScrollView>
                    <Button full style={{marginVertical: 5, backgroundColor: Colors.darkPrimary}} onPress={() => this.setState({searchResults: []})}>
                        <Text style={{color: 'white'}}>Back</Text>
                    </Button>
                    <ScrollView>
                        <MealList
                            listData={this.state.searchResults}
                            navigation={this.props.navigation}
                        />
                    </ScrollView>
                </ScrollView>
            )
        }
    }
};


export default FilterMeals;
