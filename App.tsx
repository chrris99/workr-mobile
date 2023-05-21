import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { StyleSheet, Text, View } from "react-native";
import { CLERK_PUBLISHABLE_KEY } from "@env";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SignUpScreen from "./src/screens/auth/SignUpScreen";

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
import WelcomeScreen from "./src/screens/auth/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./src/navigation/RootStackNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import RootTabNavigator from "./src/navigation/RootTabNavigator";

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

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
        <NavigationContainer>
          <SignedIn>
            <RootTabNavigator />
          </SignedIn>
          <SignedOut>
            <RootStackNavigator />
          </SignedOut>
        </NavigationContainer>
      </ClerkProvider>
    </SafeAreaProvider>
  );
}
