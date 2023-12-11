import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const BoxRestoCustomerReview = ({ imageSource, name, cust_review, cust_rating, isCameraImage, onDelete }) => {
  return (
    <View style={{ margin: 10, borderRadius: 10, overflow: 'hidden', backgroundColor: 'white' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 }}>
        <View style={{ borderRadius: 50, overflow: 'hidden' }}>
          <Image source={imageSource} style={{ height: 56, width: 56 }} />
        </View>
        <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold', marginLeft: 10 }}>
          {name}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
          <Entypo name="star" size={17} color="#FDC83D" />
          <Text style={{ fontSize: 12, marginLeft: 5, color: '#9CA3AF' }}>
            {cust_rating}
          </Text>
        </View>
      </View>
      <View style={{ margin: 10, alignItems: 'center' }}>
        <Text style={{ fontSize: 12, textAlign: 'justify' }}>
          {cust_review}
        </Text>
        {isCameraImage && (
          <Image source={{ uri: isCameraImage }} style={{ height: 100, width: 100, marginTop: 10 }} />
        )}
      </View>
      <TouchableOpacity onPress={onDelete} style={{ alignSelf: 'flex-end', marginTop: 10, marginRight: 10 }}>
        <Text style={{ color: 'red' }}>Delete</Text>
        
      </TouchableOpacity>
    </View>
  );
};

export default BoxRestoCustomerReview;
