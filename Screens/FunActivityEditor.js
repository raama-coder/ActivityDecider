import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import db from '../Config';
import firebase from 'firebase';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import MyHeader from '../components/MyHeader';

export default class FunActivityEditor extends React.Component {
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
    };
  }

  AddDetails = () => {
    db.collection('Fun').add({
      Activity1: this.state.Activity1,
      Activity2: this.state.Activity2,
      Activity3: this.state.Activity3,
      Activity4: this.state.Activity4,
      Activity5: this.state.Activity5,
      Activity6: this.state.Activity6,
      Activity7: this.state.Activity7,
      Activity8: this.state.Activity8,
      Activity9: this.state.Activity9,
    });
  };

  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <MyHeader title="Fun Editor" navigation={this.props.navigation} />
          <ScrollView style={styles.subContainer}>
            <TextInput
              style={styles.inputBox}
              placeholder={'Enter A Fun Activity'}
              onChangeText={(text) => {
                this.setState({ Activity1: text });
              }}></TextInput>

            <TextInput
              style={styles.inputBox}
              placeholder={'Enter A Fun Activity'}
              onChangeText={(text) => {
                this.setState({ Activity2: text });
              }}></TextInput>

            <TextInput
              style={styles.inputBox}
              placeholder={'Enter A Fun Activity'}
              onChangeText={(text) => {
                this.setState({ Activity3: text });
              }}></TextInput>

            <TextInput
              style={styles.inputBox}
              placeholder={'Enter A Fun Activity'}
              onChangeText={(text) => {
                this.setState({ Activity4: text });
              }}></TextInput>

            <TextInput
              style={styles.inputBox}
              placeholder={'Enter A Fun Activity'}
              onChangeText={(text) => {
                this.setState({ Activity5: text });
              }}></TextInput>

            <TextInput
              style={styles.inputBox}
              placeholder={'Enter A Fun Activity'}
              onChangeText={(text) => {
                this.setState({ Activity6: text });
              }}></TextInput>

            <TextInput
              style={styles.inputBox}
              placeholder={'Enter A Fun Activity'}
              onChangeText={(text) => {
                this.setState({ Activity7: text });
              }}></TextInput>

            <TextInput
              style={styles.inputBox}
              placeholder={'Enter A Fun Activity'}
              onChangeText={(text) => {
                this.setState({ Activity8: text });
              }}></TextInput>

            <TextInput
              style={styles.inputBox}
              placeholder={'Enter A Fun Activity'}
              onChangeText={(text) => {
                this.setState({ Activity9: text });
              }}></TextInput>
              
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                this.AddDetails();
              }}>
              <Text style={styles.btntxt}>Add Activities</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A9CD0D',
  },
  subContainer: {
    justfyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 300,
    height: 50,
    borderWidth: 5,
    paddingLeft: 20,
    fontSize: 20,
    borderColor: 'white',
    marginTop: 3,
  },
  btn: {
    width: 200,
    height: 50,
    justfyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderRadius: 25,
    margin: 5,
    marginLeft:60
  },
  btntxt: {
    fontSize: 20,
    fontWeight: '900',
    paddingTop: 10,
  },
});
