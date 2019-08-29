import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './style';

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>
                {props.children}
            </Text>
        </TouchableOpacity> 
    )
}

export default Button;