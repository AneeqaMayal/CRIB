import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

function Input({ theme, title, label, onPress }) {
  return (
    <View
      style={{
        backgroundColor: "#F2F2F2",
        marginHorizontal: "5%",
        // padding: 8,
        marginTop: 10,
        borderRadius: 10
      }}>
      <TextInput
        placeholder={title}
        editable={false}
        placeholderTextColor="#000"
        style={{
          marginLeft: 10,
          flex: 1,
          fontSize: 16
        }}
      />
    </View>
  );
}
export default Input;
