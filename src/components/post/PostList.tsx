import { View, Text, ScrollView, RefreshControl, FlatList } from "react-native";
import React from "react";
import { useGetFeedQuery } from "@/services/routes/posts";
import { useSelector } from "react-redux";
import PostCard from "./PostCard";

const PostList = () => {
  const token = useSelector((state) => state.auth.token);
  console.log(token);
  const { data, isLoading, isSuccess, refetch, error } = useGetFeedQuery({
    token,
  });
  console.log(data?.data);
  const posts = data?.data;

  const onRefresh = async () => {
    await refetch();
  };
  return (
    <View className="w-full py-[20px] ">
      {isLoading && <Text>Loading...</Text>}
      {isSuccess && (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
          data={posts}
          renderItem={({ item }) => (
            <PostCard
              time={item.createdAt}
              image={item?.media?.url}
              author={item.ownerName}
              title={item.title}
              content={item.content}
              key={item.id}
            />
          )}
        />
      )}
      {error && <Text>Error fetching posts</Text>}
    </View>
  );
};

export default PostList;
