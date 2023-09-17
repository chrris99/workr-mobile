import { Avatar } from "@/components/base/Avatar";
import { Header } from "@/components/base/Header";
import { spacing } from "@/design-system/spacing/spacing";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header title="Home" rightComponent={<Avatar size="S" />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing["spacing-4"],
  },
});

export default HomeScreen;
