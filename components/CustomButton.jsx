import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  containerStyle,
  textStyle,
  handlePress,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`${containerStyle} ${
        isLoading ? "opacity-50" : ""
      } bg-black justify-center items-center`}
      onPress={handlePress}
      disabled={isLoading}
      activeOpacity={0.7}>
      <Text
        className={`${textStyle} text-[#F2F2F2] flex justify-center items-center`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
