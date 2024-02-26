import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Logo from "@/assets/svg/talelogo.svg";
import { toast } from "@backpackapp-io/react-native-toast";
import { useForgotMutation } from "@/services/routes/auth";

const ForgortPassword = () => {
  const navigation = useNavigation();
  const [forgot] = useForgotMutation();

  const [email, setEmail] = React.useState("");

  const handleSubmit = async () => {
    try {
      console.log({ email });
      const res = await forgot({ email }).unwrap();
      toast.success(`${res.message}`);
      console.log(res);
      navigation.navigate("onetime", { email});
    } catch (error: Error | any) {
      toast.error(`${error.data.message}`);
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <View className="mt-[5%]">
        <View className="w-full flex-row items-center justify-between px-[20px]">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text className="font-Rregular bg-gray-300 p-[2px_8px] text-[10px] rounded-full">
              Back
            </Text>
          </TouchableOpacity>
          <View className="grow items-center">
            <Logo width={200} />
          </View>
        </View>
        <View className=" flex-col items-center justify-center w-full px-[20px]">
          <Text className="w-full mt-[3%] font-Rmedium text-[17px] text-start">
            Reset account password
          </Text>
          <Text className="w-full mt-[3%] font-Rregular text-start">
            Enter the email address used to create your Ajis account and we’ll
            send you a link to reset your password
          </Text>
          <View className="mt-[10%] flex-col space-y-[5%] w-full">
            <View>
              <Text className="font-Rmedium text-[14px]">
                Enter Email Address
              </Text>
              <TextInput
                onChangeText={(text) => setEmail(text)}
                className="border w-full p-[10px] mt-[5px] border-border rounded-[4px] font-Rregular text-[12px]"
                placeholder="nelsonolasoji@gmail.com "
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={handleSubmit}
            // onPress={() => navigation.navigate("onetime")}
            className="w-full h-[50px] rounded-full items-center justify-center flex-row bg-primary p-[8px] mt-[8%]"
          >
            <Text className="font-Rmedium text-white">Continue</Text>
          </TouchableOpacity>
          <View className="flex-row font-Pregular mt-[5%]">
            <Text className="text-[#000D19] font-Rregular text-[12px]">
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("login")}
              className="ml-[5px]"
            >
              <Text className="text-primary font-Rregular text-[12px]">
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgortPassword;
