import type { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "jest-expo",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
};

export default config;
