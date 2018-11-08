module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/build',
        publicPath: '/build',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase:__dirname + '/',
        publicPath: '/build'
    },
    devtool: '#sourcemap',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: ['babel-loader']
            }
        ]
    }
};