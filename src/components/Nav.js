import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class Nav extends Component {
  render() {
    return (
      this.startNav()
    );
  }
  startNav() {
    return(
      <View style={styles.navBttnsWrapper}>
        {this.startHomeBttn()}
        {this.startMyMemeBttn()}
      </View>
    );
  }
  startHomeBttn() {
    return(
      <TouchableOpacity style={styles.homeBttn}>
        <Text style={styles.text}>
          Home
        </Text>
      </TouchableOpacity>
    );
  }
  startMyMemeBttn(){
    return(
      <TouchableOpacity style={styles.myMemeBttn}>
        <Text style={styles.text}>
          MyMeme
        </Text>
      </TouchableOpacity>
    );
  }
}

let styles = StyleSheet.create({
  /////////////////////////
  ///// Section Styles ////
  /////////////////////////
  navBttnsWrapper: {  //Yellow
    flexDirection: 'row',
    flex: 1,
    alignItems: 'stretch',
  },
  /////////////////////////
  //// Button styles //////
  /////////////////////////
  homeBttn: {
    flex: 1,
    borderWidth: 2,
    borderRightWidth: 1,
    backgroundColor: '#C09F80',
    alignItems: 'center',
    justifyContent: 'center'
  },
  myMemeBttn: {
    flex: 1,
    borderWidth: 2,
    borderLeftWidth: 1,
    backgroundColor: '#C09F80',//#565656',//#C09F80',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }

});
