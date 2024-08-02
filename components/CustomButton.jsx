import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({ title, containerStyle, handlePress, isLoading }) => {
  return (
    <TouchableOpacity
      className={`${containerStyle} ${
        isLoading ? "opacity-50" : ""
      } bg-black w-full rounded-lg h-16 justify-center items-center`}
      onPress={handlePress}
      disabled={isLoading}
      activeOpacity={0.7}>
      <Text className="text-[#F2F2F2] text-lg font-imedium flex justify-center items-center">
        {title} <Text>￫</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
