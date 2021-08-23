import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import firebase from 'firebase';
import db from '../Config';

import MyHeader from '../components/MyHeader';

import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class FunActivityDecider extends React.Component {
  constructor() {
    super();
    this.state = {
      Activity1: '',
      Activity2: '',
      Activity3: '',
      Activity4: '',
      Activity5: '',
      Activity6: '',
      Activity7: '',
      Activity8: '',
      Activity9: '',
      ActivityToDo: '',
    };
  }

  getActivities = () => {
    db.collection('Learning')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.setState({
            Activity1: doc.data().Activity1,
            Activity2: doc.data().Activity2,
            Activity3: doc.data().Activity3,
            Activity4: doc.data().Activity4,
            Activity5: doc.data().Activity5,
            Activity6: doc.data().Activity6,
            Activity7: doc.data().Activity7,
            Activity8: doc.data().Activity8,
            Activity9: doc.data().Activity9,
          });
        });
      });
  };

  getActivityToDo = () => {
    var rand = Math.round(Math.random(1, 9));

    var Activity1 = this.state.Activity1;
    var Activity2 = this.state.Activity2;
    var Activity3 = this.state.Activity3;
    var Activity4 = this.state.Activity4;
    var Activity5 = this.state.Activity5;
    var Activity6 = this.state.Activity6;
    var Activity7 = this.state.Activity7;
    var Activity8 = this.state.Activity8;
    var Activity9 = this.state.Activity9;

    switch (rand) {
      case 1:
        this.setState({ ActivityToDo: Activity1 });
        break;
      case 2:
        this.setState({ ActivityToDo: Activity2 });
        break;
      case 3:
        this.setState({ ActivityToDo: Activity3 });
        break;
      case 4:
        this.setState({ ActivityToDo: Activity4 });
        break;
      case 5:
        this.setState({ ActivityToDo: Activity5 });
        break;
      case 6:
        this.setState({ ActivityToDo: Activity6 });
        break;
      case 7:
        this.setState({ ActivityToDo: Activity7 });
        break;
      case 8:
        this.setState({ ActivityToDo: Activity8 });
        break;
      case 9:
        this.setState({ ActivityToDo: Activity9 });
        break;
      default:
        break;
    }
  };

  componentDidMount() {
    this.getActivities();
    this.getActivityToDo();
  }

  render() {
    return (
      <SafeAreaProvider>
        <View style={{ flex: 1, backgroundColor: '#A9CD0D' }}>
          <MyHeader
            title="Learning Decider"
            navigation={this.props.navigation}
          />
          <Text style={{ fontSize: 20, color: 'black'}}>
            {this.state.ActivityToDo}
          </Text>
        </View>
      </SafeAreaProvider>
    );
  }
}
