import { router } from "expo-router";
import { useState } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Directions,
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import CustomButton from "../components/CustomButton";

const onboardingSteps = [
  {
    image: require("../assets/images/onboard-1.png"),
    subtitle: "Do money right",
    description: "Grow and manage your money all in one place.",
    btnTitle: "Next",
  },
  {
    image: require("../assets/images/onboard-2.png"),
    subtitle: "Investing made simple",
    description:
      "Trade stocks, ETFs and crypto, or put your investments in autopilot.",
    btnTitle: "Next",
  },
  {
    image: require("../assets/images/onboard-3.png"),
    subtitle: "Earn as you save",
    description:
      "Earn more interest with no monthly fees and unlimited free transctions. Your money is yours anytime",
    btnTitle: "Get Started",
  },
];

export default function App() {
  const [screenIndex, setScreenIndex] = useState(0);

  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;

    if (isLastScreen) {
      router.push("/home"); //sign-up
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const onGoback = () => {
    const isFirstScreen = screenIndex === 0;

    if (!isFirstScreen) {
      setScreenIndex(screenIndex - 1);
    }
  };

  const swipe = Gesture.Simultaneous(
    Gesture.Fling()
      .direction(Directions.LEFT)
      .onEnd(() => {
        const isLastScreen = screenIndex === onboardingSteps.length - 1;
        if (!isLastScreen) {
          onContinue();
        }
      }),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onGoback)
  );

  return (
    <GestureHandlerRootView>
      <SafeAreaView className="h-full bg-primary mt-5">
        {onboardingSteps.map((step, index) => (
          <View
            key={index}
            className="min-h-[95vh] w-full justify-center items-center px-4"
            style={{ display: screenIndex === index ? "flex" : "none" }}>
            <GestureDetector gesture={swipe}>
              <View className="h-full w-full justify-center items-center">
                <Text className="text-3xl font-pmregular mb-8">Afrocash</Text>
                <Image
                  source={data.image}
                  width={300}
                  height={300}
                  resizeMode="contain"
                  className="mb-10"
                />
                <Text className="text-3xl font-pmregular mb-5 text-center">
                  {data.subtitle}
                </Text>
                <Text className="text-sm text-center font-iregular mb-20">
                  {data.description}
                </Text>

                <View className="items-center justify-center w-full">
                  <CustomButton
                    title={data.btnTitle}
                    handlePress={onContinue}
                  />
                </View>
              </View>
            </GestureDetector>
          </View>
        ))}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
