import * as React from "react";
import { View, Text, ScrollView,TouchableOpacity, TextInput, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Background from "../components/Background";
import { Entypo } from "@expo/vector-icons";
import BoxReview from "../components/Box/BoxReview";

export default function ReviewSeemore({ navigation }) {
  return (
    <Background>
      <ScrollView>
      <View className="flex flex-row m-1 w-full">
        <TouchableOpacity className="content-start mt-1" onPress={() => navigation.navigate("main")}>
          <Ionicons name="arrow-back" size={25} color="black" />
        </TouchableOpacity>
        <Text className="text-black text-center font-inter text-lg font-semibold mx-4 ">Customer Reviews</Text>
      </View>
      {/* tulis review */}
      <TouchableOpacity
        className="flex-row items-center p-3 rounded-lg  m-4 bg-white border border-[#EEEEEE] justify-between" onPress={() => navigation.navigate('start')}>
       <View className="rounded-full overflow-hidden">
                      <Image
                        source={require("../../assets/nopic.png")}
                        className="h-10 w-10"
                      />
                    </View>
        <TextInput
          className="flex-1 ml-2 text-[#9CA3AF] text-sm font-normal"
          placeholder="Write your review....."
          placeholderTextColor="black"
          editable={false} // Membuat TextInput tidak dapat diedit
        />
        <View className="mr-4">
        <Ionicons name="camera" size={25} color="#FEDB71" />
        </View>
       <Ionicons name="send" size={24} color="#FEDB71" />
      </TouchableOpacity>
      {/* end of write box review */}
        <View className="flex-col justify-between">
            {/* review 1 */}
        <BoxReview 
        imageSource={require("../../assets/nopic.png")}
        name="Keisya Nabila"
        cust_rating={4.9}
        cust_review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque tempor auctor. Nullam id cursus ligula."
        />
                {/* review 2 */}
                <BoxReview 
        imageSource={require("../../assets/nopic.png")}
        name="Keisya Nabila"
        cust_rating={4.9}
        cust_review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque tempor auctor. Nullam id cursus ligula."
        />

                {/* review 3 */}
                <BoxReview 
        imageSource={require("../../assets/nopic.png")}
        name="Keisya Nabila"
        cust_rating={4.9}
        cust_review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque tempor auctor. Nullam id cursus ligula."
        />
                {/* review 4 */}
                <BoxReview 
        imageSource={require("../../assets/nopic.png")}
        name="Keisya Nabila"
        cust_rating={4.9}
        cust_review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque tempor auctor. Nullam id cursus ligula."
        />

                {/* review 5  */}
                <BoxReview 
        imageSource={require("../../assets/nopic.png")}
        name="Keisya Nabila"
        cust_rating={4.9}
        cust_review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque tempor auctor. Nullam id cursus ligula."
        />
        {/* kolom */}
        </View>

      </ScrollView>
    </Background>
  );
}