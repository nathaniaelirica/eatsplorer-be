import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const BoxLocResto = ({ distance, totalReviews, range_harga, rating, open_hour }) => {
  return (
    <View className="flex-row justify-between items-center">
                  {/* maps */}
                  <Ionicons
                    name="location"
                    size={30}
                    color="#FF0000"
                  />
                  <Text className="ml-1 text-sm  text-[#9CA3AF]">{`${distance} km`}</Text>

                  {/* rating */}
                  <View className="ml-2 flex-row items-center">
                    <Ionicons
                      name="star"
                      size={27}
                      color="#FDC83D"
                    />
                    <Text className="ml-1 text-sm text-[#9CA3AF]">{rating}</Text>
                    <Text className="text-sm ml-1  text-[#9CA3AF]">({totalReviews})</Text>
                  </View>
                  {/* open hour */}
                  <View className="ml-2 flex-row items-center">
                    <Ionicons
                      name="time-outline"
                      size={28}
                      color="#FF9E44"
                      className="content-center"
                    />
                    <Text className="ml-1 text-sm text-[#9CA3AF]">
                      {open_hour}
                    </Text>
                  </View>
                  {/* range harga */}
                  <View className="ml-2 flex-row items-center">
                    <Ionicons
                      name="cash-outline"
                      size={28}
                      color="#7FCC5B"
                      className="content-center"
                    />
                    <Text className="ml-1 text-sm text-[#9CA3AF]">
                      {range_harga}
                    </Text>
                  </View>
                </View>
  );
};

export default BoxLocResto;