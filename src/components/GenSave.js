import React, { Component } from 'react';
import MainMeme from './MainMeme';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

export default class GenSave extends Component {
  constructor(props) {
    super(props)
    this.state = {imgurl: ''};
  }
  render() {
    return (
        <View style={styles.genSaveBttnsWrapper}>
          {this.startGenBttn()}
          {this.startSaveBttn()}
        </View>
    );
  }
  startGenBttn() {
    return (
      <TouchableOpacity onPress={this.generateAction} style={styles.actionBttn}>
        <Text style={styles.textStyle}>
          GENER8
        </Text>
      </TouchableOpacity>
    );
  }
  startSaveBttn() {
    return (
      <TouchableOpacity onPress={() => this.saveAction()} style={styles.actionBttn}>
        <Text style={styles.textStyle}>
          SAVE
        </Text>
      </TouchableOpacity>
    );
  }
  //MORE WORK TO DO HERE
  generateAction = () => {
    let img = 'https://funnyasduck.net/wp-content/uploads/2016/04/funny-batman-pics-comics-animal-pictures.jpg'
    this.setState({ imgurl: img });
    console.log('Generate Was Pressed')
  }
  saveAction() {
    console.log('Save Was Pressed')
  }
  getImgUrl(){
    return (this.state.imgurl);
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
    justifyContent: 'space-around',
  },
  /////////////////////////
  //// Button styles //////
  /////////////////////////
  actionBttn: {
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: '#76323F',
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  //////////////////////////
  //// Text Styles /////////
  //////////////////////////
  textStyle: {
    color: 'white'
  }
});
