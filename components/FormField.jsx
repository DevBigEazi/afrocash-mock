import { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { icons } from "../constants";

const FormField = ({
  otherStyles,
  title,
  value,
  handleChangeText,
  placeholder,
  ...otherProps
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-3 w-full ${otherStyles}`}>
      {/* Label */}
      <Text className="text-black text-lg font-imedium">{title}</Text>

      {/* Input Field */}
      <View className="w-full border-2 border-[#B7B7B7] h-14 flex-row items-center px-3 rounded-xl">
        <TextInput
          className="w-full text-base text-gray flex-1 font-imedium"
          placeholder={placeholder}
          placeholderTextColor="#B7B7B7"
          value={value}
          onChangeText={handleChangeText}
          secureTextEntry={
            (title === "Password" || title === "Your password") && !showPassword
          }
        />

        {(title === "Password" || title === "Your password") && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeCrossed}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
