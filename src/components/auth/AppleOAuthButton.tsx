import { OAuthButton, OAuthFlow } from "@/components/auth/OAuthButton";

type AppleOAuthButtonProps = {
  flow?: OAuthFlow;
};
export const AppleOAuthButton = ({
  flow = "sign_in",
}: AppleOAuthButtonProps) => (
  <OAuthButton flow={flow} strategy={"oauth_apple"} />
);
