import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import SplashScreenView from "../components/SplashScreenView";
import { StatusBar } from "react-native";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Inter_28pt-Thin": require("../assets/fonts/inter/Inter_28pt-Thin.ttf"),
    "Inter_28pt-ExtraLight": require("../assets/fonts/inter/Inter_28pt-ExtraLight.ttf"),
    "Inter_28pt-Light": require("../assets/fonts/inter/Inter_28pt-Light.ttf"),
    "Inter_28pt-Regular": require("../assets/fonts/inter/Inter_28pt-Regular.ttf"),
    "Inter_28pt-Medium": require("../assets/fonts/inter/Inter_28pt-Medium.ttf"),
    "Inter_28pt-SemiBold": require("../assets/fonts/inter/Inter_28pt-SemiBold.ttf"),
    "Inter_28pt-ExtraBold": require("../assets/fonts/inter/Inter_28pt-ExtraBold.ttf"),
    "Inter_28pt-Bold": require("../assets/fonts/inter/Inter_28pt-Bold.ttf"),
    "Inter_28pt-Black": require("../assets/fonts/inter/Inter_28pt-Black.ttf"),
    "PermanentMarker-Regular": require("../assets/fonts/Permanent_Marker/PermanentMarker-Regular.ttf"),
  });

  const [isShowingSplashScreen, setIsShowingSplashScreen] = useState(false);

  useEffect(() => {
    if (error) throw error;

    // Hide the splash screen once the fonts are loaded
    if (fontsLoaded) {
      setTimeout(() => {
        setIsShowingSplashScreen(true);
      }, 3000);
    }

    setIsShowingSplashScreen(false);
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {!isShowingSplashScreen ? (
        <SplashScreenView />
      ) : (
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      )}
    </>
  );
}
