import React from 'react';
import { View } from 'react-native';
import styles from './style';

const InfoSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}

export default InfoSection;