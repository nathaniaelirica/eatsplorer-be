import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Background from "../components/Background";
import { Entypo } from "@expo/vector-icons";
import BoxIsibookmark from "../components/Box/BoxIsibookmark";

export default function Isibookmark({ navigation }) {
  const [bookmarkedRestaurants, setBookmarkedRestaurants] = useState([]);
  // const { title, street, imageUrl, cuisine, distance, rate } = route.params.restaurant;

  useEffect(() => {
    // Ensure that route.params.restaurant is defined before accessing its properties
    if (route.params && route.params.restaurant) {
      const { title, street, imageUrl, cuisine, distance, rate } = route.params.restaurant;
      // Call toggleBookmark when needed
      toggleBookmark({ title, street, cuisine }, bookmarkedRestaurants, setBookmarkedRestaurants);
    }
  }, [route.params, bookmarkedRestaurants]);
  return (
    <Background>
      <ScrollView>
        <View className="flex flex-row m-1 w-full">
          <Text className="text-black text-center font-inter text-lg font-semibold mx-4 ">
            Bookmark 
          </Text>
        </View>

        {/* end of write box review */}
        <View className="flex-col justify-between">
          {/* bookmark 1 */}
         <BoxIsibookmark 
         imageSource={require("../../assets/fast_food.jpg")}
         title="Burger King"
         rating={4.9}
         totalReviews={2369}
         />

           {/* bookmark 2 */}
           <BoxIsibookmark 
         imageSource={require("../../assets/fast_food.jpg")}
         title="Burger King"
         rating={4.9}
         totalReviews={2369}
         />
         
          
          {/* kolom */}
        </View>
      </ScrollView>
      <ScrollView>
        {/* Rest of your code */}
        {/* Loop through bookmarkedRestaurants and display them */}
        {bookmarkedRestaurants.map((restaurant) => (
          <View key={restaurant.id} className="restaurant-item">
            <Text>Nama: {restaurant.title}</Text>
            <Text>Alamat: {restaurant.street}</Text>
            <Text>Cuisine: {restaurant.cuisine}</Text>
            <TouchableOpacity
              onPress={() => {
                // Correctly pass restaurant data
                toggleBookmark({ title: restaurant.title, street: restaurant.street, cuisine: restaurant.cuisine }, bookmarkedRestaurants, setBookmarkedRestaurants);
              }}
              className="bookmark-button"
            >
              <Ionicons
                name={bookmarkedRestaurants.some((r) => r.title === restaurant.title) ? 'star' : 'star-outline'}
                size={20}
                color="yellow"
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </Background>
  );
}
