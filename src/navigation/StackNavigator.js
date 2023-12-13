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

import ReviewSeemore from "../screens/ReviewSeemore";
import Review2 from "../screens/Review2";

import Getstarted from "../screens/Getstarted";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

import Isibookmark from "../screens/Isibookmark";
import Bookmark from "../screens/Bookmark";

import Splash1 from "../screens/Splash1";
import Splash2 from "../screens/Splash2";
import Splash3 from "../screens/Splash3";


const RootStack = createNativeStackNavigator();

function StackNavigator() {
    return (
        <RootStack.Navigator initialRouteName="splash1">
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
                    name="Indonesianpage"
                    component={Indonesianpage}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="Japanesepage"
                    component={Japanesepage}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="Westernpage"
                    component={Westernpage}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="Koreanpage"
                    component={Koreanpage}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="Bakerypage"
                    component={Bakerypage}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="Cafepage"
                    component={Cafepage}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="Dessertpage"
                    component={Dessertpage}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="review"
                    component={ReviewSeemore}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="review2"
                    component={Review2}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="start"
                    component={Getstarted}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="login"
                    component={Login}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="signup"
                    component={Signup}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="isibookmark"
                    component={Isibookmark}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="Bookmark"
                    component={Bookmark}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="splash1"
                    component={Splash1}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="splash2"
                    component={Splash2}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="splash3"
                    component={Splash3}
                />
            </RootStack.Group>
        </RootStack.Navigator>
    );
}

export default StackNavigator;