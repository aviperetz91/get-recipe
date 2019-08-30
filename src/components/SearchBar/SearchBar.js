import React, {Component} from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { CHANGE_TEXT } from '../../store/actions/actionsTypes';

import Button from '../Button';
import styles from './style';

class SearchBar extends Component{

    render(){
        return(
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.placeInput}
                    value={this.props.userInput}
                    placeholder={this.props.placeholder}
                    onChangeText={(input) => this.props.onChange(input)}
                ></TextInput>
                <Button
                    style={styles.placeButton}
                    onPress={() => this.props.onActiveSearch(this.props.userInput)}
                >{this.props.title}
                </Button>
            </View>
        )
    }
}

mapStateToProps = state => {
    return {
        userInput: state.input.userInput,
    }
}

mapDispatchToProps = dispatch => {
    return {
        onChange: (input) => dispatch({type: CHANGE_TEXT, input}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

