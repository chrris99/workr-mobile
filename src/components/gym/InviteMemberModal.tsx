import { BottomSheetInput } from "@/components/base/input/BottomSheetInput";
import { BottomModal } from "@/components/base/modal/BottomModal";
import { Button } from "@/design-system/buttons/Button";
import { spacing } from "@/design-system/spacing/spacing";
import { useOrganization } from "@clerk/clerk-expo";
import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { ForwardedRef, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { Keyboard, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type InviteMemberFormValues = {
  email: string;
};

export const InviteMemberModal = forwardRef(
  (props, ref: ForwardedRef<BottomSheetModal>) => {
    const insets = useSafeAreaInsets();
    const { dismiss } = useBottomSheetModal();

    const { organization } = useOrganization();

    const {
      control,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<InviteMemberFormValues>({
      defaultValues: {
        email: "",
      },
    });

    const closeModal = () => {
      if (Keyboard.isVisible()) Keyboard.dismiss();
      dismiss();
      reset();
    };

    const onValid = async (data: InviteMemberFormValues) => {
      if (organization)
        organization.inviteMember({
          emailAddress: data.email,
          role: "basic_member",
        });

      closeModal();
    };

    return (
      <BottomModal
        ref={ref}
        onDismiss={reset}
        title="Invite member"
        subtitle="Invite other users to join your virtual gym and start preparing custom workouts and exercises"
      >
        <View style={{ paddingBottom: insets.bottom }}>
          <View style={styles.form}>
            <BottomSheetInput
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "User e-mail address is required",
                },
              }}
              name={"email"}
              autoComplete="email"
              autoCapitalize="none"
              error={errors.email}
              placeholder="User e-mail address"
              label="E-mail*"
            />
          </View>
          <Button
            type="primary-solid-lg"
            text="Invite"
            onPress={handleSubmit(onValid)}
          />
        </View>
      </BottomModal>
    );
  }
);

const styles = StyleSheet.create({
  form: {
    paddingBottom: spacing["spacing-7"],
  },
});
