import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ItemWithIconArrow({ children, title }) {
    return (
        <View className="flex flex-row items-center justify-between px-3 py-2.5">
            <View className="flex flex-row gap-x-3 items-center">
                {children}
                <Text className="text-pale-sky">{title}</Text>
            </View>
            <Ionicons
                name="chevron-forward"
                size={20}
                color="#9CA3AF"
            />
        </View>
    )
}