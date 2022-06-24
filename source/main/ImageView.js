import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import PrimaryButton from '../reuseable/PrimaryButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = [
  {
    id: '1',
    title: 'Name:',
    title2: ' Muhammad Faisal',
  },
  {
    id: '2',
    title: 'Father Name:',
    title2: 'Muhammad Ali',
  },
  {
    id: '3',
    title: 'Phone No:',
    title2: '+92312345678',
  },
  {
    id: '4',
    title: 'Address:',
    title2: 'House 14,Scheme 1,Gulshan Usman,RYK',
  },
  {
    id: '5',
    title: 'CNIC:',
    title2: '31303-1234566-8',
  },
];

class Cat extends Component {
  render() {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1, backgroundColor: '#fff'}}>
        <StatusBar backgroundColor="#fff" />

        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={{
            backgroundColor: '#fff',
            elevation: 10,
            alignSelf: 'flex-start',
            marginTop: 10,
            marginLeft: 20,
            padding: 5,
            borderRadius: 10,
          }}>
          <Ionicons name={'chevron-back-outline'} size={30} color="#000" />
        </TouchableOpacity>

        {/* Criminal Image */}
        <Image
          style={{
            alignSelf: 'center',
            width: '90%',
            borderRadius: 10,
            marginTop: 20,
          }}
          resizeMode={'stretch'}
          source={require('../assets/images/user.png')}
        />

        {/* Criminal Details */}
        <View style={{alignContent: 'center'}}>
          <FlatList
            keyExtractor={item => item.id}
            renderItem={(item, index) => {
              return (
                <View
                  style={{
                    marginTop: 20,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: '5%',
                    }}>
                    <Text
                      style={{
                        color: '#000',
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}>
                      {item.item.title}
                    </Text>
                    <Text
                      style={{
                        color: '#000',
                        fontSize: 15,
                        marginHorizontal: '5%',
                      }}>
                      {item.item.title2}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>

        {/* Case Number */}
        <Text
          style={{
            color: '#000063',
            fontFamily: 'Poppins-Bold',
            fontSize: 20,
            marginTop: 5,
            textAlign: 'center',
          }}>
          Previous Case
        </Text>
        <Text
          style={{
            color: '#000063',
            fontFamily: 'Poppins-Bold',
            fontWeight: 'bold',
            fontSize: 18,
            marginTop: 5,
            textAlign: 'center',
          }}>
          Section 302
        </Text>

        {/* Case Description */}
        <Text
          style={{
            color: '#000',
            fontFamily: 'Poppins-Bold',
            fontSize: 18,
            marginHorizontal: '5%',
            marginTop: 10,
          }}>
          Case Description:
        </Text>
        <View
          style={{
            width: '90%',
            height: 150,
            backgroundColor: '#F2F2F7',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 5,
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              marginHorizontal: '5%',
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            hendrerit fermentum massa quis efficitur. Nullam a ligula vitae quam
            sagittis pretium. Vivamus nec nunc eu lorem vulputate nec augue.
          </Text>
        </View>

        {/* Details Save Button */}
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <PrimaryButton
            title="Save"
            bgStyle={{marginTop: 10, marginBottom: 10, marginBottom: '10%'}}
          />
        </View>
      </ScrollView>
    );
  }
}

export default Cat;
