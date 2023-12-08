import * as React from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import Background from "../components/Background";
import { Ionicons } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';


import FoodSelectionCircle from '../components/Box/FoodSelection';
import ExploreTopRated from "../components/Box/ExploreTopRated";

export default function Explore({ navigation }) {
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
        <Text className="text-black text-left font-inter text-lg font-semibold">location name</Text>
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

      {/* Top Rated */}

      <View className="flex-row items-center justify-between py-2 px-4">
        <Text className="text-black text-left font-inter text-base font-bold">Top Rated</Text>
        <TouchableOpacity onPress={() => navigation.navigate("seemoretoprated")}>
          <Text className="text-gray font-normal text-sm">See More</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        <View className="flex flex-row py-2 px-4 ">
          <View className="flex flexcol py-2">
            <ExploreTopRated
              imageSource={require('../../assets/fast_food.jpg')}
              distance={5} 
              title="Burger King"
              price={88.5}
              rating={4.9}
              totalReviews={2395}
              backgroundColor="bg-yellow text-black"
              onPress={() => navigation.navigate("restaurantpage")}
            />
            <ExploreTopRated
              imageSource={require('../../assets/fast_food.jpg')}
              distance={15} 
              title="Blenger Burger"
              price={88.5}
              rating={4.9}
              totalReviews={2395}
              backgroundColor="bg-yellow text-black"
            />
          </View>
          <View className="flex flexcol py-2">
            <ExploreTopRated
              imageSource={require('../../assets/sushi.jpg')}
              distance={5} 
              title="Sushi Tei"
              price={88.5}
              rating={4.9}
              totalReviews={2395}
              backgroundColor="bg-yellow text-black"
            />
            <ExploreTopRated
              imageSource={require('../../assets/fast_food.jpg')}
              distance={25} 
              title="Kopi Anak Monopole"
              price={88.5}
              rating={4.9}
              totalReviews={2395}
              backgroundColor="bg-yellow text-black"
            />
            </View>
        </View>
      </ScrollView>
      <View className="flex-row items-center justify-between py-2 px-4">
        <Text className="text-black text-left font-inter text-base font-bold">Near Me</Text>
        <TouchableOpacity onPress={() => navigation.navigate("seemorenearme")}>
          <Text className="text-gray font-normal text-sm">See More</Text>
        </TouchableOpacity>
      </View>

      {/* near me */}

      <ScrollView horizontal={true}>
        <View className="flex flex-row py-2 px-4 ">
          <View className="flex flexcol py-2">
            <ExploreTopRated
              imageSource={require('../../assets/fast_food.jpg')}
              distance={5} 
              title="Burger King"
              price={88.5}
              rating={4.9}
              totalReviews={2395}
              backgroundColor="bg-yellow text-black"
            />
            <ExploreTopRated
              imageSource={require('../../assets/fast_food.jpg')}
              distance={15} 
              title="Blenger Burger"
              price={88.5}
              rating={4.9}
              totalReviews={2395}
              backgroundColor="bg-yellow text-black"
            />
          </View>
          <View className="flex flexcol py-2">
            <ExploreTopRated
              imageSource={require('../../assets/sushi.jpg')}
              distance={5} 
              title="Sushi Tei"
              price={88.5}
              rating={4.9}
              totalReviews={2395}
              backgroundColor="bg-yellow text-black"
            />
            <ExploreTopRated
              imageSource={require('../../assets/fast_food.jpg')}
              distance={25} 
              title="Kopi Anak Monopole"
              price={88.5}
              rating={4.9}
              totalReviews={2395}
              backgroundColor="bg-yellow text-black"
            />
            </View>
        </View>
      </ScrollView>
      </ScrollView>
    </Background>
  );
}
