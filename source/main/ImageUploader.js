import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import PrimaryButton from '../reuseable/PrimaryButton';
import SecondaryButton from '../reuseable/SecondaryButton';
import ImagePicker from 'react-native-image-crop-picker';
// APIS Import --------------//
import WebHandler from '../data/remote/WebHandler';
import Routes from '../data/remote/Routes';
import Helper from '../utils/Helper';
// Loading Page ---------------//
import LoadingPage from '../reuseable/LoadingPage';

const webHandler = new WebHandler();
const helper = new Helper();

class ImageUploader extends Component {
  state = {
    image: '',
    id: '',
    loading: false,
  };

  // Image Upload Api -------//
  Image_Upload = () => {
    const {image} = this.state;

    this.setState({loading: true});
    let body = new FormData();
    body.append('query_img', {
      uri: image,
      name: 'photo.png',
      type: 'image/png',
    });
    body.append('Content-Type', 'image/png');

    fetch('http://35.89.39.202/', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: body,
    })
      .then(res => res.json())
      .then(res => {
        console.log('response ===============>  ' + res);
        this.setState({id: res});
        this.Data_Return();
      })
      .catch(e => helper.showToast('Data not found', 'red', '#fff') + this.setState({loading:false}))
      .done();
  };

  // Image Data Returned Api -------//
  Data_Return = () => {
    const {id} = this.state;
    this.setState({loading: true});
    // if (image == '') {
    //   return;
    // }

    const bodyParams = new FormData();
    bodyParams.append('feature_id', id);

    webHandler.sendPostDataRequest1(
      Routes.GET_INFO,
      bodyParams,
      onSucess => {
        this.setState({loading: false});
        this.props.navigation.navigate('ImageView', {params: onSucess.data});
      },
      onFaliure => {
        this.setState({loading: false});
        console.log('Error Recived =========== >', onFaliure);
      },
    );
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
        {this.state.loading && <LoadingPage />}
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
            onPress={() => this.Image_Upload()}
          />
        </View>
      </ScrollView>
    );
  }
}

export default ImageUploader;
