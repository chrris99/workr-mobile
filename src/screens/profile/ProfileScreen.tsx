import { Header } from "@/components/base/Header";
import { CreateGymModal } from "@/components/gym/CreateGymModal";
import { GymCard } from "@/components/gym/GymCard";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { Button } from "@/design-system/buttons/Button";
import {
  BASE_HORIZONTAL_GUTTER,
  spacing,
} from "@/design-system/spacing/spacing";
import { useTrainer } from "@/hooks/useTrainer";
import { useAuth, useOrganization } from "@clerk/clerk-expo";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const insets = useSafeAreaInsets();
  const isTrainer = useTrainer();
  const { membership } = useOrganization();
  const { isLoaded, getToken, signOut } = useAuth();

  const openModal = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

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
      <Header
        title="You"
        subtitle="View all exercises created by you or your trainer"
      />
      <ProfileCard />

      {membership && <GymCard />}

      {isTrainer && !membership && (
        <Button
          text="Create Gym"
          type={"primary-solid-md"}
          iconName="Gym"
          iconPosition="leading"
          onPress={openModal}
        />
      )}

      <Button
        text="Sign Out"
        type={"gray-solid-md"}
        onPress={() => signOut()}
      />

      <CreateGymModal ref={bottomSheetRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: BASE_HORIZONTAL_GUTTER,
    flex: 1,
    gap: spacing["spacing-4"],
  },
});

export default ProfileScreen;
