import React, { Component } from 'react';
import MainMeme from './src/components/MainMeme';
//import GenSave from './src/components/GenSave';
import Nav from './src/components/Nav';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MemeGen_CS extends Component {
  //construct(){
    //this.state = {imgURL: 'https://s-media-cache-ak0.pinimg.com/originals/f6/8b/04/f68b0480335f4f7f5ca00d1b9cd0bf56.png'};
  //}
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
  //  this.state = {imgURL: 'https://s-media-cache-ak0.pinimg.com/originals/f6/8b/04/f68b0480335f4f7f5ca00d1b9cd0bf56.png'};
    //<GenSave ref='img' />
  //  this.setState({ imgURL: () => this.refs.img.getImgUrl()});
    return (
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          MEME GENERATOR
        </Text>
      </View>
    );
  }
} //End of Main class
//<MainMeme />
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
