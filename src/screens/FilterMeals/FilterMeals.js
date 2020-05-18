import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Switch } from 'react-native';
import { Radio } from 'native-base';
import { Icon } from 'react-native-elements';
import axios from 'axios';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import styles from './style';
import HeaderButton from '../../components/HeaderButton';

class FilterMeals extends Component {

    // static navigationOptions = ({navigation}) => {
    //     return {
    //         headerTitle: "Filter Meals",
    //         headerLeft: 
    //             <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //                 <Item 
    //                     title="Menu"
    //                     iconName="ios-menu"   
    //                     onPress={() => {
    //                         navigation.toggleDrawer();
    //                     }} 
    //                 />
    //             </HeaderButtons>
    //     }
    // }

    state = {
        areaFilter: false,
        areaList: [],
        selectedArea: ''
    }

    componentDidMount = () => {
        axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        .then(response => this.setState({ areaList: response.data.meals }, console.log(this.state.areaList)));            
    }

    render() {
        return (
            <View style={styles.screen}>
                <Text style={styles.title}>Available Filters</Text>
                <View style={styles.accordion}>
                    <View style={styles.accordionHeader}>
                        <Text style={styles.accordionHeaderText}>Select Area</Text>
                        <TouchableOpacity onPress={() => {
                            const toggle = !this.state.areaFilter;
                            this.setState({ areaFilter: toggle });
                        }}>
                            <Icon type={'font-awesome'} name={this.state.areaFilter ? 'chevron-up' : 'chevron-down'} size={16} />
                        </TouchableOpacity>
                    </View>
                    { this.state.areaFilter  && this.state.areaList.length > 0 ?                    
                        <ScrollView style={styles.accordionBody}>
                            { this.state.areaList.map(area => (
                            <View style={styles.filterContainer}>
                                <Text style={styles.filterText}>{area.strArea}</Text>     
                                {/* <Radio onPress selected={} />               */}
                                <Switch                                    
                                    onValueChange={() => this.setState({selectedArea: area.strArea})}
                                    value={this.state.selectedArea == area.strArea}
                                />
                            </View> 
                            ))}
                        </ScrollView>   
                     : null }                      
                </View> 
            </View>
        )
    }
};

export default FilterMeals;



{/* <Switch
    // trackColor={{ false: "#767577", true: "#81b0ff" }}
    // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
    // ios_backgroundColor="#3e3e3e"
    onValueChange={() => {
        const toggle = !this.state.areaFilter;
        this.setState({areaFilter: toggle})
    }}
    value={this.state.areaFilter}
/> */}