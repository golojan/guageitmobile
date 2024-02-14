import React from "react";
import { Text, View, SafeAreaView } from "@/components/Themed";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-paper";
import { Image, Pressable } from "react-native";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-gray px-6 pt-8 space-y-5">
      <StatusBar translucent />
      <View>
        <View className="w-full mt-3 items-center">
          <Image
            source={require("../../../assets/images/lock.png")}
            className="w-full h-32 self-center mb-4"
            style={{ resizeMode: "contain" }}
          />
          <Text className="text-4xl font-bold text-center">
            Login with your Staff Code
          </Text>
          <Text className="text-xl text-center text-gray-600 font-bold">
            The code sent to your email
          </Text>
        </View>
      </View>

      <View className="w-full space-y-4 ">
        <TextInput
          mode="outlined"
          label="Staff Code"
          keyboardType="phone-pad"
          placeholder="e.g 123456"
          outlineColor="gray"
          activeOutlineColor="rgb(147 51 234)"
          placeholderTextColor="rgb(147 51 234)"
          className="h-14 bg-gray-50 px-2"
          outlineStyle={{ borderRadius: 50 }}
        />

        <Pressable
          onPress={() => router.push("/(tabs)")}
          className="bg-purple-600 !rounded-full w-fit h-14 items-center justify-center"
        >
          <Text className="text-white font-medium text-lg">Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;