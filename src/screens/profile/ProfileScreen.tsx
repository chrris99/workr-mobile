import { CreateGymModal } from "@/components/gym/CreateGymModal";
import { GymCard } from "@/components/gym/GymCard";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { Button } from "@/design-system/buttons/Button";
import { spacing } from "@/design-system/spacing/spacing";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const insets = useSafeAreaInsets();
  const { user } = useUser();
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
      <ProfileCard />
      <GymCard />
      <Button
        text="Create Gym"
        type={"primary-link-md"}
        iconName="Gym"
        iconPosition="leading"
        onPress={openModal}
      />

      <Button text="Sign Out" type={"gray-solid-md"} />

      <CreateGymModal ref={bottomSheetRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing["spacing-4"],
    flex: 1,
    gap: spacing["spacing-4"],
  },
});

export default ProfileScreen;
