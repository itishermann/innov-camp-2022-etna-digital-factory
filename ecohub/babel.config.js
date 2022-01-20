module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@components': './src/components',
            '@assets': './assets',
            '@utils': './src/utils',
            '@store': './src/store',
            '@navigation': './src/navigation',
            '@views': './src/views',
            '@styles': './src/styles'
          },
        },
      ],
    ],
  };
};
