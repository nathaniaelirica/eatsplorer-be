import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import Background from "../components/Background";
import { Ionicons } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';


import FoodSelectionCircle from '../components/Box/FoodSelection';
import ExploreTopRated from "../components/Box/ExploreTopRated";

import { getLocationAsync, getNearbyRestaurants, getRestaurantsByRate, truncateLocationName } from "../../functions/functions.js";

export default function Explore({ navigation }) {
  const [location, setLocation] = useState(null);
  const [locationName, setLocationName] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [nearbyRestaurants, setNearbyRestaurants] = useState([]);
  const [restaurantsByRate, setRestaurantsByRate] = useState([]);

  useEffect(() => {
    getLocationAsync(setLocation, setErrorMsg, setNearbyRestaurants, setLocationName);
    getRestaurantsByRate(setRestaurantsByRate);
  }, []);

  return (
    <Background>
    <ScrollView>
      <View className=" justify-center pt-4 pl-6">
        <TouchableOpacity onPress={() => navigation.navigate("maps")}>
          <View className="flex flex-row">
            <Text className="text-black text-left font-inter text-xs font-normal">Your Location</Text>
            <View className ="mt-[2px] mx-1">
              <AntDesign name="down" size={16} color="black"/>
            </View>
          </View>
        </TouchableOpacity>
          {locationName && (
            <Text className="text-black text-left font-inter text-lg font-semibold">{truncateLocationName(locationName)}</Text>
          )}
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("search")}
        className = "flex-row items-center p-3 rounded-lg  m-6 bg-white border border-[#8b91a3]">
        <Ionicons name="search-outline" size={22} color="black" />
        <TextInput
          className = "flex-1 ml-2 text-[#8b91a3] text-xs font-light"
          placeholder="Cari restoran atau menu makanan"
          placeholderTextColor="#8b91a3"
          editable={false} // Membuat TextInput tidak dapat diedit
        />
      </TouchableOpacity>
      <ScrollView horizontal={true}>
        <View className="flex flex-row">
          <FoodSelectionCircle onPress={() => navigation.navigate("indonesianpage")}
            imageSource={require('../../assets/fried_rice.jpg')}
            buttonText="Indonesian"
          />
          <FoodSelectionCircle onPress={() => navigation.navigate("japanesepage")}
            imageSource={require('../../assets/sushi.jpg')}
            buttonText="Japanese"
          />
          <FoodSelectionCircle onPress={() => navigation.navigate("westernpage")}
            imageSource={require('../../assets/fast_food.jpg')}
            buttonText="Western"
          />
          <FoodSelectionCircle onPress={() => navigation.navigate("koreanpage")}
            imageSource={require('../../assets/Korean.jpg')}
            buttonText="Korean"
          />
          <FoodSelectionCircle onPress={() => navigation.navigate("bakerypage")}
            imageSource={require('../../assets/bakery.jpg')}
            buttonText="Bakery"
          />
          <FoodSelectionCircle onPress={() => navigation.navigate("cafepage")}
            imageSource={require('../../assets/beverages.jpg')}
            buttonText="Cafe"
          />
          <FoodSelectionCircle onPress={() => navigation.navigate("dessertpage")}
            imageSource={require('../../assets/sweets.jpg')}
            buttonText="Dessert"
          />
        </View>
      </ScrollView>

      {/* Near Me */}

      <View className="flex-row items-center justify-between py-2 px-4">
        <Text className="text-black text-left font-inter text-base font-bold">Near Me</Text>
          <TouchableOpacity onPress={() => navigation.navigate("seemorenearme")}>
            <Text className="text-gray font-normal text-sm">See More</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true}>
          {nearbyRestaurants.slice(0, 5).map((restaurant) => (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 4 }}>
              <View key={restaurant.id} style={{ flex: 1, flexDirection: 'column', paddingVertical: 2 }}>
                <ExploreTopRated
                  imageSource={require('../../assets/fast_food.jpg')}
                  distance={restaurant.distance} 
                  title={restaurant.title}
                  price={88.5}
                  rating={restaurant.rating}
                  totalReviews={2395}
                  backgroundColor="bg-yellow text-black"
                /> 
              </View>
            </View>
          ))}
        </ScrollView>
      <View className="flex-row items-center justify-between py-2 px-4">
        <Text className="text-black text-left font-inter text-base font-bold">Top Rated</Text>
          <TouchableOpacity onPress={() => navigation.navigate("seemoretoprated")}>
            <Text className="text-gray font-normal text-sm">See More</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true}>
          {restaurantsByRate.slice(0, 5).map((restaurant) => (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 4 }}>
              <View key={restaurant.id} style={{ flex: 1, flexDirection: 'column', paddingVertical: 2 }}>
                <ExploreTopRated
                  imageSource={require('../../assets/fast_food.jpg')}
                  distance={restaurant.distance}  
                  title={restaurant.title}
                  price={88.5}
                  rating={restaurant.rating}
                  totalReviews={2395}
                  backgroundColor="bg-yellow text-black"
                />
              </View>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </Background>
  );
}
