import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"
import PrimaryButton from '../reuseable/PrimaryButton';
import SecondaryButton from '../reuseable/SecondaryButton';

class Cat extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>

        {/* Header */}
        <View style={{ marginTop: "20%" }}>
          <Text style={{
            color: "#000063",
            fontFamily: "Poppins-Bold",
            fontSize: 20,
            marginTop: 5,
            textAlign: "center"
          }}>
            Welcome to
          </Text>
          <Text style={{
            color: "#000063",
            fontFamily: "Poppins-Bold",
            fontWeight: "bold",
            fontSize: 18,
            marginTop: 5,
            textAlign: "center"
          }}>
            Content Based Image Retrieval
          </Text>
        </View>
        {/* Header */}

        {/* Image Uploader */}
        <View style={{
          height: 150,
          width: "80%",
          marginTop: '20%',
          justifyContent: "center",
          alignSelf: "center",
          borderStyle:"dashed",
          borderRadius: 9,
          borderWidth: 1,
          borderColor: '000063',
        }}>
          <Ionicons name="cloud-upload" color="#000063" size={40}
            style={{
              alignSelf: "center",
              marginTop: 20
            }}
          />
          <SecondaryButton title={"Browse File"}
            bgStyle=
            {{
              width: "70%",
              alignSelf: "center"
            }} />
        </View>
         {/* Image Uploader */}
         <PrimaryButton title={"Upload"} 
         bgStyle={{marginTop:"20%"}}
         onPress={() => this.props.navigation.navigate('ImageView')}
         />
      </View>
    );
  }
}

export default Cat;