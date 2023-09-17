import { Header } from "@/components/base/Header";
import { Input } from "@/components/base/input/Input";
import { Button } from "@/design-system/buttons/Button";
import { Divider } from "@/design-system/spacing/Divider";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { ClerkError } from "@/models/clerkError";
import { SignInScreenNavigationProps } from "@/navigation/RootStackNavigator";
import { useSignIn } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type SignInFormValues = {
  email: string;
  password: string;
};

const SignInScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<SignInScreenNavigationProps>();

  const { isLoaded, signIn, setActive } = useSignIn();

  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<SignInFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInFormValues) => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn?.create({
        identifier: data.email,
        password: data.password,
      });

      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err: any) {
      console.error(JSON.stringify(err));
      if (err.clerkError) {
        const clerkErrors = err.errors as ClerkError[];
        clerkErrors.forEach((clerkError) => {
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
        title="Log in to your account"
        subtitle="Welcome back! Please enter your details."
      />
      <View style={styles.signUpContainer}>
        <View style={styles.inputContainer}>
          <Input
            control={control}
            name="email"
            label="Email"
            autoComplete="email"
            autoCapitalize="none"
            placeholder="Enter your email"
          />

          <Input
            control={control}
            name="password"
            label="Password"
            autoComplete="password-new"
            placeholder="Password..."
            secureTextEntry={true}
          />
        </View>
        <View style={styles.forgotPasswordContainer}>
          <Button text="Forgot password?" type={"primary-solid-lg"} />
        </View>

        <View style={styles.buttonGroup}>
          <Button
            text="Sign in"
            type={"primary-solid-lg"}
            onPress={handleSubmit(onSubmit)}
          />
          <Divider text="or" />
          <Button
            text="Sign in with Apple"
            type={"gray-solid-lg"}
            iconName="Apple"
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: spacing["spacing-1"] }}>
        <Text>Don't have an account yet?</Text>
        <Button
          text="Sign Up"
          type={"primary-link-md"}
          onPress={() => navigation.replace("SignUp")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing["spacing-4"],
    flex: 1,
  },
  signUpContainer: {
    paddingVertical: spacing["spacing-8"],
    flex: 1,
  },
  inputContainer: {
    gap: spacing["spacing-5"],
    flex: 1,
  },
  forgotPasswordContainer: {
    paddingVertical: spacing["spacing-6"],
    flexDirection: "row-reverse",
  },
  buttonGroup: {
    gap: spacing["spacing-4"],
  },
});

export default SignInScreen;
