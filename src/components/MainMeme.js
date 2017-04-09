import React, { Component ,Blob} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

export default class MainMeme extends Component {
  constructor(props){
    super(props)
    this.state = {imgURL: 'https://s-media-cache-ak0.pinimg.com/originals/f6/8b/04/f68b0480335f4f7f5ca00d1b9cd0bf56.png',
                  phrase: ''};
  }
  render() {
    return (
      <View style={{flex: 11}}>
        {this.startMemeImg()}
        <View style={styles.genSaveBttnsWrapper}>
          {this.startGenBttn()}
          {this.startSaveBttn()}
          </View>
      </View>
    );
  }
  ////MAIN IMG
  startMemeImg() {
    let img = this.state.imgURL;
    return (
       <View style={styles.mainImgWrapper}>
          <Image style={styles.img}
            resizeMode='contain'
            source={{uri: this.state.imgURL}} />
              <Text style={styles.phrase}>
                {this.state.phrase}
              </Text>
      </View>);
  }
  /////
  //ADDED
  startGenBttn() {
    return (
      <TouchableOpacity onPress={() => this.fetchImg()} style={styles.actionBttn}>
        <Text style={styles.textStyle}>
          GENER8
        </Text>
      </TouchableOpacity>
    );
  }
  startSaveBttn() {
    return (
      <TouchableOpacity onPress={() => this.saveMeme()} style={styles.actionBttn}>
        <Text style={styles.textStyle}>
          SAVE
        </Text>
      </TouchableOpacity>
    );
  }
  fetchImg() {
    return fetch('http://localhost:3000/generate.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ imgURL: responseJson.url, phrase: responseJson.phrase });
      //  return responseJson.url;
      })
      .catch((error) => {
        console.error(error);
        return null;
      });
  }
  saveMeme() {
    return fetch('http://localhost:3000/save_meme.json')
      .then((response) => response.json())
      .then((responseJson) => {
        //Add status check here using responseJson
      })
      .catch((error) => {
        console.error(error);
        return null;
      });
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
  });
