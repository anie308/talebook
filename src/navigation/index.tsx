import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from './stacks/auth.stack';
import { useSelector } from 'react-redux';
import MainStack from './stacks/main.stack';



const Route = () => {
  const token = useSelector((state: any) => state.auth.token)
  console.log(token, "token")
  return (
    <NavigationContainer>
      {
        token ? <MainStack/> : <AuthStack/>
      }
     
    </NavigationContainer>
  )
}

export default Route