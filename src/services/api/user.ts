import { Client } from '../client'
import { Model } from '../model'

export class UserModel extends Model {
	private USERID: number | null;
	private first_name: string | null;
	private last_name: string | null;
	private email: string | null;
	private username: string | null;
	private date_of_birth: string | null;
	private registration_time: string | null;
	private verified: number | null;
	private locked: number | null;

	constructor() {
		super();
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

	public setUserID(USERID: number) {
		this.USERID = USERID;
	}

	public setFirstName(first_name: string) {
		this.first_name = first_name;
	}

	public setLastName(last_name: string) {
		this.last_name = last_name;
	}

	public setEmail(email: string) {
		this.email = email;
	}

	public setUsername(username: string) {
		this.username = username;
	}

	public setDateOfBirth(date_of_birth: string) {
		this.date_of_birth = date_of_birth;
	}

	public setRegistrationTime(registration_time: string) {
		this.registration_time = registration_time;
	}

	public setVerified(verified: number) {
		this.verified = verified;
	}

	public setLocked(locked: number) {
		this.locked = locked;
	}
}

export class UserClient extends Client {
	login(email:string, password:string) : Promise<UserModel|Error> {
		return new Promise((resolve, reject) => {
			this.post('user/login', [], {'email': email, 'password': password})
			.then((response) => {
				this.info()
				.then((model) => {
					return resolve(model);
				})
				.catch(() => {
					return reject(new UserModel());
				});
			})
			.catch((error) => {
				return reject(new Error(error.response.data.meta.message));
			});
		});
	}

	info() : Promise<UserModel|Error> {
		return new Promise((resolve, reject) => {
			this.get('user')
			.then((response) => {
				let user = new UserModel();
				let attr = response.data.data;
				user.setUserID(attr.USERID);
				user.setFirstName(attr.first_name);
				user.setLastName(attr.last_name);
				user.setLocked(attr.locked);
				user.setVerified(attr.verified);
				user.setUsername(attr.username);
				user.setEmail(attr.email);
				user.setDateOfBirth(attr.date_of_birth);
				user.setRegistrationTime(attr.registration_time);

				user.setInitialized(true);

				return resolve(user);
			})
			.catch((error) => {
				return reject(new Error(error.response.data.meta.message));
			});
		});
	}
}