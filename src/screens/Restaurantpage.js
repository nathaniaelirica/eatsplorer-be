import * as React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";

export default function Restaurantpage({ navigation }) {
  return (
    <Background>
      <Text
        className="text font-bold" >
        restaurantpage
      </Text>
      <StatusBar style="auto" />
    </Background>
  );
}
