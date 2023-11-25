import { Button } from "@/design-system/buttons/Button";
import Text from "@/design-system/typography/Text";
import { useOrganization } from "@clerk/clerk-expo";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const GymScreen = () => {
  const insets = useSafeAreaInsets();
  const { organization } = useOrganization();

  return (
    <View
      style={{
        paddingTop: insets.top,
      }}
    >
      <Text>Gym </Text>
      <Button text="Leave Gym" type={"gray-solid-md"} />
    </View>
  );
};
