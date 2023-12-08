import * as React from "react";
// import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View } from 'react-native';
import { useIsFocused } from "@react-navigation/native"; 


// Screens
import Explore from "../screens/Explore";
import Profile from "../screens/Profile";
import Bookmark from "../screens/Bookmark";

// Screen names
const bookmarkFitur = "Bookmark";
const exploreFitur = " ";
const profileFitur = "Profile";


const Tab = createBottomTabNavigator();

function ExploreTab({ size }) {
  const isFocused = useIsFocused();

  return (
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: isFocused ? "#FEDB71" : "grey",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -10
      }}
    >
      <Ionicons name="ios-globe-outline" size={30} color={isFocused ? "white" : "white"} />
    </View>
  );
}


function MainContainer() {
  return (
      <Tab.Navigator
        initialRouteName={exploreFitur}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === bookmarkFitur) {
              iconName = focused ? "bookmark" : "bookmark-outline";
            } else if (rn === exploreFitur) {
              // iconName = focused ? "ios-globe" : "ios-globe-outline";
              // return <CourseTab focused={focused} size={size} />;
              return <ExploreTab size={size} />;
            } else if (rn === profileFitur) {
              iconName = focused ? "person" : "person-outline";
            }

            return (
              <Ionicons
                name={iconName}
                size={size}
                color={focused ? "#FEDB71" : "grey"}
              />
            );
          },
          tabBarActiveTintColor: "#FEDB71",
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            color: "#FEDB71", // Set the text color for the tab label
          },
          headerShown: false,
          tabBarStyle: {
            height: 60,
            paddingBottom: 5,
          },
        })}
      >
        <Tab.Screen name={bookmarkFitur} component={Bookmark} />
        <Tab.Screen name={exploreFitur} component={Explore} />
        <Tab.Screen name={profileFitur} component={Profile} />
      </Tab.Navigator>
  );
}

export default MainContainer;
