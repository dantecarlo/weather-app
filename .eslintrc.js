module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['**/tsconfig.json']
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true }],
    semi: 'off',
    '@typescript-eslint/semi': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-void': ['error', { allowAsStatement: true }],
    'linebreak-style': 'off',
    'react/function-component-definition': 'off',
    'implicit-arrow-linebreak': 'off',
    'arrow-body-style': 'off',
    'object-curly-newline': 'off',
    'react/no-unstable-nested-components': 'off',
    'max-lines': ['error', { skipBlankLines: true, skipComments: true }],
    'react/jsx-no-duplicate-props': [2, { ignoreCase: false }],
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'function-paren-newline': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'operator-linebreak': 'off',
    'react/jsx-wrap-multilines': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/']
      }
    }
  },
  ignorePatterns: ['**/*.css', '**/*.svg', '**/*eslintrc.js']
}
