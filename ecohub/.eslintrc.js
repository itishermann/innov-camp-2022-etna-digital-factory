module.exports = {
  extends: [
    'airbnb-typescript',
    'universe/native'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    indent: ['error', 2],
  },
  overrides: [
    {
      files: ['src/store/**/*.slice.*', 'src/store/**/*.actions.*'],
      rules: {
        'no-param-reassign': 0,
      },
    },
    {
      files: ['src/store/**/*.thunks.*', 'src/store/**/*.actions.*'],
      rules: {
        'no-underscore-dangle': 0,
      },
    },
  ],
};
