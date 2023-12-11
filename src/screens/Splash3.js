import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

export default function Splash3() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex flex-col items-center justify-center flex-1 bg-[#FEDB71] gap-y-2">
      <TouchableOpacity onPress={() => navigation.navigate("main")}>
        <Image
          source={require("../../assets/splash3.png")}
          className="w-80 h-96 left-9"
        />
        <Text className="mt-2 text-2xl font-bold text-[#C66200] text-center">
          Uncover the Best Eats in Town
        </Text>
        <Text className="top-4 mx-5 font-medium text-base text-center text-white">
          Navigate through a variety of restaurants, read insightful reviews,
          and make informed choices for a delightful food journey!
        </Text>
      </TouchableOpacity>
      <View className="top-10 -left-[16px] rounded-md border-[#C66200] border-2 w-2 items-center"></View>
      <View className="top-[28px] left-[1px] rounded-md border-[#C66200] border-2 w-4 items-center"></View>
    </SafeAreaView>
  );
}