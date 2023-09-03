import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { Input } from "../../components/base/Input";
import { useState } from "react";
import { ClerkError } from "../../models/clerkError";
import { spacing } from "../../design-system/spacing/spacing";
import Text from "../../design-system/typography/Text";
import { Header } from "../../components/base/Header";
import { Divider } from "../../design-system/spacing/Divider";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { SignUpScreenNavigationProps } from "../../navigation/RootStackNavigator";
import { Button } from "../../design-system/buttons/Button";

const SignUpScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<SignUpScreenNavigationProps>();

  const { isLoaded, signUp, setActive } = useSignUp();

  const [emailAddress, setEmailAddress] = useState<string>("");
  const [emailAddressError, setEmailAddressError] = useState<
    string | undefined
  >(undefined);
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string | undefined>(
    undefined
  );
  const [pendingVerification, setPendingVerification] =
    useState<boolean>(false);
  const [code, setCode] = useState<string>("");
  const [codeError, setCodeError] = useState<string | undefined>(undefined);

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
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header
        title="Welcome to Workr"
        subtitle="Are you ready to start working out?"
      />
      {!pendingVerification && (
        <>
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
              <Button text="Forgot password?" type={"primary-link-md"} />
            </View>

            <View style={styles.buttonGroup}>
              <Button
                text="Sign up"
                type={"primary-solid-lg"}
                onPress={onSignUpPress}
              />
              <Divider text="or" />
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
        </>
      )}
      {pendingVerification && (
        <View>
          <View>
            <Input
              value={code}
              placeholder="Code..."
              onChangeText={(code) => setCode(code)}
              error={codeError}
              setError={setCodeError}
            />
          </View>
          <Button
            text="Verify Email"
            type={"primary-solid-lg"}
            onPress={onPressVerify}
          />
        </View>
      )}
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
