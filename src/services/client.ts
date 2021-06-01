import UserClient from './api/user'
export class Client {
	user: UserClient;

	constructor(config: string[] = []) {
		this.user = new UserClient();
	}
}