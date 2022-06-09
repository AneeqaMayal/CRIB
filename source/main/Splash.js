import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, StatusBar } from 'react-native';

class Splash extends Component {
  componentDidMount(){
    setTimeout(()=>this.props.navigation.navigate('ImageUploader'),3000)
}
  render() {
    return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#000063" />

      {/* Background Image */}
      <ImageBackground
        source={require("../assets/images/background.png")}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center"
        }}
      >
        <Image
          style={{
            alignItems: "flex-start",
            bottom: "10%"
          }}
          source={require('../assets/images/Circle2.png')}
        />

        {/* Logo */}
        <Image
          style={{
            justifyContent: "center",
            alignSelf: "center",
            top: 70,
            height: 250, width: 250,
          }}
          source={require('../assets/images/logo.png')}
        />
        <Image
          style={{
            alignItems: "flex-end",
            left: "50%",
            top: "20%"
          }}
          source={require('../assets/images/Circle1.png')}
        />
      </ImageBackground>
    </View>
  );
}

}

export default Splash;