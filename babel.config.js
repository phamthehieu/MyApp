module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module-resolver', {
      alias: {
        '@components': './src/components',
        '@screens': './src/screens',
        '@hooks': './src/hooks',
        '@services': './src/services',
        '@store': './src/store',
        '@utils': './src/utils',
        '@assets': './src/assets',
      },
    }],
    'react-native-reanimated/plugin',
  ],
};
