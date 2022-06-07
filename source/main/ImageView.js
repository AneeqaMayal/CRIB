import React, { Component } from 'react';
import { Text, View, Image, StatusBar, FlatList,ScrollView } from 'react-native';
import PrimaryButton from '../reuseable/PrimaryButton';
const Data = [
  {
    id: '1',
    title: 'Faisal Ayaz',
  },
  {
    id: '2',
    title: 'Muhammad Ayaz'
  },
  {
    id: '3',
    title: '0312345678',
  },
  {
    id: '4',
    title: 'House No 14,Scheme 1,Gulshan Iqbal,RYK',
  },
];
class Cat extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <StatusBar backgroundColor="#fff" />
        {/* Criminal Image */}
        <Image
          style={{
            alignSelf: "center",
            width: 300,
            height: 150,
            borderRadius: 20,
            marginTop: "5%"
          }}
          source={require('../assets/images/user.png')}
        />
        {/* Criminal Details */}
        <View>
          <FlatList
            showsHorizontalScrollIndicator={true}
            horizontal={false}
            data={Data}
            keyExtractor={item => item.id}
            renderItem={(item, index) => {
              return (
                <View
                  style={{
                    marginHorizontal: "10%",
                    marginTop: 20
                  }}>

                  <Text style={{
                    color: "#000",
                    fontFamily: "Poppins-Bold",
                    fontWeight:'bold',
                    fontSize: 18,
                  }}>
                    {item.item.title}
                  </Text>
                </View>
              );
            }}
          />
        </View>

        {/* Case Number */}
        <Text style={{
          color: "#000063",
          fontFamily: "Poppins-Bold",
          fontSize: 20,
          marginTop: 20,
          textAlign: "center"
        }}>
          Previous Case
        </Text>
        <Text style={{
          color: "#000063",
          fontFamily: "Poppins-Bold",
          fontWeight: "bold",
          fontSize: 18,
          marginTop: 10,
          textAlign: "center"
        }}>
          Section 302
        </Text>

      {/* Case Description */}
        <Text style={{
          color: "#000",
          fontFamily: "Poppins-Bold",
          fontSize: 18,
          marginHorizontal: "10%",
          marginTop:20
        }}>
          Case Description:
        </Text>
        <View style={{
          width: 300,
          height: 180,
          backgroundColor: "#F2F2F7",
          justifyContent: "center",
          alignSelf: "center",
          marginTop: 10,
        }}>
          <Text style={{
            fontSize: 18,
            color: "#000",
            marginHorizontal: "5%",
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit fermentum massa quis efficitur. Nullam a ligula vitae quam sagittis pretium. Vivamus nec nunc eu lorem vulputate  nec augue.
          </Text>
        </View>

        {/* Details Save Button */}
        <PrimaryButton title="Save" />
      </View>
    );
  }
}

export default Cat;