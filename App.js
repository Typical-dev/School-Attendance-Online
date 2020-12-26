import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import db from './database';
import AppHeader from './components/AppHeader';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      "lexicalCategory": '',
      "definition": ''
    }
  }
  render() {
    return(
      <View style={{flex: 1}}>
        <AppHeader/>
        <TextInput
          style={styles.inputBox}
          onChangeText={text=>{
            this.setState({text: text})
          }}
          value={this.state.text}/>
        <TouchableOpacity style={styles.goButton}
          onPress={()=>{
            var word = this.state.text.toLowerCase().trim();
            db [word] ? (
              this.setState({text: word, lexicalCategory: db[word]["lexicalCategory"], definition: db[word]["definition"]})
            ):
            alert("This word does not exist in our dictionary")
          }}>
          <Text style={styles.buttonText}>
            Go
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.detailsTitle}>
            word: {this.state.text}
          </Text>
          <Text style={styles.detailsTitle}>
            lexicalCategory: {this.state.lexicalCategory}
          </Text>
          <Text style={styles.detailsTitle}>
            definition: {this.state.definition}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: 'green',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  detailsTitle: {
    color: 'orange',
    fontSize: 20,
    fontWeight: 'bold'
  }
})