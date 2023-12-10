import React, { useState } from 'react';
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
import { signIn } from "../../functions/functions.js";

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); // New state for success message

  const handleLogin = async () => {
    try {
      const loginResult = await signIn(email, password);

      if (loginResult.user) {
        // Handle login berhasil
        setSuccessMessage('Login successful!');
        navigation.navigate("review2"); // Move the navigation here
      } else {
        setError(`Error: ${loginResult.errorCode} - ${loginResult.errorMessage}`);
      }
    } catch (error) {
      setError(`Error: ${error.message}`);
    }
  };

  return (
    // <LoginBackground>
    <View>
      <ScrollView>
        <View className="relative bg-[#FEDB71]">
          {/* icon back */}
          <View className="flex flex-row m-1 w-full">
            <TouchableOpacity
              className="absolute top-14 left-4"
              onPress={() => navigation.navigate("main")}>
              <Ionicons
                name="arrow-back"
                size={25}
                color="#DAA000"
              />
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center top-48">
            <Image
              source={require("../../assets/login3.png")}
              style={{ width: 300, height: 200 }}
            />
          </View>

          {/* coba */}
          <View
            style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
            className="flex-1 bg-white px-8 pt-8 mt-72 ">
            {/* kolom email dkk */}
            <View className="flex flex-col">
              <View className="form space-y-2">
                <Text className="text-gray-700 ml-4">Email Address</Text>
                <TextInput
                  className="p-4 bg-[#EFF1F3] text-black rounded-2xl mb-3"
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
                <Text className="text-gray-700 ml-4">Password</Text>
                <TextInput
                  className="p-4 bg-[#EFF1F3] text-black rounded-2xl"
                  secureTextEntry
                  placeholder="Password"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />
                {/* Display success message */}
                {successMessage && (
                  <View className="mt-2">
                    <Text style={{ color: 'green' }}>{successMessage}</Text>
                  </View>
                )}

                {/* Display error message */}
                {error && (
                  <View className="mt-2">
                    <Text style={{ color: 'red' }}>{error}</Text>
                  </View>
                )}
                {/* button login */}
                <View className="mt-4">
                  <TouchableOpacity
                    className="mt-4 py-3 bg-[#FFCF00] rounded-xl"
                    onPress={() => {
                      handleLogin();
                    }}>
                    <Text className="text-xl font-bold text-center items-center justify-center text-white">
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="flex-row justify-center">
                  <Text className="text-black font-semibold mt-2">
                    Don't have an account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("signup")}>
                    <Text className="mt-2 ml-1 font-bold text-[#DAA000]">
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
    // </LoginBackground>
  );
}
