import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator from "./TabNavigator";

import Search from "../screens/Search";
import Restaurantpage from "../screens/Restaurantpage";
import Maps from "../screens/Maps";

import SeeMoreTopRated from "../screens/SeeMoreTopRated";
import SeeMoreNearMe from "../screens/SeeMoreNearMe";

import Indonesianpage from "../screens/Indonesianpage";
import Japanesepage from "../screens/Japanesepage";
import Westernpage from "../screens/Westernpage";
import Koreanpage from "../screens/Koreanpage";
import Bakerypage from "../screens/Bakerypage";
import Cafepage from "../screens/Cafepage";
import Dessertpage from "../screens/Dessertpage";

const RootStack = createNativeStackNavigator();

function StackNavigator() {
    return (
        <RootStack.Navigator initialRouteName="main">
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="main"
                    component={TabNavigator}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="search"
                    component={Search}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="restaurantpage"
                    component={Restaurantpage}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="maps"
                    component={Maps}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="seemoretoprated"
                    component={SeeMoreTopRated}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="seemorenearme"
                    component={SeeMoreNearMe}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="indonesianpage"
                    component={Indonesianpage}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="japanesepage"
                    component={Japanesepage}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="westernpage"
                    component={Westernpage}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="koreanpage"
                    component={Koreanpage}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="bakerypage"
                    component={Bakerypage}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="cafepage"
                    component={Cafepage}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="dessertpage"
                    component={Dessertpage}
                />
            </RootStack.Group>
        </RootStack.Navigator>
    );
}

export default StackNavigator;
