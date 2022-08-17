module.exports = {
	core: {
		builder: '@storybook/builder-webpack5',
	},
	stories: [
		// Paths to the story files
		'../app/components/**/*.stories.mdx',
		'../app/components/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-controls',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
	],
	webpackFinal: async config => {
		config.module.rules.push({
			test: /\.scss$/,
			sideEffects: true,
			use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
		});

		return config;
	},
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: false,
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: prop =>
				prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
		},
	},
};
