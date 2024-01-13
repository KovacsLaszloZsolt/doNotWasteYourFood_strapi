export default {
	routes: [
		{
			method: 'GET',
			path: '/categories',
			handler: 'category.find',
			config: {
				policies: ['global::isOwner']
			}
		},
		{
			method: 'GET',
			path: '/categories/:id',
			handler: 'category.findOne',
			config: {
				policies: ['global::isOwner']
			}
		},
		{
			method: 'POST',
			path: '/categories',
			handler: 'category.create',
			config: {
				policies: ['global::isOwner']
			}
		},
		{
			method: 'PUT',
			path: '/categories',
			handler: 'category.update',
			config: {
				policies: ['global::isOwner']
			}
		},
		{
			method: 'DELETE',
			path: '/categories',
			handler: 'category.delete',
			config: {
				policies: ['global::isOwner']
			}
		}
	]
};
