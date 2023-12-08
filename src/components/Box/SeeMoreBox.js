import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const SeeMoreBox = ({ imageSource, distance, title,  rating, totalReviews, onPress, backgroundColor }) => {
  return (
    <View className="flex-1 m-2">
    <TouchableOpacity className="items-center rounded-lg bg-white shadow-xl h-70 w-[350px] p-3  " onPress={onPress}>
      <View className="flex flex-col w-full">
        <Image source={imageSource} className="w-80 h-44 rounded-lg my-1" />
        <Text className={`px-1 text-xs font-semibold text-center rounded-md w-1/3 my-1 ${backgroundColor}`}>{`${distance} km`}</Text>
        <Text className="text-lg font-semibold my-1">{title}</Text>
          <View className="flex flex-row justify-end  my-1">
            <Entypo name="star" size={17} color="#FDC83D" />
            <Text className="text-xs mx-1 text-center font-bold text-[#9CA3AF]">{rating}</Text>
            <Text className="text-xs mx-1 text-center font-normal text-[#9CA3AF]">({totalReviews})</Text>
          </View>
      </View>
    </TouchableOpacity>
    </View>
  );
};

export default SeeMoreBox;
