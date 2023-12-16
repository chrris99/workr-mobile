import { AppleOAuthButton } from "@/components/auth/AppleOAuthButton";
import { GoogleOAuthButton } from "@/components/auth/GoogleAuthButton";
import { Header } from "@/components/base/Header";
import { Input } from "@/components/base/input/Input";
import { Button } from "@/design-system/buttons/Button";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { ClerkError } from "@/models/clerkError";
import { SignInScreenNavigationProps } from "@/navigation/RootStackNavigator";
import { useOAuth, useSignIn } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useForm } from "react-hook-form";
import { Platform, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type SignInFormValues = {
  email: string;
  password: string;
};

const SignInScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<SignInScreenNavigationProps>();

  const { isLoaded, signIn, setActive } = useSignIn();
  const { startOAuthFlow: startAppleOAuthFlow } = useOAuth({
    strategy: "oauth_apple",
  });

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
    <View
      style={[
        styles.container,
        { marginTop: insets.top, marginBottom: insets.bottom },
      ]}
    >
      <View style={styles.formContainer}>
        <Header
          title="Sign in to your account"
          subtitle="Welcome back! Please enter your details."
        />

        <View style={styles.form}>
          <Input
            control={control}
            rules={{ required: true }}
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
          <Button text="Forgot password?" type={"primary-link-lg"} />
        </View>
      </View>

      <View style={styles.buttons}>
        <Button
          text="Sign in"
          type={"primary-solid-lg"}
          onPress={handleSubmit(onSubmit)}
        />
        {Platform.OS === "ios" && <AppleOAuthButton />}
        {Platform.OS === "android" && <GoogleOAuthButton />}
      </View>

      <View style={styles.signUpLink}>
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
    flex: 1,
    paddingHorizontal: spacing["spacing-4"],
  },
  formContainer: {},
  form: {
    gap: spacing["spacing-6"],
  },
  forgotPasswordContainer: {
    paddingVertical: spacing["spacing-6"],
    flexDirection: "row-reverse",
  },
  buttons: {
    gap: spacing["spacing-4"],
  },
  signUpLink: {
    marginTop: spacing["spacing-8"],
    flexDirection: "row",
    justifyContent: "center",
    gap: spacing["spacing-1"],
  },
});

export default SignInScreen;
