module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'semi': false,
        'printWidth': 100,
      }
    ],
    '@typescript-eslint/no-use-before-define': 'off'
  }
}
