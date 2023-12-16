export type UserType = "trainer" | "client";

export type OnboardingFormValues = {
  firstName: string;
  lastName: string;
  userType: UserType;
};
