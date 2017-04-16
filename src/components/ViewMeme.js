import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

class ViewMeme extends Component {
  constructor(props){
    super(props)
    this.state = {imgURL: '',
                  phrase: '',
                  };

  }
  render() {
    return (
      <View style={styles.container}>
      <View style ={styles.title}><Text style = {styles.titleText}>Meme Preview</Text></View>
      {this.startMemeImg()}
      <View style={styles.backWrapper}>
        <TouchableOpacity onPress={() => this.props.navigator.pop()} style={styles.actionBttn}>
          <Text>
            Back
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  ////MAIN IMG
  startMemeImg() {
    return (
       <View style={styles.mainImgWrapper}>
          <Image style={styles.img}
            resizeMode='contain'
            source={{uri: this.props.data.url}} />
              <Text style={styles.phrase}>
                {this.props.data.phrase}
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
      flex: 7,
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    container: {
      flex: 1,
      backgroundColor: '#D7CEC7',
      justifyContent: 'space-around'
    },
    img: {
      height: 340,
      width: 350,
      position: 'absolute',
      borderWidth: 3,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black'
    },
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
    backWrapper: {
      flex: 1,
      alignItems: 'center'
    },
    //////////////////////////
    //// Text Styles /////////
    //////////////////////////
    textStyle: {
      color: 'white'
    },
    phrase: {
      marginTop: 8,
      textDecorationStyle: 'solid',
      textDecorationColor: 'black',
      fontFamily: 'HelveticaNeue-CondensedBold',
      fontSize: 24,
      backgroundColor: 'rgba(0,0,0,.25)',
      textShadowColor: 'black',
      textShadowOffset: {width: 2, height: 2},
      textShadowRadius: 1,
      color: 'white'
    },
    title: {
      flex: 1.5,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20
    },
    titleText: {
      fontSize: 28,
      justifyContent: 'center'
    },
  });
export default ViewMeme
