import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const FoodSelectionCircle = ({ imageSource, buttonText, onPress }) => {
  return (
    <View className="flex-1 m-2  ">
      <View className="flex flex-col">
        <TouchableOpacity className="rounded-full overflow-hidden" onPress={onPress}>
          <Image
            source={imageSource}
            className="w-20 h-20"
          />
        </TouchableOpacity>
        <Text className="text-center text-xs font-Inter font-normal mt-1">{buttonText}</Text>
      </View>
    </View>
  );
};

export default FoodSelectionCircle;
