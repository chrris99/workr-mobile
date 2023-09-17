import RootStackNavigator from "@/navigation/RootStackNavigator";
import RootTabNavigator from "@/navigation/RootTabNavigator";
import { tokenCache } from "@/services/tokenCache";
import { store } from "@/store";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { CLERK_PUBLISHABLE_KEY } from "@env";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const methods = useForm();

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
      <StatusBar style={"dark"} />
      <Provider store={store}>
        <ClerkProvider
          publishableKey={CLERK_PUBLISHABLE_KEY}
          tokenCache={tokenCache}
        >
          <FormProvider {...methods}>
            <BottomSheetModalProvider>
              <NavigationContainer>
                <SignedIn>
                  <RootTabNavigator />
                </SignedIn>
                <SignedOut>
                  <RootStackNavigator />
                </SignedOut>
              </NavigationContainer>
            </BottomSheetModalProvider>
          </FormProvider>
        </ClerkProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
