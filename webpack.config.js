const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'dynamic-loader.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'DynamicLoader',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
};
