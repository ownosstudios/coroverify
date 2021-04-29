const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
	openapi: '3.0.0',
	info: {
		title: 'CoroVerify',
		version: '1.0.0',
		description: 'The API documentation for all schemas and routes of the app.',
	},
	license: {
		name: 'MIT',
		url: 'https://www.google.com'
	},
	components: {
		securitySchemes: {
			cookieAuth: {
				type: 'apiKey',
				in: 'cookie',
				name: 'sid',
			},
		},
	},
	security: [{
		cookieAuth: [],
	}, ],
	servers: [{
		url: `${process.env.APP_PUBLIC_URL || `http://localhost:${process.env.PORT || 8080}`}`,
	}, ],
	tags: [
		{
			name: 'Auth',
			description: 'All APIs for authentication and onboarding',
		},
	],
};

const options = {
	definition: {...swaggerDefinition},
	apis: ['./routes/**/*.js', './docs/API/**/*.yaml'],
}

module.exports = swaggerJSDoc(options);
