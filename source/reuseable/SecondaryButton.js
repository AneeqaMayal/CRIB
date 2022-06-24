import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

function SecondaryButton({ title, onPress,bgStyle }) {
  return (
    <TouchableOpacity activeOpacity={0.8}
      style={{
        backgroundColor: "#000063",
        marginHorizontal: "10%",
        padding: 12,
         marginTop:10,
         marginBottom:25,
         borderRadius:8,
          flex:1,...bgStyle
      }}
      onPress={onPress}>
      <Text
        style={{
          color: "#fff",
          textAlign: 'center',
          fontSize: 18,
          flex: 1,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
export default SecondaryButton;