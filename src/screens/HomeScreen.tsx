import { Avatar } from "@/components/base/Avatar";
import { Header } from "@/components/base/Header";
import { BASE_HORIZONTAL_GUTTER } from "@/design-system/spacing/spacing";
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
    paddingHorizontal: BASE_HORIZONTAL_GUTTER,
  },
});

export default HomeScreen;
