import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './style';

class FavoriteMeals extends Component {
    render() {
        return(
            <View style={styles.screen}>
                <Text>The Favorites Screen!</Text>
            </View>
        )
    }
};

export default FavoriteMeals;