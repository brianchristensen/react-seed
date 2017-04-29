let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');

// use source-maps locally
let devtool = null;

if (process.env.NODE_ENV === 'development') { 
    devtool = "#source-map";
} 
else if (process.env.NODE_ENV === 'production') {
    devtool = false;
}

// clean options
let cleanOptions = {
  root:     __dirname,
  verbose:  false,
  dry:      false
}

module.exports = {
    entry: [
        __dirname + '/src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'app.[hash].bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'stage-0']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'brian-react-starter',
            template:  __dirname + '/src/index.html'
        }),
        new CleanWebpackPlugin(['dist'], cleanOptions)
    ],
    devtool: devtool
};