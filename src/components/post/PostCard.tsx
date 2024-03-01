import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import moment from 'moment'
import { Entypo } from '@expo/vector-icons';
import { ReactionBarSelector } from '@charkour/react-reactions';

type PostCardProps = {
  title: string;
  content: string;
  image: string;
  author: string;
  time: string
};


const PostCard = ({ title, content, image, author, time }: PostCardProps) => {
  return (
    <TouchableOpacity className="w-full mb-[40px]">
      <View className="flex-row justify-between items-center">
        <View className="flex-row space-x-[10px]">
          <View className="h-[50px] w-[50px] rounded-full bg-gray-200"></View>
          <View>
            <Text className="font-Rbold text-[14px] capitalize">{author}</Text>
            <Text className="font-Rregular text-[12px]">{
                moment(time).fromNow()
            }</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-[10px] mb-[20px]">
        <Text className="font-Rregular text-[14px] mt-[10px]">{content}</Text>
        {image && (
          <View className="h-[300px] w-full mt-[15px]  rounded-[10px]">
            <Image
              source={{ uri: image }}
              className="h-full w-full rounded-[10px]"
            />
          </View>
        )}
      </View>
     
    </TouchableOpacity>
  );
};

export default PostCard;
