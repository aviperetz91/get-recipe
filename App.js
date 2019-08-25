import React, { Component } from 'react';
// import { useScreens } from 'react-native-screens';

import MealsNavigator from './src/navigation/MealsNavigator';

// useScreens();

class App extends Component {
  render() {
    return(
      <MealsNavigator />
    )
  }
};

export default App;
