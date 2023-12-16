import { Button } from "@/design-system/buttons/Button";
import { useOAuth } from "@clerk/clerk-expo";
import { OAuthStrategy } from "@clerk/types";
import { useCallback } from "react";

export type OAuthFlow = "sign_in" | "sign_up";
type OAuthButtonProps = {
  strategy: Extract<"oauth_apple" | "oauth_google", OAuthStrategy>;
  flow: OAuthFlow;
};

export const OAuthButton = ({ strategy, flow }: OAuthButtonProps) => {
  const { startOAuthFlow } = useOAuth({ strategy });

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();

      if (createdSessionId && setActive) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <Button
      text={`${flow === "sign_in" ? "Sign in" : "Sign up"} with ${
        strategy === "oauth_apple" ? "Apple" : "Google"
      }`}
      type={"gray-solid-lg"}
      iconName={strategy === "oauth_apple" ? "Apple" : "Google"}
      iconPosition="leading"
      onPress={onPress}
    />
  );
};
