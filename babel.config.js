module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', 'android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          'test/*': './test/'
        }
      }
    ],
    '@babel/plugin-transform-runtime'
  ],
  env: {
    production: {
      plugins: ['transform-remove-console']
    }
  }
}
