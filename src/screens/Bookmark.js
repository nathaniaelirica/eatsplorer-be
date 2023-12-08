import * as React from "react";
import { View, Text, Image, BackHandler } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";

export default function Bookmark({ navigation }) {
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
    </Background>
  );
}
