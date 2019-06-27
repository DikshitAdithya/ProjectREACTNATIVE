import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ 
        flex:1,
        flexDirection:"column-reverse",
        justifyContent:"space-between",
        alignItems:"center",
        margintop:50}}>
        <View style={{width:100,height:100,backgroundColor:"#25CCF7"}}/>
        <View style={{width:100,height:100, backgroundColor:"#BB2CD9"}}/>
        <View style={{width:100,height:100, backgroundColor:"#2B2B52"}}/>
      </View>
        
      
    );
  }
}const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
  },
});
