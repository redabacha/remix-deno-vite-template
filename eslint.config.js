import eslint from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  jsxA11y.flatConfigs.recommended,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  {
    // TODO: update once https://github.com/facebook/react/pull/30774 is merged
    plugins: { "react-hooks": reactHooks },
    rules: reactHooks.configs.recommended.rules,
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.commonjs,
      },
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      "import/internal-regex": "^~/",
      "import/resolver": "@redabacha/eslint-import-resolver-deno",
      react: { version: "detect" },
    },
  },
  { ignores: ["app/deno.d.ts", "build/"] },
];
