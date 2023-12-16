import { OAuthButton, OAuthFlow } from "@/components/auth/OAuthButton";

type GoogleOAuthButtonProps = {
  flow?: OAuthFlow;
};
export const GoogleOAuthButton = ({
  flow = "sign_in",
}: GoogleOAuthButtonProps) => (
  <OAuthButton flow={flow} strategy={"oauth_google"} />
);
