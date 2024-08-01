import { Link, router } from "expo-router";
import { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Directions,
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  Pressable,
} from "react-native-gesture-handler";

const onboardingSteps = [
  {
    image: require("../assets/images/onboard-1.png"),
    subtitle: "Do money right",
    description: "Grow and manage your money all in one place.",
    btnTitle: "Next ￫",
  },
  {
    image: require("../assets/images/onboard-2.png"),
    subtitle: "Investing made simple",
    description:
      "Trade stocks, ETFs, and crypto, or put your investments in autopilot.",
    btnTitle: "Next ￫",
  },
  {
    image: require("../assets/images/onboard-1.png"),
    subtitle: "Earn as you save",
    description:
      "Earn more interest with no monthly fees and unlimited free transctions. Your money is yours anytime",
    btnTitle: "Get Started ￫",
  },
];

export default function App() {
  const [screenIndex, setScreenIndex] = useState(0);

  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;

    if (isLastScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  // const onGoback = () => {
  //   const isFirstScreen = screenIndex === 0;

  //   if (isFirstScreen) {
  //     endOnboarding();
  //   } else {
  //     setScreenIndex(screenIndex - 1);
  //   }
  // };

  const endOnboarding = () => {
    setScreenIndex(0);
    router.push("/sign-up");
  };

  const swipe = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue)
    // Gesture.Fling().direction(Directions.RIGHT).onEnd(onGoback)
  );

  return (
    <SafeAreaView className="flex-1 bg-primary items-center justify-center">
      {onboardingSteps.map((step, index) => (
        <View key={index}>
          {/* <GestureHandlerRootView>
            <GestureDetector gesture={swipe}> */}
          <View className="h-full justify-center items-center">
            <Text className="text-3xl font-pmregular mb-8">Afrocash</Text>
            <Image source={data.image} resizeMode="contain" className="mb-10" />
            <Text className="text-3xl font-pmregular mb-5 text-center ">
              {data.subtitle}
            </Text>
            <Text className="text-sm font-iregular mb-24 px-2">
              {data.description}
            </Text>

            <View className="items-center w-full">
              {/* <Button title="Skip" onPress={endOnboarding} /> */}
              <Button title={data.btnTitle} onPress={onContinue} />
            </View>
          </View>
          {/* </GestureDetector>
          </GestureHandlerRootView> */}
        </View>
      ))}
    </SafeAreaView>
  );
}
