const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MIniCssExtractPlugin = require('mini-css-extract-plugin');

var config = {
    entry: './src/App.js',
    optimization: {
        namedChunks: true,
        splitChunks: {
            cacheGroups: {
                default: {
                    chunks: 'all',
                    reuseExistingChunk: true,
                    name:'index.bundle',
                    priority: 1,
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    reuseExistingChunk: true,
                    name:'vendors.bundle',
                    priority: 2,
                }
            }
        }
    },
    devServer: {
        contentBase: __dirname + '/dist',
        historyApiFallback: true,
        inline: true,
        port: 1234
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.css$/,
                use: [
                    MIniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(scss|sass)$/,
                exclude: /node_modules/,
                use: [
                    MIniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 20
                        }
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new UglifyJsPlugin({
            parallel: 4,
            uglifyOptions: {
                output: {
                    comments: false,
                    beautify: false,
                }
            },
            cache: true,
        }),
        new CompressionPlugin({
            filename: '[path].gz[query]', //目標資源名稱。[file] 會被替換成原資源。[path] 會被替換成原資源路徑，[query] 替換成原查詢字串
            algorithm: 'gzip',//演算法
            test: new RegExp(
                '\\.(jsx|scss)$'  //壓縮 js 與 css
            ),
            threshold: 240,//只處理比這個值大的資源。按位元組計算
            minRatio: 0.8//只有壓縮率比這個值小的資源才會被處理
        }),
        new MIniCssExtractPlugin()
    ]
}

module.exports = config;