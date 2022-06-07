import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

function PrimaryButton({ title, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.8}
      style={{
        backgroundColor: "#000063",
        marginHorizontal: "10%",
        padding: 12,
         marginTop:"5%",
          marginBottom: 20,
          flex:1
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
export default PrimaryButton;