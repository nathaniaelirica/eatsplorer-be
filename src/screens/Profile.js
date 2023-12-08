import * as React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";

export default function Profile({ navigation }) {
  return (
    <Background>
      <Text
        className="text font-bold"
        onPress={() => navigation.navigate("Profile")}
      >
        Profile
      </Text>
      <StatusBar style="auto" />
    </Background>
  );
}
