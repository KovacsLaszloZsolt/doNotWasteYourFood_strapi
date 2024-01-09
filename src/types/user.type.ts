export interface User {
	id: number;
	username: string;
	email: string;
	provider: string;
	password: string;
	resetPasswordToken: null | string;
	confirmationToken: null | string;
	confirmed: boolean;
	blocked: boolean;
	createdAt: Date;
	updatedAt: Date;
	role: {
		id: number;
		name: string;
		description: string;
		type: string;
		createdAt: Date;
		updatedAt: Date;
	};
}
