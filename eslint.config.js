import js from '@eslint/js';
import globals from 'globals';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig({
  files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  languageOptions: {
    parser: tsParser,
    globals: { ...globals.browser },
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
    },
  },
  plugins: {
    js,
    '@typescript-eslint': tsPlugin,
    react: reactPlugin,
    'react-hooks': reactHooks,
    prettier: prettierPlugin,
  },
  ignores: ['node_modules', 'dist', 'build', '.vite'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
  },
  settings: {
    react: { version: 'detect' },
  },
});
