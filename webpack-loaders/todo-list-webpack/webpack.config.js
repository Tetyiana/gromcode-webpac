module.exports = {
  entry: "./src/index.js",
  output: {
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader',]
      },
      {
        test: /.js$/,
        use: ['babel-loader']
      },
      {
        test: /.(jpg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]',
              outputPath: 'images'
            },

          },
        ]
      }
    ]
  }
}