import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const SearchBox = ({ imageSource, distance, title, rating, totalReviews, onPress }) => {
  return (
    <TouchableOpacity className="m-2 p-3 bg-white rounded-lg shadow-xl flex-row items-start justify-start bg-white" onPress={onPress}>
      <Image source={imageSource} className="w-32 h-32 rounded-lg my-1" />
      <View className="flex-1 ml-4 justify-center">
        <Text className="px-1 text-xs font-semibold text-center w-16 bg-yellow rounded-lg my-1  ">{`${distance} km`}</Text>
        <Text className="text-lg font-semibold my-1">{title}</Text>
        <View className="flex-row items-center my-1">
          <Entypo name="star" size={17} color="#FDC83D" />
          <Text className="text-xs font-bold text-gray-500 ml-1">{rating}</Text>
          <Text className="text-xs font-normal text-gray-500">({totalReviews})</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SearchBox;
