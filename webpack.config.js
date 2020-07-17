const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const autoprefixer = require('autoprefixer');

module.exports = (env) => {
    const mode = env.prod ? 'production' : 'development';
    const watch = !env.prod;
    const baseName = (type) => `${type}/[name].${env.prod ? '[contenthash].' : ''}${type}`;

    return {
        mode,
        watch,
        entry: {
            main: [path.join(__dirname, 'src/js/index.js'), path.join(__dirname, 'src/css/index.scss')],
            404: [path.join(__dirname, 'src/js/404.js')],
        },
        output: {
            path: path.join(__dirname, 'build', 'assets'),
            filename: baseName('js'),
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.s?css$/,
                    use: [
                        'style-loader',
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [autoprefixer],
                            },
                        },
                        'sass-loader',
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                path: path.join(__dirname, 'build', 'assets'),
                filename: baseName('css'),
            }),
            new ManifestPlugin({ publicPath: '/assets/' }),
        ],
    };
};
