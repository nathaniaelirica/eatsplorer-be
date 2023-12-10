import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const SearchBox = ({ imageSource, distance, title,  rating, totalReviews, onPress, backgroundColor }) => {
  return (
    <View className="flex-1 m-2 ">
    <TouchableOpacity className="items-center rounded-lg bg-white shadow-xl h-40 w-full p-3 gap-x-2 " onPress={onPress}>
      <View className="flex flex-row w-full item-start justify-start">
        <Image source={imageSource} className="w-32 h-32 rounded-lg my-1" />
        <View className ="flex flex-col ml-4">
        <Text className={`px-1 text-xs font-semibold text-center rounded-md w-1/2 my-1 ${backgroundColor}`}>{`${distance} km`}</Text>
        <Text className="text-lg font-bold my-1">{title}</Text>
          <View className="flex flex-row justify-left  my-1">
            <Entypo name="star" size={17} color="#FDC83D" />
            <Text className="text-xs mx-1 text-center font-bold text-[#9CA3AF]">{rating}</Text>
            <Text className="text-xs mx-1 text-center font-normal text-[#9CA3AF]">({totalReviews})</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
    </View>
  );
};

export default SearchBox;