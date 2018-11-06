module.exports = {
    entry: __dirname + '/src/jsx/index.jsx',
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase:__dirname + '/',
        publicPath: '/'
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