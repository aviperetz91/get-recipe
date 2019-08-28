import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

import styles from './style';

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal} activeOpacity={0.7}>
                <View>
                    <View>
                        <ImageBackground 
                            source={{uri: props.image}}
                            style={styles.bgImage}>
                            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                        </ImageBackground>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default MealItem;