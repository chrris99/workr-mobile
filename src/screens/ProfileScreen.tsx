import { Image, StyleSheet, View } from "react-native";
import Text from "../design-system/typography/Text";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { SettingsList } from "../components/profile/SettingsList";
import { spacing } from "../design-system/spacing/spacing";
import { Button } from "../components/base/Button";
import { tokenTemplate } from "../constants/tokenTemplate";
import { Icon } from "../design-system/icons/Icon";
import { colors } from "../design-system/colors/colors";

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();
  const { user } = useUser();
  const { isLoaded, getToken, signOut } = useAuth();

  if (!isLoaded) return null;

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <View style={styles.profileHeaderContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: user?.experimental_imageUrl }}
        />
        <View style={styles.details}>
          {user?.firstName && (
            <Text type="heading-S-semibold">{user.firstName}</Text>
          )}

          <Text>{user?.primaryEmailAddress?.emailAddress}</Text>
        </View>
      </View>
      <View style={styles.settings}>
        <SettingsList />
        <Button title="Sign Out" type="solid" onPress={() => signOut()} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing["spacing-4"],
    flex: 1
  },
  profileHeaderContainer: {
    alignItems: "center",
    gap: spacing["spacing-5"],
    paddingVertical: spacing["spacing-12"],
  },
  details: {
    alignItems: "center",
  },
  settings: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: spacing['spacing-8']
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});

export default ProfileScreen;
