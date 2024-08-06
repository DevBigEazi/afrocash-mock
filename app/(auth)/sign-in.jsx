import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="h-full mt-5">
      <ScrollView>
        <View className="flex-1 justify-start items-start p-4">
          <Text className="text-black text-2xl font-isemibold">Login</Text>

          <Text className="text-black text-sm font-ilight">
            Don't have an account?{" "}
            <Link href="/sign-up">
              <Text className="underline"> Sign up</Text>
            </Link>{" "}
            <Link href="/forgot-password">
              <Text className="underline">Forgotpwd</Text>
            </Link>
          </Text>

          <FormField
            title={"Your email"}
            otherStyles="mt-8"
            handleChangeText={(e) =>
              setForm({
                ...form,
                email: e,
              })
            }
            value={form.email}
          />
          <FormField
            title={"Your password"}
            otherStyles="mt-5"
            handleChangeText={(e) =>
              setForm({
                ...form,
                password: e,
              })
            }
            value={form.password}
          />

          {/* To specify condition... */}
          <Text className="mt-5 text-red-600 text-sm font-iregular">
            Incorrect email or password
          </Text>

          <CustomButton containerStyle="mt-4" title="Login" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
