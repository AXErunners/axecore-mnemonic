const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    library: 'axecoreMnemonic',
    path: path.resolve(__dirname, 'dist'),
    filename: 'axecore-mnemonic.js'
  }
};
