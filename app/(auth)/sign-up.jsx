import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="h-full mt-5">
      <ScrollView>
        <View className="flex-1 justify-start items-start p-4">
          <Text className="text-black text-2xl font-isemibold">
            Create account
          </Text>

          <Text className="text-black text-sm font-ilight">
            Have an account?{" "}
            <Link href="/sign-in">
              <Text className="underline">Login</Text>
            </Link>{" "}
            <Link href="/confirm-email">
              <Text className="underline">ConfirmEmail...</Text>
            </Link>
          </Text>

          <FormField
            title={"Email Address"}
            otherStyles="mt-8"
            placeholder="example@gmail.com"
            handleChangeText={(e) =>
              setForm({
                ...form,
                email: e,
              })
            }
            value={form.email}
          />
          <FormField
            title={"Password"}
            otherStyles="mt-5"
            placeholder="L37sH@vEsumfUN!;-"
            handleChangeText={(e) =>
              setForm({
                ...form,
                password: e,
              })
            }
            value={form.password}
          />

          {/* To specify condition... */}
          <Text className="mt-5 text-red-500 text-sm font-iregular">
            Password must be a minimum of 8 characters. Include one letter, and
            one number or symbol.
          </Text>

          <Text className="mt-[276px] text-black text-xs font-iregular text-center">
            By continuing, you agree to the Afrocash Platform Terms &
            conditions. Rewards Policy,and Privacy Policy.
          </Text>
          <CustomButton
            containerStyle="mt-4 w-full rounded-lg h-16"
            title="Continue ￫"
            textStyle="text-lg font-imedium"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
