import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { CLERK_PUBLISHABLE_KEY } from "@env";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./src/navigation/RootStackNavigator";
import RootTabNavigator from "./src/navigation/RootTabNavigator";
import { tokenCache } from "./src/services/tokenCache";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { FormProvider, useForm } from "react-hook-form";
import { StatusBar } from "expo-status-bar";

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
      <StatusBar style={'dark'} />
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
