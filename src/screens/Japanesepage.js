import React, { useState, useEffect } from 'react';
// import * as React from "react";
import { View, Text, ScrollView,TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background.js";
import { Ionicons } from '@expo/vector-icons';

import SeeMoreBox from "../components/Box/SeeMoreBox.js";
import { getRestaurantsByCuisine, selectedCategory } from "../../functions/functions.js";


export default function Japanesepage({ navigation }) {
  const [restaurantsByCuisine, setRestaurantsByCuisine] = useState([]);
  const [selectedCategoryState, setSelectedCategoryState] = useState("Jepang"); // Ubah nama state
  // const categories = ['Kafe', 'Barat', 'Jepang', 'Indonesia', 'Dessert', 'Toko Roti dan Kue'];


  useEffect(() => {
    getRestaurantsByCuisine(setRestaurantsByCuisine, selectedCategoryState);
  }, [selectedCategoryState]);

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
          {restaurantsByCuisine.map((restaurant) => (
            <SeeMoreBox
              key={restaurant.id}
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
    <StatusBar style="auto" />
    </Background>
  );
}
