import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
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
      <View style={styles.homeBttn}>
        <Text>
          Home
        </Text>
      </View>
    );
  }
  startMyMemeBttn(){
    return(
      <View style={styles.homeBttn}>
        <Text>
          Home
        </Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  /////////////////////////
  ///// Section Styles ////
  /////////////////////////
  navBttnsWrapper: {  //Yellow
    flexDirection: 'row',
    flex: 1.2,
    alignItems: 'stretch',
  },
  /////////////////////////
  //// Button styles //////
  /////////////////////////
  homeBttn: {
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
  }
  //////////////////////////
  //// Text Styles /////////
  //////////////////////////
});
