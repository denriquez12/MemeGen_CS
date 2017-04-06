import React, { Component } from 'react';
import Nav from './src/components/Nav';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MyMeme extends Component {
  render() {
    return (
      <View style={styles.container}>
      
        <Nav />
      </View>
    );
  }

  let styles = StyleSheet.create({
    /////////////////////////
    ///// Section Styles ////
    /////////////////////////


  });
