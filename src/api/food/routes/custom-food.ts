export default {
	routes: [
		{
			method: 'GET',
			path: '/foods',
			handler: 'food.find',
			config: {
				policies: ['global::isOwner']
			}
		},
		{
			method: 'GET',
			path: '/foods/:id',
			handler: 'food.findOne',
			config: {
				policies: ['global::isOwner']
			}
		},
		{
			method: 'POST',
			path: '/foods',
			handler: 'food.create',
			config: {
				policies: ['global::isOwner']
			}
		},
		{
			method: 'PUT',
			path: '/foods',
			handler: 'food.update',
			config: {
				policies: ['global::isOwner']
			}
		},
		{
			method: 'DELETE',
			path: '/foods',
			handler: 'food.delete',
			config: {
				policies: ['global::isOwner']
			}
		}
	]
};
