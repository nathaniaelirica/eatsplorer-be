import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const BoxIsibookmark = ({ imageSource, title, rating, totalReviews}) => {
  return (
    <View className="mt-4 ml-4 p-1 rounded-xl shadow-xl h-64 w-[335px] bg-white">
    <View className="flex-col mx-3  ">
      <View className="mt-2 rounded-xl overflow-hidden w-fit">
        <Image
          source={imageSource}
          className="h-48 w-[355px] items-center"
        />
      </View>
      <View className="flex-row justify-between items-center py-1">
      <Text className="text-left text-xl font-inter font-semibold mt-1 ">
        {title}
      </Text>
      <View className="flex flex-row mt-1 ">
        <Entypo
          name="star"
          size={17}
          color="#FDC83D"
        />
       <Text className="text-sm mx-1 text-center  text-[#9CA3AF]">
        {rating}
        </Text>
        <Text className="text-sm  text-[#9CA3AF] mr-1">
                    {(totalReviews)}
         </Text>
         <Ionicons
            name="bookmark"
            size={20}
            color="#FFE500" />
      </View>
    </View>
    </View>
  </View>
  
  );
};

export default BoxIsibookmark;