import { StyleSheet, View } from "react-native";
import Text from "../design-system/typography/Text";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useUser } from "@clerk/clerk-expo";
import { Avatar } from "../components/base/Avatar";
import { SettingsList } from "../components/profile/SettingsList";
import { spacing } from "../design-system/spacing/spacing";

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();
  const { user } = useUser();

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
        <Avatar size="2XL" />
        <View style={styles.nameContainer}>
          <Text type="heading-S-semibold">Christian</Text>
          <Text>{user?.primaryEmailAddress?.emailAddress}</Text>
        </View>
      </View>
      <SettingsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing["spacing-4"],
  },
  profileHeaderContainer: {
    alignItems: "center",
    gap: spacing['spacing-5'],
    paddingVertical: spacing["spacing-12"],
  },
  nameContainer: {
    alignItems: 'center'
  },
  settingsContainer: {
    borderRadius: 8,
  },
});

export default ProfileScreen;
