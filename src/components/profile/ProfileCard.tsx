import { colors } from "@/design-system/colors/colors";
import { Icon } from "@/design-system/icons/Icon";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { useUser } from "@clerk/clerk-expo";
import { Image, StyleSheet, View } from "react-native";

export const ProfileCard = () => {
  const { user } = useUser();

  return (
    <View style={styles.profileHeaderContainer}>
      <View style={styles.profileImageContainer}>
        <Image style={styles.profileImage} source={{ uri: user?.imageUrl }} />
        <View style={styles.editProfileImage}>
          <Icon name="Edit" color="white" size="XS" />
        </View>
      </View>

      <View style={styles.details}>
        {user?.firstName && (
          <Text type="heading-S-semibold">{user.firstName}</Text>
        )}
        <Text type="body-XL-semibold">John Doe</Text>
        <Text>{user?.primaryEmailAddress?.emailAddress}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileHeaderContainer: {
    alignItems: "center",
    gap: spacing["spacing-5"],
    paddingVertical: spacing["spacing-12"],
  },
  details: {
    alignItems: "center",
  },

  profileImage: {
    width: spacing["spacing-32"],
    height: spacing["spacing-32"],
    borderRadius: 100,
  },
  profileImageContainer: {
    position: "relative",
  },
  editProfileImage: {
    backgroundColor: colors["primary-600"],
    padding: spacing["spacing-2"],
    borderRadius: 12,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: -12,
    left: 48,
  },
});
