import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Focus from "../screens/Focus";
import Home from "../screens/Home";
import Lab from "../screens/Lab";
import Profile from "../screens/Profile";
import Colors from "../constants/Colors";
import MyTabBar from "../components/Global/MyTabBar";

const Tab = createBottomTabNavigator();

export default function TabScreens() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Focus" component={Focus} />
      <Tab.Screen name="Lab" component={Lab} />
    </Tab.Navigator>
  );
}