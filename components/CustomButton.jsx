import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({ title, containerStyle, handlePress, isLoading }) => {
  return (
    <TouchableOpacity
      className={`${containerStyle} ${
        isLoading ? "opacity-50" : ""
      } bg-black w-full rounded-lg h-10 justify-center items-center`}
      onPress={handlePress}
      disabled={isLoading}
      activeOpacity={0.7}>
      <Text className="text-[#F2F2F2] text-sm font-imedium">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
