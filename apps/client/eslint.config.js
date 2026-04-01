import nextConfig from "@digitalocean/eslint-config/next";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...nextConfig,
  {
    ignores: ["next-env.d.ts"],
  },
];
