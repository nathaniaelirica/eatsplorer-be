import React, { useState, useEffect } from 'react';
import { View, TextInput, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import Background from '../components/Background';
import BoxReview from '../components/Box/BoxReview';

const ReviewWithCommentInput = ({ navigation }) => {
  const [comment, setComment] = useState('');
  const [image, setImage] = useState(null);
  const [submittedComments, setSubmittedComments] = useState([]);

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(
        Permissions.CAMERA_ROLL,
        Permissions.CAMERA
      );
      if (status !== 'granted') {
        console.log('Permission to access camera and gallery is required!');
      }
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    handleImagePickerResult(result);
  };

  const handleImagePickerResult = (result) => {
    if (!result.canceled) {
      // Check if the result contains assets
      if (result.assets && result.assets.length > 0) {
        const selectedImage = result.assets[0];
        setImage(selectedImage.uri);
      } else {
        console.log('No assets found in the result');
      }
    }
  };
  
  

  const handleSubmit = () => {
    console.log('Comment:', comment);
    console.log('Image URI:', image);

    const isCameraImage = !!image;

    setSubmittedComments([...submittedComments, { comment, image }]);

    setComment('');
    setImage(null);
  };

  const handleDelete = (index) => {
    const updatedComments = [...submittedComments];
    updatedComments.splice(index, 1);
    setSubmittedComments(updatedComments);
  };

  return (
    <Background>
      <ScrollView>
        <View style={{ flex: 1 }}>
          {/* Header */}
          <View style={{ flexDirection: 'row', margin: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate('main')}>
              <Ionicons name="arrow-back" size={25} color="black" />
            </TouchableOpacity>
            <Text style={{ color: 'black', textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginLeft: 20 }}>
              Customer Reviews
            </Text>
          </View>

          {/* Comment Input */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
              borderRadius: 10,
              margin: 10,
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: '#EEEEEE',
              justifyContent: 'space-between',
            }}>
            <View style={{ borderRadius: 20, overflow: 'hidden' }}>
              <Image source={require('../../assets/nopic.png')} style={{ height: 40, width: 40 }} />
            </View>
            <TextInput
              style={{ flex: 1, marginLeft: 10, color: '#9CA3AF', fontSize: 14 }}
              placeholder="Write your review....."
              placeholderTextColor="black"
              editable={true}
              value={comment}
              onChangeText={(text) => setComment(text)}
            />
            <TouchableOpacity onPress={takePhoto}>
              <Ionicons name="camera" size={25} color="#FEDB71" />
            </TouchableOpacity>
            <Ionicons name="send" size={24} color="#FEDB71" onPress={handleSubmit} />
          </TouchableOpacity>

          {/* Display the list of submitted comments */}
          <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
            {submittedComments.map((item, index) => (
              <React.Fragment key={index}>
                <BoxReview
                  imageSource={require('../../assets/nopic.png')}
                  name="Me"
                  cust_review={item.comment}
                  isCameraImage={item.image}
                  onDelete={() => handleDelete(index)}
                />
                
              </React.Fragment>
            ))}
          </View>
        </View>
      </ScrollView>
    </Background>
  );
};

export default ReviewWithCommentInput;