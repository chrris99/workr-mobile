import { MemberCard } from "@/components/gym/MemberCard";
import { Button } from "@/design-system/buttons/Button";
import { colors } from "@/design-system/colors/colors";
import { spacing } from "@/design-system/spacing/spacing";
import { testId } from "@/utils/test/testId";
import { OrganizationMembershipResource } from "@clerk/types";
import { useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

const AnimatedView = Animated.createAnimatedComponent(View);

export const SWIPEABLE_EXERCISE_CARD_TEST_IDS = {
  SWIPEABLE_CARD: testId("swipeable-exercise-card"),
  EDIT_BUTTON: testId("edit-exercise-button"),
  DELETE_BUTTON: testId("delete-exercise-button"),
} as const;

export type SwipeableMemberCardProps = {
  membership: OrganizationMembershipResource;
};

export const SwipeableMemberCard = ({
  membership,
}: SwipeableMemberCardProps) => {
  const swipeableRef = useRef<Swipeable>(null);

  const renderRightActions = (
    dragX: Animated.AnimatedInterpolation<number>
  ) => {
    const scale = dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <View style={styles.actionContainer}>
        <AnimatedView style={{ transform: [{ scale }] }} />

        <Button
          type={"gray-link-sm"}
          iconName="Close"
          style={styles.button}
          onPress={() => void membership.destroy()}
        />
      </View>
    );
  };

  return (
    <Swipeable
      ref={swipeableRef}
      renderRightActions={renderRightActions}
      rightThreshold={30}
    >
      <MemberCard member={membership.publicUserData} />
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: spacing["spacing-3"],
  },
  button: {
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: spacing["spacing-4"],
    borderRadius: spacing["spacing-4"],
    backgroundColor: colors["error-200"],
  },
});
