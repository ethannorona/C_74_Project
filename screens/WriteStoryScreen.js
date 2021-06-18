import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Image, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import { Header } from 'react-native-elements'
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import db from '../config'
import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component{
  
  constructor(){
    super();

    this.state = {
      storyTitle: '',
      author: '',
      story: ''
    }
  }

  submitStory = () => {
    db.collection("stories").add({ 
      'title' : this.state.storyTitle, 
      'author' : this.state.author, 
      'story' : this.state.story
    });
    this.setState({
      storyTitle: '',
      author: '',
      story: ''
    })

    ToastAndroid.show("Story Submitted", ToastAndroid.SHORT);
  }
  
  render(){
      return(
        <KeyboardAvoidingView
          behavior = "padding" enabled
        >
          <Header 
            backgroundColor='pink' 
            centerComponent={{
              text: 'Story Hub',
              style: {color: 'black', fontSize: 30, fontWeight: 'light'}
            }}
          />
          <View style = {styles.inputView}>
            <TextInput 
              style={styles.inputBox} 
              placeholder = "Story Title"
              onChangeText={(title) => {
                this.setState({
                    storyTitle: title
                })
              }}
              value = {this.state.storyTitle}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput 
              style={styles.inputBox}
              placeholder = "Author"
              onChangeText={(author) => {
                this.setState({
                    author: author
                })
              }}
              value = {this.state.author}
            />
            </View>
            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputStory}
              placeholder = "Write Your Story"
              multiline = {true}
              onChangeText={(story) => {
                this.setState({
                    story: story
                })
              }}
              value = {this.state.story}
            />
            
          </View>
          <TouchableOpacity
            style = {styles.scanButton}
            onPress = {()=>{this.submitStory()}}>
            <Text style = {styles.buttonText}>
              Submit
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
     );
  }
}

const styles = StyleSheet.create({
  scanButton: {
    backgroundColor: 'pink',
    width: 80,
    height: 40,
    padding: 10,
    justifyContent: 'center',
    margin: 10,
    marginLeft: 120
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 0,
    fontWeight: 'bold'
  },
  inputView:{
    flexDirection: 'row',
    margin: 20,
    marginTop: 10,
    paddingTop: 0
  },
  inputBox: {
    width: 350,
    height: 40,
    borderWidth: 2,
    fontSize: 20
  },
  inputStory: {
    width: 350,
    height: 200,
    borderWidth: 2,
    fontSize: 20,
  }
})