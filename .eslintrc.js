module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    plugins: [
      'react-native-a11y',
      'eslint-plugin-local-rules',
      'jest',
      'simple-import-sort',
      'react-hooks',
    ],
    extends: [
      'eslint:recommended',
      'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
      'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
      'plugin:react-native-a11y/recommended', // Accessibility standards
      'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
      ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
      sourceType: 'module', // Allows for the use of imports
      ecmaFeatures: {
        jsx: true, // Allows for the parsing of JSX
      },
    },
    rules: {
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      // e.g. "@typescript-eslint/explicit-function-return-type": "off",
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { vars: 'all', varsIgnorePattern: '^_$', args: 'after-used', ignoreRestSiblings: false },
      ],
      'no-console': ['error', { allow: ['warn'] }],
      'local-rules/no-turbo-console-log': ['error'],
      'local-rules/no-x-www-form-urlencoded': ['error'],
      'no-shadow': [2],
      'jest/no-focused-tests': 'error',
      'jest/no-disabled-tests': 'warn',
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],
      'simple-import-sort/sort': 'error',
      'react-hooks/rules-of-hooks': 'error',
    },
    settings: {
      react: {
        version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
      },
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    // Glob based definitions
    overrides: [
      {
        files: ['*/.test.ts', '*/.test.tsx'],
        env: {
          jest: true,
        },
        rules: {
          '@typescript-eslint/explicit-function-return-type': 'off',
        },
      },
      {
        files: ['src/assets/svg/*/.tsx'],
        rules: {
          'local-rules/force-memo-rn-svg': ['error'],
        },
      },
    ],
  };