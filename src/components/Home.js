import React, { Component } from 'react';
import MainMeme from './MainMeme';
//import Nav from './Nav';
import MyMeme from './MyMeme';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';

class Home extends Component {
  constructor(props){
    super()
    this.navigate = this.navigate.bind(this)
  }
  navigate(name){
    this.props.navigator.push({
      name
    })
  }
  render() {
    return (
      <View style={styles.container}>
        {this.displayTitle()}
        <MainMeme />
        <View style={styles.navBttnsWrapper}>
          {this.startHomeBttn()}
          {this.startMyMemeBttn()}
        </View>
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
      <TouchableOpacity style={styles.myMemeBttn} onPress={() => this.navigate('MyMemePage')}>
        <Text style={styles.text}>
          MyMeme
        </Text>
      </TouchableOpacity>
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
    backgroundColor: '#D7CEC7' //'#007399', //light blue
  },
  titleWrapper: { //Green
    flex: 1,
    marginTop: 25,  //Look back at this since hardset
    alignItems: 'center',
    justifyContent: 'center'
  },
  navBttnsWrapper: {  //Yellow
    flexDirection: 'row',
    flex: 1,
    alignItems: 'stretch',
  },
  //////////////////////////
  //// Text Styles /////////
  //////////////////////////
  title: {
    fontSize: 28,
    justifyContent: 'center'
  },
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

export default Home
