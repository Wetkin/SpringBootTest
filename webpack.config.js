const
    webpack = require('webpack');
const
    path = require('path');
const
    ManifestPlugin = require('webpack-manifest-plugin');
const
    ExtractTextPlugin = require("extract-text-webpack-plugin");
const
    options = module.exports;
const
    staticsPath = path.join(__dirname, 'src/main/resources/static/dist');
const
    sourcePath = path.join(__dirname, "src/main/resources/javascript/back");



module.exports = function (env) {

    const
        nodeEnv = env && env.prod ? 'production' : 'development';
    const
        isProd = nodeEnv === 'production';
    let
        entry = {

            index: 'index.js',
            login:"./security/login"


        }




    return {

        devtool: isProd ? false : 'source-map',
        context: sourcePath,
        entry: entry,
        output: {
            path: staticsPath,
            publicPath: '/dist/',
            filename: isProd ? "[name].[chunkhash].js" : '[name].js',
        },
        module: {
            rules: [{
                test: /\.(html|png|gif|jpg|jpeg|eto|eot|ttf|svg|woff|woff2)(\?.*)?$/,
                exclude: /node_modules/,
                use: 'file-loader'
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: 'css-loader'
                })
            }, {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
            ]
        },
        resolve: {
            extensions: [".js", ".json", ".jsx", ".css"],
            modules: [ path.resolve(__dirname, 'node_modules'), sourcePath]
        },

        performance: isProd && {
            maxAssetSize: 100,
            maxEntrypointSize: 300,
            hints: 'warning'
        },

        stats: {
            colors: {
                green: '\u001b[32m'
            }
        }
    };

}
