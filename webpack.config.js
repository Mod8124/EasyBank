const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'production',
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'main.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
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
    plugins: [new HtmlWebpackPlugin({
            title:'Easybank landing page',
            filename:'index.html',
            template:'./index.html',
            favicon:'./public/bank.ico'
    })],
    
}