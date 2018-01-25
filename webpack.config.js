const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: './public/movies/styles.bundle.css',
    allChunks: true,
    disable: process.env.NODE_ENV === "development"
});


module.exports = {
  entry: ['./src/movies/movies_main.js', './src/movies/movies.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/movies')
  },

  module: {
    rules: [{
        test: /\.scss$/,
        use: extractSass.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
            // // use style-loader in development
            // fallback: "style-loader"
        })
    }]
  },

  plugins: [
    extractSass
  ]   
};
