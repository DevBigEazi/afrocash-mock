import { View, Text, Image } from "react-native";
import React from "react";
import { icons } from "../constants";
import CustomButton from "./CustomButton";

const BalanceCards = ({ title, btnTitle, balance, details, stats }) => {
  return (
    <View className="bg-white w-[350px] h-full mr-2 px-3.5 py-3.5 rounded-xl border border-gray-100 justify-start items-start space-y-1">
      <View className="flex-row gap-2 justify-start items-center mb-7">
        <Text className="text-gray-400 text-sm font-imedium">
          Funding Balance
        </Text>
        <Image source={icons.eye} resizeMode="contain" className="h-5 w-5" />
      </View>
      <View className="flex-row w-full gap-2 justify-between items-center mb-7">
        <Text className="text-xl text-black font-ibold">$0.00</Text>
        <Image source={icons.file} resizeMode="conatain" />
      </View>
      <View className="flex-row w-full gap-2 justify-between items-center">
        <CustomButton
          title="Deposit"
          containerStyle="w-[150px] h-[45px] rounded-xl"
        />
        <CustomButton
          title="Withdraw"
          containerStyle="w-[150px] h-[45px] rounded-xl"
        />
      </View>
    </View>
  );
};

export default BalanceCards;
