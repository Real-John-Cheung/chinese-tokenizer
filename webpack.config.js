var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chinsesTokenizer.js',
    },
    node: {
        global: false,
        __filename: false,
        __dirname: false,
    },
    resolve: {
        fallback: {
          fs: false
        },
    },
};