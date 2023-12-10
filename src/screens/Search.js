import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, ActivityIndicator, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from '@expo/vector-icons';
import Background from "../components/Background";
import { handleSearch } from "../../functions/functions.js";

import SearchBox from "../components/Box/SearchBox";

export default function Search({ navigation }) {
  const [query, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSearch = () => {
    setIsLoading(true);
    handleSearch(query, (results) => {
      setSearchResults(results);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    // Use this effect to clear search results when the query is empty
    if (query === "") {
      setSearchResults([]);
    }
  }, [query]);

  return (
    <Background>
      <ScrollView>
        <View className="flex flex-row m-1 w-full">
          <TouchableOpacity className="content-start mt-1" onPress={() => navigation.navigate("main")}>
            <Ionicons name="arrow-back" size={25} color="black" />
          </TouchableOpacity>
          <Text className="text-black text-center font-inter text-lg font-semibold mx-4">
            Search
          </Text>
        </View>

        <TouchableOpacity
          className="flex-row items-center justify-center p-3 rounded-lg m-6 bg-white border border-[#8b91a3]">
          <Ionicons name="search-outline" size={22} color="black" />
          <TextInput
            className="flex-1 ml-8 text-[#8b91a3] text-base font-light"
            placeholder="Cari restoran atau menu makanan"
            placeholderTextColor="#8b91a3"
            value={query}
            onChangeText={(text) => setSearchQuery(text)}
            editable={true}
            onSubmitEditing={onSearch}
          />
        </TouchableOpacity>

        <View className="flex flex-col py-2 items-center justify-center">
          {searchResults.map((result, id) => (
            <SearchBox
              imageSource={require('../../assets/fast_food.jpg')}
              key={result.id}
              distance={5} 
              title={result.title}
              price={88.5}
              rating={result.rating}
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
