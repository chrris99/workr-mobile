import { Header } from "@/components/base/Header";
import {
  BASE_HORIZONTAL_GUTTER,
  spacing,
} from "@/design-system/spacing/spacing";
import { useUser } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const { user } = useUser();

  const navigation = useNavigation();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header
        title="Home"
        rightComponent={
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("You")}
          >
            <Image
              style={styles.profileImage}
              source={{ uri: user?.imageUrl }}
            />
          </TouchableOpacity>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: BASE_HORIZONTAL_GUTTER,
  },
  profileImage: {
    width: spacing["spacing-8"],
    height: spacing["spacing-8"],
    borderRadius: 100,
  },
});

export default HomeScreen;
