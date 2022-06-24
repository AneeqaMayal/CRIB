import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

function PrimaryButton({ title, onPress,bgStyle }) {
  return (
    <TouchableOpacity activeOpacity={0.8}
      style={{
        backgroundColor: "#000063",
        marginHorizontal: "10%",
        padding: 12,
        borderRadius:8,
          ...bgStyle
      }}
      onPress={onPress}>
      <Text
        style={{
          color: "#fff",
          textAlign: 'center',
          fontSize: 18,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
export default PrimaryButton;