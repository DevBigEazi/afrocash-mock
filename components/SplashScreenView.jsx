import { View, Text, Image } from "react-native";
import { images } from "../constants";

const SplashScreenView = () => {
  return (
    <View className="flex-1 bg-primary justify-center">
      <Text className="text-4xl font-pmregular mb-5 text-black text-center">
        AFROCASH
      </Text>
      <View className="items-end">
        <Image source={images.splash} resizeMode="contain" />
      </View>
    </View>
  );
};

export default SplashScreenView;
