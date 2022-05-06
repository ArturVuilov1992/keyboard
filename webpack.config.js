let path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


let conf = {
entry: "./src/index.js",
output: {
    path: path.resolve(__dirname,"./dist"),
    filename: "main.js",
    publicPath: "dist/"
} ,
plugins: [
    new HtmlWebpackPlugin({
         template:"./src/index.html"
    })
],
module: {
    rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
            test: /\.css$/,
            use: ["style-loader","css-loader"],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          
      ]
},
/* devtool: "eval-sourcemap"
 */
};

module.exports= conf;