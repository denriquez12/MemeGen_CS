import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class GenSave extends Component {
  render() {
    return (
      <View style={styles.genSaveBttnsWrapper}>
        {this.startGener8Bttn()}
        {this.startSaveBttn()}
      </View>
    );
  }

  startGener8Bttn() {
    return (
      <View style={styles.actionBttn}>
        <Text>
          GENER8
        </Text>
      </View>
    );
  }
  startSaveBttn() {
    return (
      <View style={styles.actionBttn}>
        <Text>
          SAVE
        </Text>
      </View>
    );
  }
}

  //Styles
  let styles = StyleSheet.create({
    /////////////////////////
    ///// Section Styles ////
    /////////////////////////
    genSaveBttnsWrapper: {  //Red
      flex: 3,
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    /////////////////////////
    //// Button styles //////
    /////////////////////////
    actionBttn: {
      borderWidth: 2,
      width: 200,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center'
    },
    //////////////////////////
    //// Text Styles /////////
    //////////////////////////
  });
