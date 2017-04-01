import React, { Component } from 'react';
import MainMeme from './src/components/MainMeme';
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
        <View style={[styles.genSaveBttnsWrapper, this.border('red')]}>
          {this.startGener8Bttn()}
          {this.startSaveBttn()}
        </View>
        <View style={[styles.settingBttnsWrapper, this.border('yellow')]}>
          {this.startRandBttn()}
          {this.startMyMemeBttn()}
        </View>
      </View>
    );
  }

  //Start of helper functions
  displayTitle() {
    return (
      <View style={[styles.titleWrapper, this.border('green')]}>
        <Text style={styles.title}>
          MEME GENERATOR
        </Text>
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
  startRandBttn() {
    return (
      <View style={styles.randBttn}>
        <Text>
          Randimizer
        </Text>
      </View>
    );
  }
  startMyMemeBttn() {
    return (
      <View style={styles.myMemeBttn}>
        <Text>
          MyMeme
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

} //End of Main class

//Styles
let styles = StyleSheet.create({
  /////////////////////////
  ///// Section Styles ////
  /////////////////////////
  container: {
    flex: 1,
    backgroundColor: '#5499C7', //light blue
  },
  titleWrapper: { //Green
    flex: 1,
    marginTop: 25,  //Look back at this since hardset
    alignItems: 'center',
    justifyContent: 'center'
  },
  genSaveBttnsWrapper: {  //Red
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  settingBttnsWrapper: {  //Yellow
    flexDirection: 'row',
    flex: 2,
    alignItems: 'stretch',
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
  randBttn: {
    flex: 1,
    borderWidth: 2,
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  myMemeBttn: {
    flex: 1,
    borderWidth: 2,
    borderLeftWidth: 1,
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
