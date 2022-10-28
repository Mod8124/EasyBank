const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode:'production',
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'main.js',
        assetModuleFilename:'[name][ext]',
        clean:true
    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
              },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
        ]
    },
    devServer:{
       port: '4000',
       static:['./dist'],
       open:true,
       hot:true,
       liveReload:true
    },
    plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
            title:'Easybank landing page',
            filename:'index.html',
            template:'./index.html',
            favicon:'./public/bank.ico',
            hash:false
    })],
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
      },
    
}