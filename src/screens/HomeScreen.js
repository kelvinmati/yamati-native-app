import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Chats from "./Chats";
import Status from "./Status";
import Calls from "./Calls";

const Tab = createMaterialTopTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          color: "red",
        },
      }}
    >
      <Tab.Screen
        name="Chats"
        component={Chats}
        screenOptions={{
          tabBarBadge: 2,
        }}
      />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
};

export default Home;
