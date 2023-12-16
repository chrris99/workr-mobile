import { BottomSheetInput } from "@/components/base/input/BottomSheetInput";
import { BottomModal } from "@/components/base/modal/BottomModal";
import { Button } from "@/design-system/buttons/Button";
import { spacing } from "@/design-system/spacing/spacing";
import { useOrganizationList } from "@clerk/clerk-expo";
import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { ForwardedRef, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { Keyboard, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type GymFormValues = {
  name: string;
};

export const CreateGymModal = forwardRef(
  (props, ref: ForwardedRef<BottomSheetModal>) => {
    const insets = useSafeAreaInsets();
    const { dismiss } = useBottomSheetModal();

    const { createOrganization, setActive } = useOrganizationList();

    const {
      control,
      handleSubmit,
      reset,
      getValues,
      formState: { errors },
    } = useForm<GymFormValues>({
      defaultValues: {
        name: "",
      },
    });

    const closeModal = () => {
      if (Keyboard.isVisible()) Keyboard.dismiss();
      dismiss();
      reset();
    };

    const onValid = async (data: GymFormValues) => {
      const gym = await createOrganization?.({ name: data.name });
      setActive?.({ organization: gym?.id });
      closeModal();
    };

    return (
      <BottomModal
        ref={ref}
        onDismiss={reset}
        title="Create gym"
        subtitle="Join a gym and see exercises, workouts and workout plans curated by professionals"
      >
        <View style={{ paddingBottom: insets.bottom }}>
          <View style={styles.form}>
            <BottomSheetInput
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Gym name is required",
                },
              }}
              name={"name"}
              error={errors.name}
              placeholder="Gym name"
              label="Name*"
            />
          </View>
          <Button
            type="primary-solid-lg"
            text="Create"
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
