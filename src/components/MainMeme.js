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
    <View style={[styles.mainImgWrapper, this.border('blue')]}>
      <Text>
        MEME IMG
      </Text>
    </View>
    );
  }
  //Should remove when safe and done
  border(color) {
    return {
      borderColor: color,
      borderWidth: 5
    };
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
      justifyContent: 'flex-start'
    },
  });

  //AppRegistry.registerComponent('MainMeme', () => MainMeme); //Have to double check if this is needed
