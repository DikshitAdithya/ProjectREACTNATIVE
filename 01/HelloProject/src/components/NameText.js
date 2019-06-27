import React, { Component } from "react";
import { Text,StyleSheet} from "react-native";
export default class NameText extends Component{
  render(){
    return(
       
         
  <Text style={Styles.extra}>{this.props.name} </Text>
       
    );
  }
}
const Styles=StyleSheet.create({
  
  extra: {
    fontSize:30,
    color:"black",
    backgroundColor:"white",
    paddingHorizontal:3,
    paddingVertical:3,
    borderRadius:20

  }

});
