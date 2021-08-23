import * as React from 'react';

import Welcome from './Screens/WelcomeScreen';
import { DrawerNavigator } from './components/AppDrawerNavigator';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const SwitchNavigator = createSwitchNavigator({
  Welcome: { screen: Welcome },
  DrawerNavigator: { screen: DrawerNavigator },
});

const AppContainer = createAppContainer(SwitchNavigator);
