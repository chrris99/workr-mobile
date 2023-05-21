import { View } from "react-native";
import Text from "../design-system/typography/Text";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useUser } from "@clerk/clerk-expo";

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();
  const {user} = useUser()

  return (
    <View style={{ paddingTop: insets.top }}>
      <Text>Profile Screen</Text>
      <Text>Hello, {user?.primaryEmailAddress?.emailAddress}</Text>
    </View>
  );
};

export default ProfileScreen;
