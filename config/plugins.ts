export default ({ env }) => ({
	'users-permissions': {
		config: {
			jwt: {
				expiresIn: '5days'
			}
		}
	},
	transformer: {
		enabled: true,
		config: {
			responseTransforms: {
				removeAttributesKey: true,
				removeDataKey: true
			}
		}
	}
});
