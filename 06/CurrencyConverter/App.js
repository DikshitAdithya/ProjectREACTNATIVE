import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput}from 'react-native';
const currencyPerRupee = {
  DOLLOR:0.014,
  EURO:0.012,
  POUND:0.011,
  RUBEL:0.93,
  AUSDOLLR:0.20,
  CANDOLLOR:0.019,
  YEN:1.54,
  DINAR:0.0043,
  BITCOIN:0.0000041
}
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      inputValue: "",
      resultValue: "0.0"

    };
  }
  render() {
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenView} >
       <View style={styles.resultView}>
       <Text style={styles.resultValue}>{this.state.resultValue}</Text>
       </View>
      </View>
      <View>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        selectionColor="#34e7e4"
        keyboardType="numeric"
        placeholder="Enter number"
        value={this.state.inputValue}
        onChangeText={inputValue => this.setState({inputValue})}
  
        />
        </View>
        </View>
     </SafeAreaView>
      
  
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#2f3640",
    marginTop:2
  },
  screenView:{
    flex:1
  },
  resultView: {
    height:2, 
    marginTop:25,
    borderColor:"white",
    borderWidth:25,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#2f3640",
    borderRadius:3
  },
  resultValue:{
    fontSize:30,
    color:"#18dcff",
    fontWeight:"bold"
  },
  inputContainer:{
    
  }






});