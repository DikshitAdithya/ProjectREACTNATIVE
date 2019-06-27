import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      uri:require("./src/Image/dice1.png")
    }
  }
getRandomValue= () => {
  return Math.floor(Math.random ()*5)+1;
  
}
playButtonPressed= () => {
var rNumber=this.getRandomValue();
switch (rNumber) {
  case 1:
      this.setState({uri:require("./src/Image/dice1.png")})
    break;
    case 2:
      this.setState({uri:require("./src/Image/dice2.png")})
    break;
    case 3:
      this.setState({ uri:require("./src/Image/dice3.png")})
    break;
    case 4:
      this.setState({ uri:require("./src/Image/dice4.png") })
    break;
    case 5:
      this.setState( {uri:require("./src/Image/dice5.png")})
    break;
    case 6:
      this.setState({uri:require("./src/Image/dice6.png")})
    break;
}
  }
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={this.state.uri}
        />
        <TouchableOpacity
        onPress={this.playButtonPressed}>
        <Text style={styles.gameButton}>Press me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d3436',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameButton:{
    fontSize:25,
    paddingVertical:5,
    backgroundColor:"#f5f6fa",
    borderRadius:5,
    paddingHorizontal:5,
    marginTop:50
    


  }
});
