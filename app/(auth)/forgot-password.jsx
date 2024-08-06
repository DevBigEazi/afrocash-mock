import { Link } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";

const ForgotPassword = () => {
  const [form, setForm] = useState({
    email: "",
  });

  return (
    <SafeAreaView className="h-full mt-5">
      <ScrollView>
        <View className="max-h-full w-full justify-start items-start p-4 mb-8">
          <Text className="text-black text-2xl font-isemibold">
            Forgot Password
          </Text>

          <Text className="text-black text-sm font-ilight">
            Reset your password to access your account
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

          <CustomButton
            containerStyle="mt-[520px] w-full rounded-lg h-16"
            title="Continue"
            textStyle="text-lg font-imedium"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
