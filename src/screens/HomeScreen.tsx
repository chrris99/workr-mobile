import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "../design-system/typography/Text";
import { SettingsList } from "../components/profile/SettingsList";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top }}>
      <Text>Home screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
