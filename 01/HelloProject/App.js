import React from "react";
import {View, Text,StyleSheet,Image} from "react-native";
import NameText from "./src/components/NameText";
export default class App extends React.Component{
  render(){
    return(
       <View style={Styles.contain}>
         <NameText name="Dikshit Adithya App Developer"/>
         <Image source={require("./src/Image/email.png")}/>
        <Image source={{
          uri:"https://cdn-images-1.medium.com/max/1600/0*zj-tmy3-AFrgk1MC.png"
        }} 
        style={{width:400,height:400}}
        />
       </View>
      
    );
  }
}
const Styles=StyleSheet.create({
  contain: {
    flex:1,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"center", 
  },
 

});
