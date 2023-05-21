import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "../design-system/typography/Text";

const PlanScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top }}>
      <Text>Plan screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PlanScreen;