import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import SideDrawer from './SideDrawerMenu';

import Pick from "../Screens/PickScreen"
import LearningEditor from '../Screens/LearningActivityEditor';
import FunEditor from '../Screens/FunActivityEditor';

export const DrawerNavigator = createDrawerNavigator(
  {
    LearningEditor: { screen: LearningEditor },
    FunEditor: { screen: FunEditor },
    Pick:{screen: Pick}
  },
  { contentComponent: SideDrawer },
  { initialRouteName: 'Decider' }
);
