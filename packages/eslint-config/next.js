import nextPlugin from "@next/eslint-plugin-next";
import globals from "globals";
import baseConfig from "./base.js";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...baseConfig,
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        React: "readonly",
      },
    },
  },
];
