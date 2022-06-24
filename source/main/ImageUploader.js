import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import PrimaryButton from '../reuseable/PrimaryButton';
import SecondaryButton from '../reuseable/SecondaryButton';
import ImagePicker from 'react-native-image-crop-picker';

class Cat extends Component {
  state = {
    image: '',
  };

  /// Image Picker Fuction ///
  select = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        this.setState({image: image.path});
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1, backgroundColor: '#fff'}}>
        {/* Header */}
        <View style={{marginTop: '20%'}}>
          <Text
            style={{
              color: '#000063',
              fontFamily: 'Poppins-Bold',
              fontSize: 20,
              marginTop: 5,
              textAlign: 'center',
            }}>
            Welcome to
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
            Content Based Image Retrieval
          </Text>
        </View>
        {/* Header */}

        {/* Image Uploader */}
        <View
          style={{
            height: 150,
            width: '80%',
            marginTop: '20%',
            justifyContent: 'center',
            alignSelf: 'center',
            borderStyle: 'dashed',
            borderRadius: 9,
            borderWidth: 1,
            borderColor: '000063',
          }}>
          {this.state.image == '' ? (
            <View style={{flex: 1}}>
              <Ionicons
                name="cloud-upload"
                color="#000063"
                size={40}
                style={{
                  alignSelf: 'center',
                  marginTop: 20,
                }}
              />
              <SecondaryButton
                title={'Browse File'}
                onPress={() => this.select()}
                bgStyle={{
                  width: '70%',
                  alignSelf: 'center',
                }}
              />
            </View>
          ) : (
            <View>
              <TouchableOpacity
                onPress={() => this.setState({image: ''})}
                style={{
                  position: 'absolute',
                  elevation: 10,
                  zIndex: 999,
                  backgroundColor: '#fff',
                  padding: 3,
                  borderRadius: 8,
                  top: -10,
                  right: -5,
                }}>
                <Entypo name="cross" size={25} color={'#000'} />
              </TouchableOpacity>
              <View>
                <Image
                  source={{uri: this.state.image}}
                  resizeMode={'stretch'}
                  style={{
                    height: 135,
                    width: '95%',
                    alignSelf: 'center',
                    borderRadius: 9,
                  }}
                />
              </View>
            </View>
          )}
        </View>

        {/* Image Uploader */}
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <PrimaryButton
            title={'Upload'}
            bgStyle={{marginTop: '20%', marginBottom: '10%'}}
            onPress={() => this.props.navigation.navigate('ImageView')}
          />
        </View>
      </ScrollView>
    );
  }
}

export default Cat;
