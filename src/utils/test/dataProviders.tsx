import { store } from "@/store";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { NavigationContainer } from "@react-navigation/native";
import { ReactNode } from "react";
import { Provider } from "react-redux";

export const AllProviders = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <BottomSheetModalProvider>
        <NavigationContainer>{children}</NavigationContainer>
      </BottomSheetModalProvider>
    </Provider>
  );
};
