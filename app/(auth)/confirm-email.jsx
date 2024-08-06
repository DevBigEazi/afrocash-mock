import { Link } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";

const ConfirmEmail = () => {
  const [form, setForm] = useState({
    emailCode: "",
  });

  return (
    <SafeAreaView className="h-full mt-5">
      <ScrollView>
        <View className="max-h-full w-full justify-start items-start p-4 mb-8">
          <Text className="text-black text-2xl font-isemibold">
            Confirm your email
          </Text>

          <Text className="text-black text-sm font-ilight">
            We sent a code to <Text>{"example@gmail.com"}</Text>.{" "}
            <Link href="/confirm-email">
              <Text className="underline">Change</Text>
            </Link>
          </Text>

          <FormField
            title={"Verification code"}
            otherStyles="mt-8"
            handleChangeText={(e) =>
              setForm({
                ...form,
                emailCode: e,
              })
            }
            value={form.email}
          />

          {/* To specify condition... */}
          <Text className="mt-5 text-black text-sm font-iregular">
            Didn't get the email? Check your spam/junk or resend it.
          </Text>
          <Text className="mt-5 text-black text-xs font-iregular">
            Resend email in 03:45
          </Text>

          <CustomButton
            containerStyle="mt-[400px] w-full rounded-lg h-16"
            title="Continue ￫"
            textStyle="text-lg font-imedium"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConfirmEmail;
