import React, { Component } from 'react';
import MainMeme from './src/components/MainMeme';
//import Nav from './src/components/Nav';
import MyMeme from './src/components/MyMeme';
import Home from './src/components/Home';
import ViewMeme from './src/components/ViewMeme';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

export default class MemeGen_CS extends Component {
  constructor(){
    super()
    this.renderScene = this.renderScene.bind(this)
  }

  renderScene(route, navigator){
    if (route.name === 'HomePage'){
      return <Home navigator={navigator} />
    } else if (route.name === 'MyMemePage') {
      return <MyMeme navigator={navigator} />
    }else if (route.name === 'ViewMemePage') {
      return <ViewMeme navigator={navigator} data={route.data}/>
    }

  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'HomePage'}}
        renderScene={this.renderScene}
      />
    );
  }
  //Start of helper functions
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
  //////////////////////////
  //// Text Styles /////////
  //////////////////////////
  title: {
    fontSize: 28,
    justifyContent: 'center'
  }
});

AppRegistry.registerComponent('MemeGen_CS', () => MemeGen_CS);
