import { Header } from "@/components/base/Header";
import { Button } from "@/design-system/buttons/Button";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { WelcomeScreenNavigationProps } from "@/navigation/RootStackNavigator";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const WelcomeScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<WelcomeScreenNavigationProps>();

  const onStartJourney = () => {
    navigation.navigate("Name");
  };

  const onSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/welcome.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
          <Header
            title="Welcome to Workr!"
            titleStyle="heading-S-semibold"
            subtitle="Are you ready to get in shape?"
          />
          <View style={styles.buttonContainer}>
            <Button
              text="Start your journey"
              type={"primary-solid-lg"}
              onPress={onStartJourney}
            />
          </View>
          <View style={styles.signInContainer}>
            <Text>Already have an account?</Text>
            <Button
              text="Sign In"
              type={"primary-link-lg"}
              onPress={onSignIn}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    paddingHorizontal: spacing["spacing-4"],
  },
  buttonContainer: {
    paddingTop: spacing["spacing-6"],
    paddingBottom: spacing["spacing-2"],
  },
  signInContainer: {
    flexDirection: "row",
    gap: spacing["spacing-1"],
  },
});

export default WelcomeScreen;
