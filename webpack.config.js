var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包

var publicPath = '/dist/'; //服务器路径
var path = __dirname + '/dist/';

var plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
];

plugins.push(new ExtractTextPlugin('[name].css')); //css单独打包

module.exports = {
    entry: {
        common: [
            './js/common.js'//编译的入口文件
        ],
        index: [
            'webpack-dev-server/client?http://localhost:8080',
            './js/index/index.js'//编译的入口文件
        ],
    },
    output: {
        publicPath: publicPath, //编译好的文件，在服务器的路径
        path: path, //编译到当前目录
        filename: '[name].js', //编译后的文件名
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /^node_modules$/,
                loaders: [ 'babel?presets[]=es2015,presets[]=react,presets[]=stage-0' ]
            }, {
                test: /\.css$/,
                exclude: /^node_modules$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader')
            }, {
                test: /\.less$/,
                exclude: /^node_modules$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!less-loader')
            }, {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
                loader: 'file-loader?name=[name].[ext]'
            }, {
                test: /\.(png|jpg)$/,
                exclude: /^node_modules$/,
                loader: 'url?limit=20000&name=[name].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
            }, {
                test: /\.jsx$/,
                exclude: /^node_modules$/,
                loaders: [ 'jsx', 'babel?presets[]=es2015,presets[]=react,presets[]=stage-0']
            }
        ]
    },
    plugins: plugins,
    resolve: {
        extensions: ['', '.js', '.jsx'], //后缀名自动补全
    }
};
