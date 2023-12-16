import { colors } from "@/design-system/colors/colors";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { ProfileScreenNavigationProps } from "@/navigation/ProfileStackNavigator";
import { useOrganization } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export const GymCard = () => {
  const { organization } = useOrganization();
  const navigation = useNavigation<ProfileScreenNavigationProps>();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => navigation.navigate("Gym")}
    >
      <View style={styles.content}>
        <Image style={styles.image} source={{ uri: organization?.imageUrl }} />
        <View style={styles.gymDetails}>
          <Text type={"body-L-semibold"}>{organization?.name}</Text>
          {organization?.createdAt && (
            <Text>{`Active since ${format(
              organization?.createdAt,
              "yyyy MMM dd"
            )}`}</Text>
          )}
          <Text>
            {organization?.membersCount && organization.membersCount > 1
              ? `${organization?.membersCount} members`
              : `${organization?.membersCount} member`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: spacing["spacing-4"],
    backgroundColor: colors["white"],
    padding: spacing["spacing-4"],
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 32,
  },
  content: {
    flexDirection: "row",
    gap: spacing["spacing-6"],
    alignItems: "center",
  },
  gymDetails: {
    gap: spacing["spacing-1"],
  },
});
