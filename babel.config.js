module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@store': './src/store',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@styles': './src/styles',
        },
      },
    ],
    // Only include reanimated plugin when not in test environment
    ...(process.env.NODE_ENV !== 'test' ? ['react-native-reanimated/plugin'] : []),
  ],
};
