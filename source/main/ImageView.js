import React, {Component, useRef} from 'react';
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
import Input from '../reuseable/Input';
// import RNViewShot from 'react-native-view-shot';
import ViewShot, {captureScreen} from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';
import Helper from '../utils/Helper';

export default function ImageView({route, navigation}) {
  const viewShotRef = useRef();
  const helper = new Helper();

  async function handleDownload(uri) {
    CameraRoll.saveToCameraRoll(uri, 'photo')
      .then(res => helper.showToast('ScreenShot Captured', '#000063', '#fff'))
      .catch(err => console.log(err));
  }

  const Take_SS = () => {
    captureScreen({
      format: 'jpg',
      quality: 0.8,
    }).then(
      uri => console.log('Image saved to', uri) + handleDownload(uri),
      error => console.error('Oops, snapshot failed', error),
    );
  };

  const {
    address,
    case_description,
    case_title,
    cnic,
    father_name,
    image,
    name,
    phone_number,
  } = route.params.params;
  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, backgroundColor: '#fff'}}>
        <StatusBar backgroundColor="#fff" />

        <TouchableOpacity
          onPress={() => navigation.goBack()}
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

        <ViewShot ref={viewShotRef} options={{format: 'jpg', quality: 1.0}}>
          {/* Criminal Image */}
          <Image
            style={{
              alignSelf: 'center',
              width: '90%',
              borderRadius: 10,
              marginTop: 20,
              height: 200,
            }}
            resizeMode={'contain'}
            source={{uri: image}}
          />

          {/* Criminal Details */}
          <View style={{alignContent: 'center', marginTop: 5}}>
            <Input title={name == null ? 'Name' : name} />
            <Input title={father_name == null ? 'Father Name' : father_name} />
            <Input title={address == null ? 'Address' : address} />
            <Input
              title={phone_number == null ? 'Phone Number' : phone_number}
            />
            <Input title={cnic == null ? 'CNIC' : cnic} />
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
              // height: 150,
              backgroundColor: '#F2F2F7',
              alignSelf: 'center',
              marginTop: 5,
              borderRadius: 10,
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#000',
                marginHorizontal: '5%',
                marginTop: 10,
                marginBottom: 10,
              }}>
              {case_description}
            </Text>
          </View>
        </ViewShot>

        {/* Details Save Button */}
      </ScrollView>
      <View style={{justifyContent: 'flex-end', backgroundColor: '#fff'}}>
        <PrimaryButton
          title="Save"
          bgStyle={{
            marginTop: 10,
            marginBottom: 10,
            marginBottom: '10%',
          }}
          onPress={() => Take_SS()}
        />
      </View>
    </View>
  );
}
