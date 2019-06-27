import React from 'react';
import { StyleSheet, Text, View,Button,Alert,TouchableOpacity} from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      RandomColor:null
    };
}
getRandomColor= () =>{
  return(
  "rgb(" +
  Math.floor((Math.random()*256))+
  ","+
  Math.floor((Math.random()*256))+
  ","+
  Math.floor((Math.random()*256))+
  ")"
  )
}
  myButtononPressed= () => {
   this.setState=({randomColor:this.getRandomColor()})
  };
  render() {
    return (
      <View style={[styles.container,{backgroundColor:this.state.getrandomColor()}]}>
      <TouchableOpacity onPress={this.myButtononPressed}>
      <Text style={styles.text}>Dikshitadithya</Text>
      </TouchableOpacity>
       </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:32,
    backgroundColor:"#2d3436",
    borderRadius:5,
    paddingVertical:5,
    paddingHorizontal:40,
    color:"#ff3838",
    borderColor:"rgb(23,34,43)",
    borderWidth:5
  }
});
