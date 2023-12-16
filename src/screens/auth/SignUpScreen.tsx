import { Header } from "@/components/base/Header";
import { Input } from "@/components/base/input/Input";
import { Button } from "@/design-system/buttons/Button";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { ClerkError } from "@/models/clerkError";
import { SignUpScreenNavigationProps } from "@/navigation/RootStackNavigator";
import { useSignUp } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type SignUpFormValues = {
  email: string;
  password: string;
};

const SignUpScreen = ({ route }) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<SignUpScreenNavigationProps>();

  const { isLoaded, signUp } = useSignUp();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSignUpPress = async (data: SignUpFormValues) => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress: data.email,
        password: data.password,
        firstName: route.params.firstName,
        lastName: route.params.lastName,
        unsafeMetadata: { role: route.params.type },
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      navigation.navigate("EmailVerification");
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      if (err.clerkError) {
        const errors = err.errors as ClerkError[];
        errors.forEach((clerkError) => {
          if (clerkError.meta.paramName === "email_address")
            setError("email", {
              type: "clerk",
              message: clerkError.longMessage,
            });
          if (clerkError.meta.paramName === "password")
            setError("password", {
              type: "clerk",
              message: clerkError.longMessage,
            });
        });
      }
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header
        title="Welcome to Workr"
        subtitle="Are you ready to start working out?"
      />

      <View style={styles.signUpContainer}>
        <View style={styles.inputContainer}>
          <Input
            label="Email"
            autoComplete="email"
            autoCapitalize="none"
            control={control}
            name="email"
            placeholder="Enter your email"
            error={errors.email}
          />

          <Input
            label="Password"
            autoComplete="password-new"
            placeholder="Enter password"
            secureTextEntry={true}
            control={control}
            name="password"
            error={errors.password}
          />
        </View>
        <View style={styles.forgotPasswordContainer}>
          <Button text="Forgot password?" type={"primary-link-md"} />
        </View>

        <View style={styles.buttonGroup}>
          <Button
            text="Sign up"
            type={"primary-solid-lg"}
            onPress={handleSubmit(onSignUpPress)}
          />
          <Button
            text="Sign up with Apple"
            type={"gray-solid-lg"}
            iconName="Apple"
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: spacing["spacing-1"] }}>
        <Text>Already have an account?</Text>
        <Button
          text="Sign In"
          type={"primary-link-lg"}
          onPress={() => navigation.replace("SignIn")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing["spacing-4"],
  },
  signUpContainer: {
    paddingVertical: spacing["spacing-8"],
  },
  inputContainer: {
    gap: spacing["spacing-5"],
  },
  forgotPasswordContainer: {
    paddingVertical: spacing["spacing-6"],
    flexDirection: "row-reverse",
  },
  buttonGroup: {
    gap: spacing["spacing-4"],
  },
});

export default SignUpScreen;
