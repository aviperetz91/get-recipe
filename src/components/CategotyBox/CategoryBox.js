import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

import styles from './style';

const CategoryBox = props => {
    return (
        <TouchableOpacity 
            activeOpacity={0.7}
            style={styles.gridItem}
            onPress={props.onSelect}>
            <View style={styles.container}>
                <ImageBackground
                    source={{uri: props.backImage}}
                    style={styles.bgImage}>
                </ImageBackground>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>  
            </View>
        </TouchableOpacity>
    )
}

export default CategoryBox;

