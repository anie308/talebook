import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Logo from "@/assets/svg/talelogo.svg";
import { useRegisterMutation } from "@/services/routes/auth";
import { toast } from '@backpackapp-io/react-native-toast';
const Register = () => {
  const [register] = useRegisterMutation();
  const navigation = useNavigation();

  const [form, setForm] = React.useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const handleFormChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      console.log(form);
      const res = await register(form).unwrap();
      console.log(res);
    } catch (error : Error | any) {
      toast.error(`${error.data.message}`)
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <StatusBar style="dark"  />

      
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
          <Text className="mt-[3%] w-full text-start font-Rregular text-[20px]">
            Create an account
          </Text>
          <View className="mt-[6%] flex-col space-y-[5%] w-full">
            <View className="flex-row w-full space-x-[20px]">
              <View className="flex-1">
                <Text className="font-Rmedium text-[14px]">First Name</Text>
                <TextInput
                  onChangeText={(text) => handleFormChange("firstname", text)}
                  className="border w-full p-[10px] mt-[5px] border-border rounded-[4px] font-Rregular text-[12px]"
                  placeholder="John"
                />
              </View>
              <View className="flex-1">
                <Text className="font-Rmedium text-[14px]">Last Name</Text>
                <TextInput
                  onChangeText={(text) => handleFormChange("lastname", text)}
                  className="border w-full p-[10px] mt-[5px] border-border rounded-[4px] font-Rregular text-[12px]"
                  placeholder="Doe"
                />
              </View>
            </View>
            <View>
              <Text className="font-Rmedium text-[14px]">Username</Text>

              <TextInput
                onChangeText={(text) => handleFormChange("username", text)}
                className="border w-full p-[10px] mt-[5px] border-border rounded-[4px] font-Rregular text-[12px]"
                placeholder="@username"
              />
            </View>
            <View>
              <Text className="font-Rmedium text-[14px]">Email Address</Text>
              <TextInput
                onChangeText={(text) => handleFormChange("email", text)}
                className="border w-full p-[10px] mt-[5px] border-border rounded-[4px] font-Rregular text-[12px]"
                placeholder="nelsonolasoji@gmail.com "
              />
            </View>

            <View>
              <Text className="font-Rmedium text-[14px]">Enter Passsword</Text>
              <TextInput
                onChangeText={(text) => handleFormChange("password", text)}
                secureTextEntry={true}
                className="border w-full p-[10px] mt-[5px] border-border rounded-[4px] font-Rregular text-[12px]"
                placeholder="Enter Password"
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={handleSubmit}
            className="w-full h-[50px] rounded-full items-center justify-center flex-row bg-primary p-[8px] mt-[8%]"
          >
            <Text className="font-Rmedium text-white">Create an account</Text>
          </TouchableOpacity>
          <View className="flex-row font-Pregular mt-[3%]">
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

export default Register;
