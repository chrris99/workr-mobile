import { Input } from "@/components/base/input/Input";
import { Button } from "@/design-system/buttons/Button";
import { useSignUp } from "@clerk/clerk-expo";
import { useForm } from "react-hook-form";
import { View } from "react-native";

type EmailVerificationFormValues = {
  code: string;
};

export const EmailVerificationScreen = () => {
  const { isLoaded, signUp, setActive } = useSignUp();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailVerificationFormValues>({
    defaultValues: {
      code: "",
    },
  });

  const onValid = async (data: EmailVerificationFormValues) => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: data.code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View>
      <View style={{ marginTop: 200 }}>
        <Input
          control={control}
          name="code"
          placeholder="Enter verification code"
          error={errors.code}
        />
      </View>
      <Button
        text="Verify Email"
        type={"primary-solid-lg"}
        onPress={handleSubmit(onValid)}
      />
    </View>
  );
};
