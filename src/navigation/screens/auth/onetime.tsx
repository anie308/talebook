import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Logo from "@/assets/svg/talelogo.svg";
import { toast } from "@backpackapp-io/react-native-toast";
import { useForgotMutation, useResetMutation } from "@/services/routes/auth";

const OnetimePassword = ({ route }: any) => {
  const { email: passedEmail } = route?.params;
  const [forgot] = useForgotMutation();
  const [reset] = useResetMutation();
  const navigation = useNavigation();

  const [form, setForm] = React.useState({
    code: "",
    email: "",
    password: "",
  });

  const handleFormChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const resendCode = async () => {
    try {
      const res = await forgot({ email: passedEmail }).unwrap();
      toast.success(`${res.message}`);
      console.log(res);
    } catch (error: Error | any) {
      toast.error(`${error.data.message}`);
      console.log(error);
    }
  };

  const handleReset = async () => {
    try {
      const res = await reset(form).unwrap();
      toast.success(`${res.message}`);
      navigation.navigate("login");
      console.log(res);
    } catch (error: Error | any) {
      toast.error(`${error.data.message}`);
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <StatusBar style="light" backgroundColor="#0B032D" />
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
        <View className="mt-[5%] flex-col items-center justify-center w-full px-[20px]">
          <Text className="text-start w-full mt-[3%]  font-Rmedium text-[17px]">
            Verify and Reset Password
          </Text>
          <Text className="font-Rregular w-full text-start">
            We have sent a secret five digit code to your email:
            nelson315@gmail.com
          </Text>
          <View className="mt-[10%] flex-col space-y-[5%] w-full">
            <View>
              <Text className="font-Rmedium text-[14px]">Code</Text>
              <TextInput
                onChangeText={(text) => handleFormChange("code", text)}
                className="border w-full p-[10px] mt-[5px] border-border rounded-[4px] font-Rregular text-[12px]"
                placeholder="123456"
              />
            </View>
            <View>
              <Text className="font-Rmedium text-[14px]">Email</Text>
              <TextInput
                onChangeText={(text) => handleFormChange("email", text)}
                className="border w-full p-[10px] mt-[5px] border-border rounded-[4px] font-Rregular text-[12px]"
                placeholder="123456"
              />
            </View>
            <View>
              <Text className="font-Rmedium text-[14px]">New Password</Text>
              <TextInput
                onChangeText={(text) => handleFormChange("password", text)}
                className="border w-full p-[10px] mt-[5px] border-border rounded-[4px] font-Rregular text-[12px]"
                placeholder="123456"
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={handleReset}
            className="w-full h-[50px] rounded-full items-center justify-center flex-row bg-primary p-[8px] mt-[8%]"
          >
            <Text className="font-Rmedium text-white">Continue</Text>
          </TouchableOpacity>
          <View className="flex-row font-Rregular mt-[5%]">
            <Text className="text-[#000D19] font-Rregular text-[12px]">
              Didn’t receive code
            </Text>
            <TouchableOpacity onPress={resendCode} className="ml-[5px]">
              <Text className="text-primary font-Rregular text-[12px]">
                Resend
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnetimePassword;
