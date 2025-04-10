import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import jest from "eslint-plugin-jest";
import reactNative from "@react-native/eslint-plugin";

export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": ts,
      prettier,
      import: importPlugin,
      jest,
      "react-native": reactNative,
    },
    rules: {
      // Prettier
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          trailingComma: "all",
          tabWidth: 2,
          semi: false,
          singleQuote: false,
          bracketSpacing: true,
          printWidth: 80,
        },
      ],

      // React
      "react/react-in-jsx-scope": "off",

      // TypeScript
      "@typescript-eslint/no-empty-function": "off",

      // Import sorting
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal"],
          pathGroups: [
            {
              pattern: "react",
              group: "builtin",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      // Jest
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",

      // React Native (Thêm các rule cần thiết nếu có)
    },
  },
  {
    files: ["*.test.js", "*.test.jsx", "*.test.ts", "*.test.tsx"],
    languageOptions: {
      env: {
        jest: true,
      },
    },
  },
];
