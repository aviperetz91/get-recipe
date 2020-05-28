import React, { Component } from 'react';
import { Container, Header, Left, Title, Tab, Tabs, TabHeading, Text, Right } from 'native-base';
import { View, TouchableOpacity } from 'react-native';
import { Icon as I, Tooltip } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import Categories from '../Categories';
import Filters from '../FilterMeals';
import FavoriteMeals from '../FavoriteMeals';
import styles from './style';
import Colors from '../../constants/Colors';

export default class Home extends Component {

    tooltipRef = React.createRef();

    render() {
        return (
            <Container>
                <Header hasTabs style={styles.backgroundColor} androidStatusBarColor={Colors.darkPrimary}>
                    <Right>
                        <Left>
                            <Tooltip
                                ref={this.tooltipRef}
                                backgroundColor={'white'}
                                containerStyle={{ display: 'none', borderRadius: 3 }}
                                height={75}
                                width={150}
                                withOverlay={false}
                                popover={
                                    <View>
                                        <TouchableOpacity
                                            style={{ marginVertical: 5 }}
                                            onPress={() => {this.tooltipRef.current.toggleTooltip();}}
                                        >
                                            <Text style={styles.moreOptionText}>החשבון שלי</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={{ marginVertical: 5 }}
                                            onPress={() => {this.tooltipRef.current.toggleTooltip();}}
                                        >
                                            <Text style={styles.moreOptionText}>הגדרות</Text>
                                        </TouchableOpacity>                                        
                                    </View>
                                }>
                                <View style={{ width: 15, marginRight: 10 }}>
                                    <I type={'ionicon'} name={'md-more'} color={'white'} size={25} />
                                </View>
                            </Tooltip>
                        </Left>
                        <Title style={{ marginRight: 10 }}>
                            Get Recipe
                        </Title>
                    </Right>
                </Header>
                <Tabs>
                    <Tab heading={<TabHeading style={styles.backgroundColor}><Text><Icon name={'th-large'} size={18} />  Categories</Text></TabHeading>}>
                        <Categories navigation={this.props.navigation} />
                    </Tab>
                    <Tab heading={<TabHeading style={styles.backgroundColor}><Text><Icon name={'filter'} size={18} />  Filters</Text></TabHeading>}>
                        <Filters navigation={this.props.navigation} />
                    </Tab>
                    <Tab heading={<TabHeading style={styles.backgroundColor}><Text><Icon name={'star'} size={18} />  Favorites</Text></TabHeading>}>
                        <FavoriteMeals navigation={this.props.navigation} />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}