import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MainMeme extends Component {
  render() {
    return (
      this.startMemeImg()
    );
  }
  startMemeImg() {
    return (
       <View style={styles.mainImgWrapper}>
          <Text style={styles.img}>
            MEME IMG
          </Text>
        </View>);
  }
} //end of Meme

  //Styles
  let styles = StyleSheet.create({
    /////////////////////////
    ///// Section Styles ////
    /////////////////////////
    mainImgWrapper: { //Blue
      flex: 8,
      alignItems: 'center',
      justifyContent: 'center'
    },
    /////////////////////////
    ///// Text/IMG Styles ////
    /////////////////////////

  });

  //AppRegistry.registerComponent('MainMeme', () => MainMeme); //Have to double check if this is needed
