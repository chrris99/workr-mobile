export interface ClerkError {
  code: string;
  message: string;
  longMessage: string;
  meta: { paramName: string };
}
