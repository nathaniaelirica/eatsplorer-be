import React, { useState, useEffect } from 'react';
import { View, Text,TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import Background from "../components/Background";
import { Ionicons } from '@expo/vector-icons';

import SeeMoreBox from "../components/Box/SeeMoreBox";

import { getRestaurantsByRate } from "../../functions/functions.js";

export default function SeeMoreTopRated({ navigation }) {
  const [restaurantsByRate, setRestaurantsByRate] = useState([]);

  useEffect(() => {
    getRestaurantsByRate(setRestaurantsByRate);
  }, []);

  return (
    <Background>
    <ScrollView>
      <View className="flex flex-row m-1 w-full">
        <TouchableOpacity className="content-start mt-1" onPress={() => navigation.navigate("main")}>
          <Ionicons name="arrow-back" size={25} color="black" />
        </TouchableOpacity>
        <Text className="text-black text-center font-inter text-lg font-semibold mx-4 ">Top Rated</Text>
      </View>
      <View className="flex flexcol py-2 items-center justify-center">
        {restaurantsByRate.map((restaurant) => (
        <SeeMoreBox
          imageSource={require('../../assets/fast_food.jpg')}
          distance={restaurant.distance} 
          title={restaurant.title}
          price={88.5}
          rating={restaurant.rating}
          totalReviews={2395}
          backgroundColor="bg-yellow text-black"
          onPress={() => navigation.navigate("restaurantpage")}
        />
        ))}
      </View>
    </ScrollView>  
    </Background>
  );
}
