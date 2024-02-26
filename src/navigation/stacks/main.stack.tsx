import React from "react";


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/main";
import Chat from "../screens/main/chat";
import Friends from "../screens/main/friends";
import Notifications from "../screens/main/notifications";
import More from "../screens/main/more";

const Tab = createBottomTabNavigator();

const MainStack = () => {
 
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#F5F5F5",
          borderTopWidth: 0,
          height: 65,
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="friends" component={Friends} />
      <Tab.Screen name="chat" component={Chat} />
      <Tab.Screen name="notifications" component={Notifications} />
      <Tab.Screen name="more" component={More} />
      
    </Tab.Navigator>
  );
};

export default MainStack;
