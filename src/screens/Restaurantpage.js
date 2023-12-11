// import React, { useState, useEffect } from 'react';
// import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { Entypo } from "@expo/vector-icons";
// import BoxDetailresto from "../components/Box/BoxDetailresto";
// import BoxLocResto from "../components/Box/BoxLocResto";
// import BoxRestoCustomerReview from "../components/Box/BoxRestoCustomerReview";

// import { toggleBookmark } from "../../functions/functions.js";

// export default function Restaurantpage({ route, navigation }) {
//   const { title, street, imageUrl, cuisine, distance, rate } = route.params;
//   const [restaurant] = useState([]);
//   const [restaurants] = useState([]);
//   const [bookmarkedRestaurants, setBookmarkedRestaurants] = useState([]);

//   useEffect(() => {
//     // Call toggleBookmark when needed, e.g., when a button is clicked
//     toggleBookmark({ title, street, cuisine }, bookmarkedRestaurants, setBookmarkedRestaurants);
//   }, [title, street, cuisine, bookmarkedRestaurants]);

//   return (
//     // <Background>
//     <View>
//       <ScrollView>
//         <View className="relative">
//           <Image
//             source={{ uri: imageUrl }}
//             className="w-full h-96 top-0"
//           />
//           <TouchableOpacity
//             className="absolute top-14 left-4"
//             onPress={() => navigation.navigate("main")}>
//             <Ionicons
//               name="arrow-back"
//               size={25}
//               color="white"
//             />
//           </TouchableOpacity>

//           {/* coba baru */}
//           <View
//             style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
//             className="bg-white -mt-6 pt-6">
//             <View className="flex-col px-5">
//               <View className="flex-row">
//                 <View className="rounded-full w-28 h-6  border-solid border-2 border-yellow">
//                   <View className="flex">
//                     <BoxDetailresto 
//                     category={cuisine}
//                     />
//                   </View>
//                 </View>
//                 <TouchableOpacity
//                   className="left-52"
//                   onPress={() => navigation.navigate("Bookmark")}>
//                   <Ionicons
//                     name="bookmark-outline"
//                     size={25}
//                     color="#FFE500"
//                   />
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   onPress={() => {
//                     toggleBookmark({ title, street, cuisine }, bookmarkedRestaurants, setBookmarkedRestaurants);
//                     navigation.navigate('Bookmark', {
//                       title: title,
//                       distance: distance,
//                       street: street
//                     });
//                   }}
//                   className="left-52"
//                 >
//                   <Ionicons
//                     name={bookmarkedRestaurants.some((r) => r.title === title) ? 'star' : 'star-outline'}
//                     size={20}
//                     color="yellow"
//                   />
//                 </TouchableOpacity>
//               </View>
//               <BoxDetailresto 
//               title={title}
//               address={street}
//               />

//               <ScrollView horizontal={true}>
//                 <BoxLocResto 
//                 distance={distance}
//                 rating={rate}
//                 totalReviews={2359}
//                 open_hour="08.00-21.00"
//                 range_harga="20rb-50rb"
//                 />
//               </ScrollView>

//               <View className="flex-row items-center justify-between mt-8">
//                 <Text className="text-black text-xl font-medium">
//                   Customer Reviews
//                 </Text>
//                 <TouchableOpacity onPress={() => navigation.navigate("review")}>
//                   <Text className="text-gray font-normal text-sm">
//                     See More
//                   </Text>
//                 </TouchableOpacity>
//               </View>

//               {/* komen */}
//               <ScrollView horizontal={true}>
//                 <View className="flex flex-row">
//                   {/* review 1 */}
//                   <BoxRestoCustomerReview
//                     imageSource={require("../../assets/nopic.png")}
//                     name="Keisya Nabila"
//                     cust_rating={4.9}
//                     cust_review="Saya sungguh menikmati pengalaman rasa yang luar biasa ketika pertama kali menyentuh lidah saya."
//                   />
//                   {/* review 2 */}
//                   <BoxRestoCustomerReview
//                     imageSource={require("../../assets/nopic.png")}
//                     name="Nathania Ellirica"
//                     cust_rating={4.5}
//                     cust_review=" Saya bisa merasakan kedalaman dan kompleksitas cita rasa, memberikan penghormatan kepada bahan-bahan dasar yang digunakan."
//                   />

//                   {/* review 3 */}
//                   <BoxRestoCustomerReview
//                     imageSource={require("../../assets/nopic.png")}
//                     name="Annisa Rahmapuri"
//                     cust_rating={4.7}
//                     cust_review="Rasanya lebih dari sekadar memenuhi kebutuhan fisik,makanan ini menjadi perjalanan sensorik dan emosional yang memikat."
//                   />
//                 </View>
//               </ScrollView>

//               {/* kolom */}
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//     // </Background>
//   );
// }

import * as React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import BoxDetailresto from "../components/Box/BoxDetailresto";
import BoxLocResto from "../components/Box/BoxLocResto";
import BoxRestoCustomerReview from "../components/Box/BoxRestoCustomerReview";

export default function Restaurantpage({ route, navigation }) {
  const { title, distance, street, rate, imageUrl, cuisine} = route.params;
  return (
    // <Background>
    <View>
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: imageUrl }}
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

             {/* <View className="absolute -top-9 rounded-full border-solid border-white border-8 bg-white left-[152px]">
             <BoxDetailresto 
             imageSource={require("../../assets/bkicon.png")}
             />
            </View> */}

            <View className="flex-col px-5">
              <View className="flex-row">
                <View className="rounded-full w-28 h-6  border-solid border-2 border-yellow">
                  <View className="flex">
                    {/* <Text className="px-1 text-[9px] font-bold text-center rounded-md my-2 text-[#DAA000]">
                      Western Cuisine
                    </Text> */}
                    <BoxDetailresto 
                    category={cuisine}
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
              title={title}
              address={street}
              />

              <ScrollView horizontal={true}>
                <BoxLocResto 
                distance={distance}
                rating={rate}
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
                    cust_review="Saya sungguh menikmati pengalaman rasa yang luar biasa ketika pertama kali menyentuh lidah saya."
                  />
                  {/* review 2 */}
                  <BoxRestoCustomerReview
                    imageSource={require("../../assets/nopic.png")}
                    name="Nathania Ellirica"
                    cust_rating={4.5}
                    cust_review=" Saya bisa merasakan kedalaman dan kompleksitas cita rasa, memberikan penghormatan kepada bahan-bahan dasar yang digunakan."
                  />

                  {/* review 3 */}
                  <BoxRestoCustomerReview
                    imageSource={require("../../assets/nopic.png")}
                    name="Annisa Rahmapuri"
                    cust_rating={4.7}
                    cust_review="Rasanya lebih dari sekadar memenuhi kebutuhan fisik,makanan ini menjadi perjalanan sensorik dan emosional yang memikat."
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
