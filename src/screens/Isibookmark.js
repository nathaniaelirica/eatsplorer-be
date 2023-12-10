import * as React from "react";
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
    </Background>
  );
}