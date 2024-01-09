'use strict';

module.exports = (config, { strapi }) => {
	return async (context, next) => {
		// Call next to continue with the flow and get to the controller
		await next();
	};
};
