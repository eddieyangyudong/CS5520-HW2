import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Button, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MyButton } from "../components/MyButton";
import { colors, headerStyle } from "../helper";
import EntriesList from "../components/EntriesList";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AllEntries from "./AllEntries";
import OverLimitEntrires from "./OverLimitEntrires";

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
  const [calories, setCalories] = useState([]);

  const headerRight = () => (
    <MyButton onPress={() => 
      navigation.navigate("Add")} 
      text="+" 
      type="text" />
  );
  const screenOptions = {
    ...headerStyle,
    headerRight,
    tabBarStyle: {
      backgroundColor: colors.PURPLE,
    },
    tabBarActiveTintColor: colors.LIGHT_BLUE,
    tabBarInactiveTintColor: colors.ORANGE,
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="All Entries"
        component={AllEntries}
        options={{
          headerTitle: "All Entries",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bread-slice"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Over-limit Entries"
        component={OverLimitEntrires}
        options={{
          headerTitle: "Over-limit Entries",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="exclamation"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};


export default Home;
