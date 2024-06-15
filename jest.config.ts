import type { Config } from "jest";

const config: Config = {
  roots: ["<rootDir>"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "node_modules/*/auto-bind/*/^.+\\.js$": [
      "babel-jest",
      {
        plugins: ["@babel/plugin-transform-modules-commonjs"],
      },
    ],
  },
  transformIgnorePatterns: ["/node_modules/*/(?!(auto-bind)/)"],
  testMatch: ["<rootDir>/src/?(*.)+(spec|test).[tj]s?(x)"],
};

export default config;
