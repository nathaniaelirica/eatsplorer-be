import * as React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ItemWithIconArrow from "../components/Box/ItemWithIconArrow";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";

export default function Profile({ navigation }) {
  return (
    <View>
      <ScrollView>
        <View className="relative">
          <Image
            source={require("../../assets/bg-profile.png")}
            className="w-full h-80 top-0"
          />

          <View className="absolute left-[110px] top-40">
            <Image
              source={require("../../assets/kepompong.png")}
              className="w-44 h-44 rounded-full shadow-xl items-center justify-center object-center"
            />
          </View>
          <View className="mt-6 flex-col justify-between items-center">
            <Text className="text-xl font-medium tracking-wider text-black mb-6">
              kepompong@gmail.com
            </Text>
            {/* setting */}
            <View className="ml-6 flex-row right-[127px]">
            <Ionicons
                    name="settings"
                    size={30}
                    color="#9CA3AF"
                  />
                  <Text className="text-black font-semibold text-lg left-2 ">Settings</Text>
                  </View>
            <View className="top-2 flex flex-col w-[350px] gap-y-3">
              <View className="">
                <ItemWithIconArrow title={"Personal Details"}>
                  <Ionicons
                    name="person-outline"
                    size={23}
                    color="#9CA3AF"
                  />
                </ItemWithIconArrow>
              </View>

              <View className="justify-between">
                <ItemWithIconArrow title={"FAQs"}>
                  <AntDesign
                    name="questioncircleo"
                    size={23}
                    color="#9CA3AF"
                  />
                </ItemWithIconArrow>
                <View className="mx-3 " />
                <ItemWithIconArrow title={"Help Center"}>
                  <MaterialCommunityIcons
                    name="headset"
                    size={23}
                    color="#9CA3AF"
                  />
                </ItemWithIconArrow>
              </View>

              <View className="">
                <ItemWithIconArrow title={"Language"}>
                  <Ionicons
                    name="ios-globe-outline"
                    size={23}
                    color="#9CA3AF"
                  />
                </ItemWithIconArrow>
                <View className="mx-3 " />
                <ItemWithIconArrow title={"Privacy"}>
                  <Octicons
                    name="shield-check"
                    size={23}
                    color="#9CA3AF"
                  />
                </ItemWithIconArrow>
                <View className="mx-3 " />
                <ItemWithIconArrow title={"Notifications"}>
                  <Octicons
                    name="bell"
                    size={23}
                    color="#9CA3AF"
                  />
                </ItemWithIconArrow>
              </View>
              <View>

              </View>

             
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}