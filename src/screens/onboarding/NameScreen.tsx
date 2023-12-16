import { Input } from "@/components/base/input/Input";
import { Pagination } from "@/components/base/pagination/Pagination";
import { Button } from "@/design-system/buttons/Button";
import { colors } from "@/design-system/colors/colors";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { NameScreenNavigationProps } from "@/navigation/RootStackNavigator";
import { OnboardingFormValues } from "@/screens/onboarding/types";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type NameFormValues = {
  firstName: string;
  lastName: string;
};

export const NameScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NameScreenNavigationProps>();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OnboardingFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const onBack = () => {
    reset();
    navigation.navigate("Welcome");
  };
  const onValid = (data: NameFormValues) =>
    navigation.navigate("UserType", {
      firstName: data.firstName,
      lastName: data.lastName,
    });

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <Pagination currentStepIndex={0} steps={3} />
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
          <Input
            control={control}
            name={"firstName"}
            error={errors.firstName}
            placeholder="First name"
            label="First Name"
          />
          <Input
            control={control}
            name={"lastName"}
            error={errors.lastName}
            placeholder="Last name"
            label="Last Name"
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
