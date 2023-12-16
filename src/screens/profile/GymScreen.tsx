import { GymCard } from "@/components/gym/GymCard";
import { InviteMemberModal } from "@/components/gym/InviteMemberModal";
import { MemberCard } from "@/components/gym/MemberCard";
import { SwipeableMemberCard } from "@/components/gym/SwipeableMemberCard";
import { Button } from "@/design-system/buttons/Button";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { GymScreenNavigationProps } from "@/navigation/ProfileStackNavigator";
import {
  useOrganization,
  useOrganizationList,
  useUser,
} from "@clerk/clerk-expo";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useMemo, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const GymScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<GymScreenNavigationProps>();
  const { isLoaded, user } = useUser();
  const { organization, membership, membershipList, invitationList } =
    useOrganization({ membershipList: {}, invitationList: {} });
  const { createOrganization, setActive } = useOrganizationList();
  const inviteMemberBottomSheetRef = useRef<BottomSheetModal>(null);

  const openModal = useCallback(() => {
    inviteMemberBottomSheetRef.current?.present();
  }, []);

  const isAdmin = useMemo(
    () => membership?.role === "admin",
    [membership?.role]
  );

  const trainers = useMemo(
    () => membershipList?.filter((membership) => membership.role === "admin"),
    [membershipList]
  );

  const clients = useMemo(
    () =>
      membershipList?.filter(
        (membership) => membership.role === "basic_member"
      ),
    [membershipList]
  );

  const deleteOrganization = () => {
    setActive?.({ organization: null });
    organization?.destroy();
    navigation.navigate("Profile");
  };

  const leaveOrganization = () => {
    if (user && organization) {
      setActive?.({ organization: null });
      organization.removeMember(user.id);
    }
    navigation.navigate("Profile");
  };
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <View style={styles.content}>
        <GymCard />

        <View style={styles.section}>
          <Text type={"body-L-semibold"}>Trainer</Text>
          {trainers &&
            trainers.map((trainer) => (
              <MemberCard member={trainer.publicUserData} />
            ))}
        </View>

        <View style={styles.section}>
          <View style={styles.clientsHeader}>
            <Text type={"body-L-semibold"}>Clients</Text>
            {isAdmin && (
              <Button
                text="Invite"
                iconName="Plus"
                type={"primary-link-lg"}
                onPress={openModal}
              />
            )}
          </View>

          {clients?.map((client) => {
            return isAdmin ? (
              <SwipeableMemberCard membership={client} />
            ) : (
              <MemberCard member={client.publicUserData} />
            );
          })}
        </View>
      </View>

      {isAdmin ? (
        <Button
          text="Delete Gym"
          type={"gray-solid-md"}
          onPress={deleteOrganization}
        />
      ) : (
        <Button
          text="Leave Gym"
          type={"gray-solid-md"}
          onPress={leaveOrganization}
        />
      )}
      <InviteMemberModal ref={inviteMemberBottomSheetRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing["spacing-4"],
    justifyContent: "space-between",
    paddingBottom: spacing["spacing-4"],
  },
  content: {
    gap: spacing["spacing-6"],
  },
  section: {
    gap: spacing["spacing-2"],
  },
  clientsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
