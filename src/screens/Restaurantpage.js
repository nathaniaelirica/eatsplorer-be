import * as React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import BoxDetailresto from "../components/Box/BoxDetailresto";
import BoxLocResto from "../components/Box/BoxLocResto";
import BoxRestoCustomerReview from "../components/Box/BoxRestoCustomerReview";

export default function Restaurantpage({ navigation, title, address }) {
  return (
    // <Background>
    <View>
      <ScrollView>
        <View className="relative">
          <Image
            source={require("../../assets/fast_food.jpg")}
            className="w-full h-96 top-0"
          />
          <TouchableOpacity
            className="absolute top-14 left-4"
            onPress={() => navigation.navigate("main")}>
            <Ionicons
              name="arrow-back"
              size={25}
              color="white"
            />
          </TouchableOpacity>

          {/* coba baru */}
          <View
            style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
            className="bg-white -mt-6 pt-6">

             <View className="absolute -top-9 rounded-full border-solid border-white border-8 bg-white left-[152px]">
             <BoxDetailresto 
             imageSource={require("../../assets/bkicon.png")}
             />
            </View>

            <View className="flex-col px-5">
              <View className="flex-row">
                <View className="rounded-full w-28 h-6  border-solid border-2 border-yellow">
                  <View className="flex">
                    {/* <Text className="px-1 text-[9px] font-bold text-center rounded-md my-2 text-[#DAA000]">
                      Western Cuisine
                    </Text> */}
                    <BoxDetailresto 
                    category="Western Cuisine"
                    />
                  </View>
                </View>
                <TouchableOpacity
                  className="left-52"
                  onPress={() => navigation.navigate("isibookmark")}>
                  <Ionicons
                    name="bookmark-outline"
                    size={25}
                    color="#FFE500"
                  />
                </TouchableOpacity>
              </View>
              <BoxDetailresto 
              title="Burger King"
              address="Jl. Kutisari Indah Utara 2"
              />

              <ScrollView horizontal={true}>
                <BoxLocResto 
                distance="5"
                rating={4.9}
                totalReviews={2359}
                open_hour="08.00-21.00"
                range_harga="20rb-50rb"
                />
              </ScrollView>

              <View className="flex-row items-center justify-between mt-8">
                <Text className="text-black text-xl font-medium">
                  Customer Reviews
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("review")}>
                  <Text className="text-gray font-normal text-sm">
                    See More
                  </Text>
                </TouchableOpacity>
              </View>

              {/* komen */}
              <ScrollView horizontal={true}>
                <View className="flex flex-row">
                  {/* review 1 */}
                  <BoxRestoCustomerReview
                    imageSource={require("../../assets/nopic.png")}
                    name="Keisya Nabila"
                    cust_rating={4.9}
                    cust_review="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam pellentesque tempor auctor. Nullam id cursus ligula."
                  />
                  {/* review 2 */}
                  <BoxRestoCustomerReview
                    imageSource={require("../../assets/nopic.png")}
                    name="Keisya Nabila"
                    cust_rating={4.9}
                    cust_review="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam pellentesque tempor auctor. Nullam id cursus ligula."
                  />

                  {/* review 3 */}
                  <BoxRestoCustomerReview
                    imageSource={require("../../assets/nopic.png")}
                    name="Keisya Nabila"
                    cust_rating={4.9}
                    cust_review="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam pellentesque tempor auctor. Nullam id cursus ligula."
                  />
                </View>
              </ScrollView>

              {/* kolom */}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
    // </Background>
  );
}