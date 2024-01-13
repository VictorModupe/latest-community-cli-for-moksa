const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

module.exports = {
    resolver: {
      sourceExts: ['jsx', 'js', 'ts', 'tsx'], 
    },
    server: {
      port: 8080,
    },
  };