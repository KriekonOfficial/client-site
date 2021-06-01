
export class UserModel {
	USERID: number | null;
	first_name: string | null;
	last_name: string | null;
	email: string | null;
	username: string | null;
	date_of_birth: string | null;
	registration_time: string | null;
	verified: number | null;
	locked: number | null;

	constructor() {
		this.USERID = null;
		this.first_name = null;
		this.last_name = null;
		this.email = null;
		this.username = null;
		this.date_of_birth = null;
		this.registration_time = null;
		this.verified = null;
		this.locked = null;
	}
}

export default class UserClient {
	constructor() {
		//
	}
}