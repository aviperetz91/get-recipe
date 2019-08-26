import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './style';

class FilterMeals extends Component {
    render() {
        return(
            <View style={styles.screen}>
                <Text>The Filters Screen!</Text>
            </View>
        )
    }
};

export default FilterMeals;