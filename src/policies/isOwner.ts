/**
 * isOwner policy
 */

export default (policyContext, config, { strapi }) => {
	const { method, query } = policyContext.request;
	const { filters } = query;
	const { user } = policyContext.state;

	if (method === 'POST') {
		policyContext.request.body.data = { ...policyContext.request.body.data, owner: user.id };
	}

	const filterMethods = ['GET', 'PUT', 'DELETE'];

	if (filterMethods.includes(method)) {
		policyContext.request.query.filters = filters
			? {
					...filters,
					owner: user.id
				}
			: { owner: user.id };
	}
	return true;
};
