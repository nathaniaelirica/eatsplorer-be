import React, { useState, useEffect } from 'react';
import { View, Text, Image, BackHandler, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";
import { toggleBookmark } from "../../functions/functions.js";

export default function Bookmark({ navigation }) {
  const [bookmarkedRestaurants, setBookmarkedRestaurants] = useState([]);
  return (
    <Background>
      <Image
        source={require("../../assets/heart_break.png")}
        style={{ width: 100, height: 100 }} // Adjust the width and height as needed
      />
      <Text
        className="text-black-500 font-bold text-lg"
        onPress={() => navigation.navigate("Bookmark")}
      >
        Your Bookmark
      </Text>
      <Text className="text-black-500">Explore items you love</Text>
      <Text className="text-black-500">
        and add them to your bookmark!
      </Text>
      <StatusBar style="auto" />
      <View className="list-container">
        <Text className="list-title">Bookmarked Restaurants</Text>
        <ScrollView>
          {bookmarkedRestaurants.map((restaurant) => (
            <View key={restaurant.id} className="restaurant-item">
              <Text>Nama: {restaurant.title}</Text>
              <Text>Alamat: {restaurant.street}</Text>
              <Text>Cuisine: {restaurant.cuisine}</Text>
              <TouchableOpacity
                onPress={() => toggleBookmark(restaurant.id, bookmarkedRestaurants, setBookmarkedRestaurants)}
                className="bookmark-button"
              >
                <Ionicons
                  name={bookmarkedRestaurants.some((r) => r.id === restaurant.id) ? 'star' : 'star-outline'}
                  size={20}
                  color="yellow"
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </Background>
  );
}
