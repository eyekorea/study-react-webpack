const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        // path : path.resolve(__dirname,'dist'),
        filename : 'bundle.js'
    },
    module: {
        rules : [
            {
                test : /\.(js|jsx)$/,
                exclude: /node_modules/,
                use : [
                    {
                        loader : 'babel-loader',
                        options : {
                            presets : ['env', 'react']
                        }
                    }
                ]

            },
            {
                test : /\.html$/, // html 로더를 사용한다.
                use : [
                    {
                        loader : 'html-loader',
                        options : {
                            minimize : true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                // use: [MiniCssExtractPlugin.loader, "css-loader"], // mini-css-extract-plugin 을 이용해 css 파일로 생성한다.
                use: ['style-loader', 'css-loader'], // css 를 읽어들여  head > style 안에 css 를 삽입한다.
            },
            {
                test : /\.less$/,
                // use : [MiniCssExtractPlugin.loader,'css-loader', "less-loader"], // mini-css-extract-plugin 을 이용해 less 파일을 css 파일로 생성한다.
                use: ['style-loader', 'css-loader', 'less-loader'], // less 를 읽어들여  head > style 안에 css 를 삽입한다.
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({ // css 를 읽어 들여 css 파일로 만들어야 할경우 사용된다. module.rules 의 css 쪽 use 를 변경해야 한다.
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};