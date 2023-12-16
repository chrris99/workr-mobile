import { colors } from "@/design-system/colors/colors";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { PublicUserData } from "@clerk/types";
import { Image, StyleSheet, View } from "react-native";

export type MemberCardProps = {
  member: PublicUserData;
};

export const MemberCard = ({ member }: MemberCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={{ uri: member.imageUrl }} />
        <View style={styles.member}>
          <Text
            type={"body-L-semibold"}
          >{`${member.firstName} ${member.lastName}`}</Text>
          <Text>{member.identifier}</Text>
        </View>
      </View>
    </View>
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
  member: {
    gap: spacing["spacing-1"],
  },
});
