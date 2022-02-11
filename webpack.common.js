const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
             {
               test: /\.(woff|woff2|eot|ttf|otf)$/i,
               type: 'asset/resource',
             },
             {
               test: /\.html$/i,
               loader: 'html-loader'
             }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: 'Test App',
                template: './src/template.html'
            }
        ),
        new CleanWebpackPlugin()
    ]
}