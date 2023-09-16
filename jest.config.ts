import type { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "jest-expo",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
};

export default config;
