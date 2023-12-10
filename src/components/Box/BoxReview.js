import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const BoxRestoCustomerReview = ({ imageSource, name, cust_review, cust_rating}) => {
    return (
        <View className="mt-4 ml-4 rounded-xl shadow-xl p-3 h-52 w-64 border-2 border-white bg-white">
        <View className="flex-row mx-3 items-center ">
          <View className="rounded-full overflow-hidden">
            <Image
              source={imageSource}
              className="h-14 w-14"
            />
          </View>
          <Text className="text-center text-s font-inter font-semibold mt-1 mx-4">
            {name}
          </Text>
          <View className="flex flex-row mt-1 ">
            <Entypo
              name="star"
              size={17}
              color="#FDC83D"
            />
            <Text className="text-xs mx-1 text-center font-bold text-[#9CA3AF]">
              {cust_rating}
            </Text>
          </View>
        </View>
        <View className="flex flex-col mx-3 mt-2 items-center">
          <Text className="text-justify text-xs font-Inter font-normal mt-1">
            {cust_review}
          </Text>
        </View>
      </View>

        );
    };
    
export default BoxRestoCustomerReview;