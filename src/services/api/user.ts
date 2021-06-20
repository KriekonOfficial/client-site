import { Client } from '../client'
import { UserModel } from './models/usermodel'

export class UserClient extends Client {
	async login(email:string, password:string) : Promise<UserModel|Error> {
		return new Promise((resolve, reject) => {
			this.post('user/login', [], {'email': email, 'password': password})
			.then((response) => {
				this.info()
				.then((model) => {
					return resolve(model);
				})
				.catch((error) => {
					return reject(error);
				});
			})
			.catch((error) => {
				return reject(new Error(error.response.data.meta.message));
			});
		});
	}

	async info() : Promise<UserModel|Error> {
		return new Promise((resolve, reject) => {
			this.get('user')
			.then((response) => {
				let user = new UserModel();
				let attr = response.data.data;
				Object.assign(user, attr);
				user.setInitialized(true);

				return resolve(user);
			})
			.catch((error) => {
				return reject(new Error(error.response.data.meta.message));
			});
		});
	}
}