import React, {Component} from 'react';
import { View, TextInput } from 'react-native';

import Button from '../Button';
import styles from './style';

class SearchBar extends Component{

    state = {
        userInput: ""
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput
                    style={styles.placeInput}
                    value={this.state.userInput}
                    placeholder={this.props.placeHolder}
                    onChangeText={(input) => this.setState({userInput: input})}
                ></TextInput>
                <Button
                    style={styles.placeButton}
                    onPress={() => {
                        this.props.onActiveSearch(this.state.userInput);
                        this.setState({ userInput: "" });
                    }}
                >{this.props.title}
                </Button>
            </View>
        )
    }
}

export default SearchBar;

