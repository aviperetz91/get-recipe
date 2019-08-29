import React, {Component} from 'react';
import { View, TextInput } from 'react-native';
import Button from '../Button';
import styles from './style';

class SearchBar extends Component{
    state = {
        userInput: "",
    }

    render(){
        return(
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.placeInput}
                    value={this.state.userInput}
                    placeholder={this.props.placeholder}
                    onChangeText={(input) => this.setState({userInput: input})}
                ></TextInput>
                <Button
                    style={styles.placeButton}
                    onPress={() => this.props.onActive(this.state.userInput)}
                >{this.props.title}</Button>
            </View>
        )
    }
}

export default SearchBar;