import { SettingsList } from "@/components/profile/SettingsList";
import { Button } from "@/design-system/buttons/Button";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Image, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
        <Image style={styles.profileImage} source={{ uri: user?.imageUrl }} />
        <View style={styles.details}>
          {user?.firstName && (
            <Text type="heading-S-semibold">{user.firstName}</Text>
          )}

          <Text>{user?.primaryEmailAddress?.emailAddress}</Text>
        </View>
      </View>
      <View style={styles.settings}>
        <SettingsList />
        <Button text="Sign Out" type={"gray-solid-md"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing["spacing-4"],
    flex: 1,
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
    justifyContent: "space-between",
    marginBottom: spacing["spacing-8"],
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});

export default ProfileScreen;
