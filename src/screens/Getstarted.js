import * as React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import LoginBackground from "../components/LoginBackground";


export default function Getstarted({ navigation }) {
  return (
    <LoginBackground>
      <ScrollView>
        <View className="mx-3 flex-col items-center justify-between mt-14">


        <Text className="text-center font-bold text-4xl text-white">
                Oops! </Text>
                <Text className="mt-4 text-center text-lg font-bold text-[#DAA000]">
                It appears you haven't created an account yet. Let's set up your account first and get you started! </Text>
        <Image
            source={require("../../assets/start2.png")}
            className="w-[360px] h-[360px]"/>
        <TouchableOpacity className="rounded-full w-80 border-solid  bg-white" onPress={()=> navigation.navigate('signup')}>
        <Text className="px-1 text-3xl font-bold text-center rounded-md my-2 text-[#DAA000]">Sign Up</Text>
        </TouchableOpacity>
        <View className="mt-4 flex-row justify-center">
                    <Text className="text-white font-semibold">Already have an account?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('login')}>
                        <Text className="font-bold text-[#DAA000]"> Login</Text>
                    </TouchableOpacity>
        </View>


        </View>

      </ScrollView>
    </LoginBackground>
  );
}