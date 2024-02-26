import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/login";
import ForgortPassword from "../screens/auth/forgot-password";
import Register from "../screens/auth/register";
import OnetimePassword from "../screens/auth/onetime";

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="forgot" component={ForgortPassword} />
      <Stack.Screen name="onetime" component={OnetimePassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
