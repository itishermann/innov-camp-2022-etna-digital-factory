module.exports = {
  extends: [
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
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
