import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    ignores: ['node_modules/', 'dist/'],
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      ecmaVersion: 2021,
      sourceType: 'module'
    },
    rules: {
    }
  },
  pluginJs.configs.recommended,
];
