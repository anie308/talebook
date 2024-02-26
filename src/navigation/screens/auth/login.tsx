import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Logo from "@/assets/svg/talelogo.svg";
import { useLoginMutation } from "@/services/routes/auth";
import { toast } from "@backpackapp-io/react-native-toast";
import { useDispatch } from "react-redux";
import { setToken } from "@/services/redux/auth";

const Login = () => {
  const [login, {isLoading}] = useLoginMutation();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [form, setForm] = React.useState({
    username: "",
    password: "",
  });

  const handleFormChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      console.log(form);
      const res = await login(form).unwrap();
      console.log(res);
      setTimeout(() => {
        dispatch(setToken(res.token));
      }, 2000);
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
          {/* <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text className="font-Rregular bg-gray-300 p-[2px_8px] text-[10px] rounded-full">
              Back
            </Text>
          </TouchableOpacity> */}
          <View className="grow items-center">
            <Logo width={200} />
          </View>
        </View>
        <View className="mt-[5%] flex-col items-center justify-center w-full px-[20px]">
          <Text className=" text-start w-full mt-[3%] font-Rmedium text-[20px]">
            Login
          </Text>
          <View className="mt-[6%] flex-col space-y-[5%] w-full">
            <View>
              <Text className="font-Rmedium text-[14px]">Username</Text>
              <TextInput
                onChangeText={(text) => handleFormChange("username", text)}
                className="border w-full p-[10px] mt-[5px] border-border rounded-[4px] font-Rregular text-[12px]"
                placeholder="nelsonolasoji@gmail.com "
              />
            </View>

            <View>
              <Text className="font-Rmedium text-[14px]"> Passsword</Text>
              <TextInput
                secureTextEntry={true}
                onChangeText={(text) => handleFormChange("password", text)}
                className="border w-full p-[10px] mt-[5px] border-border rounded-[4px] font-Rregular text-[12px]"
                placeholder="Enter Password"
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={handleSubmit}
            disabled={isLoading && true}
            className="w-full h-[50px] disabled:bg-gray-400 rounded-full items-center justify-center flex-row bg-primary p-[8px] mt-[10%]"
          >
            <Text className="font-Rmedium text-white">Login</Text>
          </TouchableOpacity>
          <View className="flex-row items-center justify-between w-full mt-[3%]">
            <TouchableOpacity
              onPress={() => navigation.navigate("register")}
              className="ml-[5px]"
            >
              <Text className="text-primary font-Rregular text-[12px]">
                Create account
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
           
              onPress={() => navigation.navigate("forgot")}
              className="ml-[5px]"
            >
              <Text className="text-primary  font-Rregular text-[12px]">
                Forgot password
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
