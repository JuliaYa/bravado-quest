module.exports = {
    module: {
        rules: [{
            test: /\.(sass|scss)$/i,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
      }]
    }
};