import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, StyleSheet } from "react-native";
import Background from "../components/Background";
import { Ionicons } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';


import FoodSelectionCircle from '../components/Box/FoodSelection';
import ExploreTopRated from "../components/Box/ExploreTopRated";

import { getLocationAsync, getNearbyRestaurants, getRestaurantsByRate, truncateLocationName, getRestaurantsByCuisine, selectedCategory } from "../../functions/functions.js";

export default function Explore({ navigation }) {
  const [location, setLocation] = useState(null);
  const [locationName, setLocationName] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [nearbyRestaurants, setNearbyRestaurants] = useState([]);
  const [restaurantsByRate, setRestaurantsByRate] = useState([]);
  const [restaurantsByCuisine, setRestaurantsByCuisine] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(); // Atau nilai default yang sesuai
  // const categories = ['Kafe', 'Barat', 'Jepang', 'Indonesia', 'Dessert', 'Toko Roti dan Kue'];


  useEffect(() => {
    const fetchData = async () => {
      try {
        getLocationAsync(setLocation, setErrorMsg, setNearbyRestaurants, setLocationName);
        getRestaurantsByRate(setRestaurantsByRate);
        getRestaurantsByCuisine(setRestaurantsByCuisine, selectedCategory);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [selectedCategory]);

  const categories = [
    { id: 'Indonesian', text: 'Indonesian', imageSource: require('../../assets/fried_rice.jpg') },
    { id: 'Japanese', text: 'Japanese', imageSource: require('../../assets/sushi.jpg') },
    { id: 'Western', text: 'Western', imageSource: require('../../assets/fast_food.jpg') },
    { id: 'Korean', text: 'Korean', imageSource: require('../../assets/Korean.jpg') },
    { id: 'Bakery', text: 'Bakery', imageSource: require('../../assets/bakery.jpg') },
    { id: 'Cafe', text: 'Cafe', imageSource: require('../../assets/beverages.jpg') },
    { id: 'Dessert', text: 'Dessert', imageSource: require('../../assets/sweets.jpg') },
  ];
  
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
      <ScrollView horizontal={true}>
        <View className="flex flex-row">
          {categories.map((category) => (
            <FoodSelectionCircle
              key={category.id}
              onPress={() => {
                setSelectedCategory((prevCategory) => {
                  console.log('prevCategory:', prevCategory);
                  console.log('category.text:', category.text);
                  return prevCategory === category.text ? null : category.text;
                });
                navigation.navigate(`${category.id}page`);
              }}
              imageSource={category.imageSource}
              buttonText={category.text}
            />
          ))}
        </View>
      </ScrollView>
      {/* <ScrollView horizontal={true}>
        <View className="flex flex-row">
          {categories.map((category) => (
            <FoodSelectionCircle
              key={category.id}
              onPress={() => {
                setSelectedCategory(category.text);
                navigation.navigate(`${category.id}page`);
              }}
              imageSource={category.imageSource}
              buttonText={category.text}
            />
          ))}
        </View>
      </ScrollView> */}

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
            <View className="flex flex-row flex-wrap px-4">
              <View key={restaurant.id} className="flex-1 flex flex-col py-2">
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
            <View className="flex flex-row flex-wrap px-4">
              <View key={restaurant.id} className="flex-1 flex flex-col py-2">
                <ExploreTopRated
                  imageSource={{ uri: restaurant.imageUrl }}
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
