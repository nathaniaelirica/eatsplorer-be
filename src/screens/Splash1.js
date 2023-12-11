import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
// import LogoPNG from '../../../assets/logo.png'
import { useNavigation } from "@react-navigation/native";

export default function Splash1() {
    const navigation = useNavigation();

    React.useEffect(() => {
        setTimeout(() => {
            navigation.navigate('splash2')
        }, 2000)
    }, []);

    return (
        <SafeAreaView className="flex flex-col items-center justify-center flex-1 bg- bg-[#FEDB71] gap-y-2">
           <Image
            source={require("../../assets/logo2.png")}
            className="w-64 h-64 top-0"
          />
            <Text className="mt-4 text-3xl italic font-bold text-[#C66200]">Eatsplorer!</Text>
            <Text className="font-medium text-base text-white">Where Every Bite Tells a Story</Text>
        </SafeAreaView>
    )
}