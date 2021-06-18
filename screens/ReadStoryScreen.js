import React from 'react';
import { StyleSheet, Text, View ,FlatList, ScrollView} from 'react-native';
import { SearchBar } from 'react-native-elements';
import db from '../config'




export default class ReadStoryScreen extends React.Component {
  constructor(){
    super();
    this.state ={
      allStories:[],
      search: ''
    }
  }
  componentDidMount(){
    this.retrieveStories()
  }

  retrieveStories=()=>{
    try {
      var allStories= []
      var stories = db.collection("stories")
        .get().then((querySnapshot)=> {
          querySnapshot.forEach((doc)=> {
              // doc.data() is never undefined for query doc snapshots
              
              allStories.push(doc.data())
              console.log('this are the stories',allStories)
          })
          this.setState({allStories})
        })
    }
    catch (error) {
      console.log(error);
    }
  };

    render(){
        return(
            <View style = {{marginTop: 50}}>
                <SearchBar
                  placeholder = "Type Here"
                  onChangeText = {(text)=>this.setState({search: text})}
                  value = {this.state.search}
                />
                <FlatList
                  data={this.state.allStories}
                  renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                      <Text>Title: {item.title}</Text>
                  <Text>Author : {item.author}</Text>
                    </View>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },item: {
    backgroundColor: 'pink',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
   itemContainer: {
    height: 80,
    width:'100%',
    borderWidth: 2,
    borderColor: 'pink',
    justifyContent: 'center',
    alignSelf: 'center',
  }
});