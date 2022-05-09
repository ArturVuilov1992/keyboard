const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin}=require("clean-webpack-plugin");
const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
const babelOptions = preset => {
    const opts = {
      presets: [
        '@babel/preset-env'
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties'
      ]
    }
  
    if (preset) {
      opts.presets.push(preset)
    }
  
    return opts
  }
const jsLoaders = () => {
    
    
    const loaders = [{
      loader: 'babel-loader',
      options: babelOptions()
    }]
  
    if (isDev) {
      loaders.push('eslint-loader')
    }
  
    return loaders
  }
  





let conf = {
mode:"development",
entry: ["@babel/polyfill","./src/index.js"],
target: 'node',

output: {
    path: path.resolve(__dirname,"dist"),
    filename: "main.js",
} ,
devServer:{
  port:4200,
  open: true,
  hot:false,
  liveReload: true
},
plugins: [
    new HtmlWebpackPlugin({
      template:"./src/index.html"
    }),
    new CleanWebpackPlugin()
],
module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: jsLoaders()
          },
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
            test: /\.css$/i,
            use: ["style-loader",'css-loader'],
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

};

module.exports= conf;