import React from 'react';
import { StyleSheet, Text, View,TextInput} from 'react-native';

export default class App extends React.Component {
  constructor(props){
  super(props);
  this.state={
    Text:""
  }
  }
  render() {
    return (
      <View style={styles.container}>
      <TextInput
      placeholder="enter a value..."
      placeholderTextColor="#25CCF7"
      
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
  },

});
