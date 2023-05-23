import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useSignIn, useSignUp } from "@clerk/clerk-expo";
import { Input } from "../../components/base/Input";
import { Button } from "../../components/base/Button";
import { useState } from "react";
import { ClerkError } from "../../models/clerkError";
import { spacing } from "../../design-system/spacing/spacing";

import Apple from "../../../assets/icons/apple.svg";
import Google from "../../../assets/icons/google.svg";
import Text from "../../design-system/typography/Text";
import { Header } from "../../components/base/Header";
import { Divider } from "../../design-system/spacing/Divider";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  SignInScreenNavigationProps,
  SignUpScreenNavigationProps,
} from "../../navigation/RootStackNavigator";

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
          <Button
            title="Forgot password?"
            type="text"
            textStyle="body-S-semibold"
            textColor="primary-700"
          />
        </View>

        <View style={styles.buttonGroup}>
          <Button title="Sign in" type="solid" onPress={onSignInPress} />
          <Divider text="or" />
          <Button
            title="Sign in with Apple"
            backgroundColor="gray-900"
            type="solid"
            icon={<Apple width={24} height={24} color={"white"} />}
          />
          <Button
            title="Sign in with Google"
            type="outline"
            textColor="gray-900"
            icon={<Google width={24} height={24} />}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: spacing["spacing-1"] }}>
        <Text>Don't have an account yet?</Text>
        <Button
          title="Sign Up"
          type="text"
          textStyle="body-S-semibold"
          textColor="primary-700"
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
