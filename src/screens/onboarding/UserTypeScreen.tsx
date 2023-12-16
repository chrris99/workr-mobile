import { SelectInput } from "@/components/base/input/select/SelectInput";
import { Button } from "@/design-system/buttons/Button";
import { colors } from "@/design-system/colors/colors";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { UserTypeScreenNavigationProps } from "@/navigation/RootStackNavigator";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type UserType = "trainer" | "client";
type UserTypeFormValues = {
  userType: UserType;
};

export const UserTypeScreen = ({ route }) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<UserTypeScreenNavigationProps>();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserTypeFormValues>({
    defaultValues: {
      userType: "client",
    },
  });

  const onValid = (data: UserTypeFormValues) => {
    navigation.navigate("SignUp", { ...route.params, type: data.userType });
  };

  console.log(route.params);

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: spacing["spacing-6"],
          borderRadius: 8,
        }}
      >
        <Text type={"heading-M-semibold"} style={{ textAlign: "center" }}>
          What's your name?
        </Text>
        <View style={styles.form}>
          <SelectInput
            control={control}
            name="userType"
            options={[
              { value: "client", displayText: "Client", iconName: "User" },
              { value: "trainer", displayText: "Trainer", iconName: "Trainer" },
            ]}
          />
        </View>

        <Button
          type={"primary-solid-lg"}
          text="Continue"
          onPress={handleSubmit(onValid)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: spacing["spacing-4"],
    backgroundColor: colors["gray-100"],
  },
  form: {
    gap: spacing["spacing-4"],
    marginVertical: spacing["spacing-12"],
  },
});
