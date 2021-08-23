import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import FunDecider from '../Screens/FunActivityDecider';
import LearningDecider from '../Screens/LearningActivityDecider';
import Pick from "../Screens/PickScreen"

export const AppStackNavigator = createStackNavigator(
  {
    LearningDecider: {
      screen: LearningDecider,
      navigationOptions: {
        headerShown: false,
      },
    },
    FunDecider: {
      screen: FunDecider,
      navigationOptions: {
        headerShown: false,
      },
    },
    Pick: {
      screen: Pick,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  { initialRouteName: 'Pick' }
);
