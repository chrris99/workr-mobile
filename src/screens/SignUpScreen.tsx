import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { Input } from "../components/base/Input";
import { Button } from "../components/base/Button";
import { useState } from "react";
import { ClerkError } from "../models/clerkError";
import { spacing } from "../design-system/spacing/spacing";

import Apple from "../../assets/icons/apple.svg";
import Google from "../../assets/icons/google.svg";
import Text from "../design-system/typography/Text";
import { Header } from "../components/base/Header";
import { Divider } from "../design-system/spacing/Divider";

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [emailAddress, setEmailAddress] = useState("");
  const [emailAddressError, setEmailAddressError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setPendingVerification(true);
    } catch (err: any) {
      if (err.clerkError) {
        const errors = err.errors as ClerkError[];
        console.error(JSON.stringify(err, null, 2));
        errors.forEach((error) => {});
      }
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Sign Up" subtitle="Welcome to Workr" />
      {!pendingVerification && (
        <>
          <View style={styles.signUpContainer}>
            <View style={styles.inputContainer}>
              <Input
                label="Email"
                autoCapitalize="none"
                value={emailAddress}
                placeholder="Enter your email"
                onChangeText={(email) => setEmailAddress(email)}
              />

              <Input
                label="Password"
                value={password}
                placeholder="Password..."
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
              />
            </View>

            <View style={styles.forgotPasswordContainer}>
              <Text type="body-S-semibold" color="primary-700">
                Forgot password?
              </Text>
            </View>

            <View style={styles.buttonGroup}>
              <Button title="Sign up" type="solid" onPress={onSignUpPress} />
              <Divider text="or" />
              <Button
                title="Sign up with Apple"
                backgroundColor="gray-900"
                type="solid"
                icon={<Apple width={24} height={24} color={"white"} />}
              />
              <Button
                title="Sign up with Google"
                type="outline"
                textColor="gray-900"
                icon={<Google width={24} height={24} />}
              />
            </View>
          </View>
          <Text>Already have an account? Sign In</Text>
        </>
      )}
      {pendingVerification && (
        <View>
          <View>
            <Input
              value={code}
              placeholder="Code..."
              onChangeText={(code) => setCode(code)}
            />
          </View>
          <Button title="Verify Email" type="solid" onPress={onPressVerify} />
        </View>
      )}
    </View>
  );
}

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
