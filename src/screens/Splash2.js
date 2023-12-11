import * as React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";


export default function Splash2() {
  const navigation = useNavigation();
  return (

    <SafeAreaView className="flex flex-col items-center justify-center flex-1 bg-[#FEDB71] gap-y-2" >
    <TouchableOpacity onPress={() => navigation.navigate('splash3')}>
    <Image
     source={require("../../assets/splash2.png")}
     className="w-80 h-80 left-9"
   />
     <Text className="mt-2 text-2xl font-bold text-[#C66200] text-center">Discover Your Culinary Favorites</Text>
     <Text className="top-4 mx-6 font-medium text-base text-center text-white">Explore top-rated restaurants effortlessly and find the best reviews for an unparalleled dining experience!</Text>
    
        <View className="top-10 left-[180px] rounded-md border-[#C66200] border-2 w-4 items-center">

        </View>
        <View className="top-9 left-[200px] rounded-md border-[#C66200] border-2 w-2 items-center">

        </View>
     </TouchableOpacity>
 </SafeAreaView>

     
  );
}