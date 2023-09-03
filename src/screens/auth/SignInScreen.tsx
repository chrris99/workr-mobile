import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { Input } from "../../components/base/Input";
import { useState } from "react";
import { ClerkError } from "../../models/clerkError";
import { spacing } from "../../design-system/spacing/spacing";
import Text from "../../design-system/typography/Text";
import { Header } from "../../components/base/Header";
import { Divider } from "../../design-system/spacing/Divider";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { SignInScreenNavigationProps } from "../../navigation/RootStackNavigator";
import { Button } from "../../design-system/buttons/Button";

const SignInScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<SignInScreenNavigationProps>();

  const { isLoaded, signIn, setActive } = useSignIn();

  const [emailAddress, setEmailAddress] = useState<string>("");
  const [emailAddressError, setEmailAddressError] = useState<
    string | undefined
  >(undefined);
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string | undefined>(
    undefined
  );

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });

      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      if (err.clerkError) {
        const errors = err.errors as ClerkError[];
        errors.forEach((error) => {
          if (error.meta.paramName === "email_address")
            setEmailAddressError(error.longMessage);
          if (error.meta.paramName === "password")
            setPasswordError(error.longMessage);
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
            label="Email"
            autoComplete="email"
            autoCapitalize="none"
            value={emailAddress}
            placeholder="Enter your email"
            onChangeText={(email) => setEmailAddress(email)}
            error={emailAddressError}
            setError={setEmailAddressError}
          />

          <Input
            label="Password"
            autoComplete="password-new"
            value={password}
            placeholder="Password..."
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            error={passwordError}
            setError={setPasswordError}
          />
        </View>
        <View style={styles.forgotPasswordContainer}>
          <Button text="Forgot password?" type={"primary-solid-lg"} />
        </View>

        <View style={styles.buttonGroup}>
          <Button
            text="Sign in"
            type={"primary-solid-lg"}
            onPress={onSignInPress}
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
          type={'primary-link-md'}
          onPress={() => navigation.replace("SignUp")}
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

export default SignInScreen;
