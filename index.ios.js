import React, { Component } from 'react';
import MainMeme from './src/components/MainMeme';
import Nav from './src/components/Nav';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MemeGen_CS extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.displayTitle()}
        <MainMeme />
        <Nav />
      </View>
    );
  }
  //Start of helper functions
  displayTitle() {
    return (
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          MEME GENERATOR
        </Text>
      </View>
    );
  }
} //End of Main class

//Styles
let styles = StyleSheet.create({
  /////////////////////////
  ///// Section Styles ////
  /////////////////////////
  container: {
    flex: 1,
    backgroundColor: '#D7CEC7', //'#007399', //light blue
  },
  titleWrapper: { //Green
    flex: 1,
    marginTop: 25,  //Look back at this since hardset
    alignItems: 'center',
    justifyContent: 'center'
  },
  //////////////////////////
  //// Text Styles /////////
  //////////////////////////
  title: {
    fontSize: 28,
    justifyContent: 'center'
  }
});

AppRegistry.registerComponent('MemeGen_CS', () => MemeGen_CS);
