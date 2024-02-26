import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { removeToken } from '@/services/redux/auth';

const More = () => {
    const dispatch = useDispatch();
    const logout = () => {
      setTimeout(() => {
        dispatch(removeToken());
      }, 1000);
    };
  
  return (
    <View className="p-[20px]">
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ipsa
        vel ab sapiente quia dolore placeat facilis sed, facere minus velit
        mollitia illum veritatis ipsum asperiores repellat esse praesentium
        voluptatibus.
      </Text>
      <TouchableOpacity className="bg-primary items-center justify-center h-[40px] mt-[40px]">
        <Text onPress={logout}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default More