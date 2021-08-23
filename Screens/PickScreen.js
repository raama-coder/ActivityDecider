import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import MyHeader from '../components/MyHeader';

export default class PickType extends Component {
  goToLearningDecider = () => {
    this.props.navigation.navigate('LearningDecider');
  };
  goToFunDecider = () => {
    this.props.navigation.navigate('FunDecider');
  };
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <MyHeader title="Pick Screen" navigation={this.props.navigation} />
          <TouchableOpacity
            onPress={() => {
              this.goToFunDecider;
            }}>
            <Text>Fun Activity Decider</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.goToLearningDecider;
            }}>
            <Text>Learning Activity Decider</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A9CD0D',
    flex: 1,
  },
});
