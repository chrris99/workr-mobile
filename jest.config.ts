import type { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "react-native",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
};

export default config;
