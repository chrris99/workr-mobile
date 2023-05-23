import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "../design-system/typography/Text";

const ExerciseScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top }}>
      <Text>Exercise screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ExerciseScreen;