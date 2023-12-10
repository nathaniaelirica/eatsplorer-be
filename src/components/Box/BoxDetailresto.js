import React from "react";
import { View, Text, Image } from "react-native";

const BoxDetailresto = ({ imageSource, title, category, address }) => {
  return (
    <View className="-mb-20">
      <Image
        source={imageSource}
        className="h-20 w-20"
      />
      <View className="-top-20">
        <Text className="text-[9px] font-bold text-center items-center justify-center mt-1 rounded-md text-[#DAA000]">
          {category}
        </Text>
        <Text className="-top-2 text-2xl font-bold text-black">{title}</Text>
        <Text className="-top-2 mt-1 text-black">{address}</Text>
      </View>
    </View>
  );
};

export default BoxDetailresto;