import React, { Component } from 'react';
import { Container, Header, Left, Title, Body, Tab, Tabs, TabHeading, Text, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Categories from '../Categories';
import Filters from '../FilterMeals';
import FavoriteMeals from '../FavoriteMeals';
import styles from './style';
import Colors from '../../constants/Colors';

export default class Home extends Component {
    
    render() {
        return (
            <Container>
                <Header hasTabs style={styles.backgroundColor} androidStatusBarColor={Colors.darkPrimary}>
                    <Left>
                        <Title style={{marginLeft: 5}}>
                            Get Recipe
                        </Title>
                    </Left>                      
                    <Right />             
                </Header>
                <Tabs>
                    <Tab heading={<TabHeading style={styles.backgroundColor}><Text><Icon name={'th-large'} size={18}/>  Categories</Text></TabHeading>}>
                        <Categories navigation={this.props.navigation}/>
                    </Tab>
                    <Tab heading={<TabHeading style={styles.backgroundColor}><Text><Icon name={'filter'} size={18}/>  Filters</Text></TabHeading>}>
                        <Filters navigation={this.props.navigation}/>
                    </Tab>
                    <Tab heading={<TabHeading style={styles.backgroundColor}><Text><Icon name={'star'} size={18}/>  Favorites</Text></TabHeading>}>
                        <FavoriteMeals navigation={this.props.navigation}/>
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}