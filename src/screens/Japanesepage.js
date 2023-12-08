import * as React from "react";
import { View, Text, ScrollView,TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";
import { Ionicons } from '@expo/vector-icons';

import SeeMoreBox from "../components/Box/SeeMoreBox";

export default function Japanesepage({ navigation }) {
  return (
    <Background>
          <ScrollView>
      <View className="flex flex-row m-1 w-full">
        <TouchableOpacity className="content-start mt-1" onPress={() => navigation.navigate("main")}>
          <Ionicons name="arrow-back" size={25} color="black" />
        </TouchableOpacity>
        <Text className="text-black text-center font-inter text-lg font-semibold mx-4 ">Japanese</Text>
      </View>
      <View className="flex flexcol py-2 items-center justify-center">
        <SeeMoreBox
          imageSource={require('../../assets/fast_food.jpg')}
          distance={5} 
          title="Burger King"
          price={88.5}
          rating={4.9}
          totalReviews={2395}
          backgroundColor="bg-yellow text-black"
          onPress={() => navigation.navigate("restaurantpage")}
        />
        <SeeMoreBox
          imageSource={require('../../assets/sushi.jpg')}
          distance={5} 
          title="Sushi Tei"
          price={88.5}
          rating={4.9}
          totalReviews={2395}
          backgroundColor="bg-yellow text-black"
          onPress={() => navigation.navigate("restaurantpage")}
        />
        <SeeMoreBox
          imageSource={require('../../assets/fried_rice.jpg')}
          distance={5} 
          title="Solaria"
          price={88.5}
          rating={4.9}
          totalReviews={2395}
          backgroundColor="bg-yellow text-black"
          onPress={() => navigation.navigate("restaurantpage")}
        />
        <SeeMoreBox
          imageSource={require('../../assets/bakery.jpg')}
          distance={5} 
          title="Maison Feerie"
          price={88.5}
          rating={4.9}
          totalReviews={2395}
          backgroundColor="bg-yellow text-black"
          onPress={() => navigation.navigate("restaurantpage")}
        />
        <SeeMoreBox
          imageSource={require('../../assets/bakso.jpg')}
          distance={0} 
          title="Bakso Bio Yummy"
          price={88.5}
          rating={5.1}
          totalReviews={112395}
          backgroundColor="bg-yellow text-black"
          onPress={() => navigation.navigate("restaurantpage")}
        />
      </View>
    </ScrollView> 
    <StatusBar style="auto" />
    </Background>
  );
}
