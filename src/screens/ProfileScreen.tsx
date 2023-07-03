import { Image, StyleSheet, View } from "react-native";
import Text from "../design-system/typography/Text";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { SettingsList } from "../components/profile/SettingsList";
import { spacing } from "../design-system/spacing/spacing";
import { Button } from "../components/base/Button";
import { tokenTemplate } from "../constants/tokenTemplate";

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();
  const { user } = useUser();
  const { isLoaded, getToken, signOut } = useAuth();

  if (!isLoaded) {
    return null;
  }

  const sendRequest = async () => {
    const token = await getToken(tokenTemplate.default);
    console.log(token);
    fetch("http://localhost:5117/api/exercise", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then(async (res) => console.log(await res.json()))
      .catch((err) => console.error(err));
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
      <View style={styles.profileHeaderContainer}>
        <Image source={{ uri: user?.profileImageUrl }} />
        <View style={styles.nameContainer}>
          <Text type="heading-S-semibold">Christian</Text>
          <Text>{user?.primaryEmailAddress?.emailAddress}</Text>
        </View>
      </View>
      <SettingsList />
      <Button
        title="Send Request"
        type="solid"
        onPress={async () => {
          sendRequest();
        }}
      />
      <Button title="Sign Out" type="solid" onPress={() => signOut()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing["spacing-4"],
  },
  profileHeaderContainer: {
    alignItems: "center",
    gap: spacing["spacing-5"],
    paddingVertical: spacing["spacing-12"],
  },
  nameContainer: {
    alignItems: "center",
  },
  settingsContainer: {
    borderRadius: 8,
  },
});

export default ProfileScreen;
