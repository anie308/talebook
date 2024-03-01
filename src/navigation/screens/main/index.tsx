import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import PostList from "@/components/post/PostList";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" backgroundColor="white" />
      <View className=" p-[15px_20px]  flex-row items-center justify-between">
        <Text className="font-Rbold text-[18px]">Feed</Text>
        <View className="flex-row justify-end items-center ">
        <TouchableOpacity className="h-[40px] rounded-[8px] w-[130px] bg-primary items-center justify-center">
          <Text className="font-Rregular text-white">Create Post</Text>
        </TouchableOpacity>
      </View>
      </View>

      <View className="border-t border-[#DFE2E8] px-[20px]">
      
      <View className=" flex-col items-center justify-center ">
        <PostList />
      </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
