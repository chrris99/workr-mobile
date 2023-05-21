import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { StyleSheet, Text, View } from "react-native";
import { CLERK_PUBLISHABLE_KEY } from "@env";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SignUpScreen from "./src/screens/SignUpScreen";


import { Button } from "./src/components/base/Button";
import { Input } from "./src/components/base/Input";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
        <SafeAreaView>
          <SignedIn>
            <Text>You are Signed in</Text>
          </SignedIn>
          <SignedOut>
            <SignUpScreen />
          </SignedOut>
        </SafeAreaView>
      </ClerkProvider>
    </SafeAreaProvider>
  );
}
