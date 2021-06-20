import { Model } from '../../model'

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

	public getUSERID() : number | null {
		return this.USERID;
	}

	public setFirstName(first_name: string) {
		this.first_name = first_name;
	}

	public getFirstName() : string | null {
		return this.first_name;
	}

	public setLastName(last_name: string) {
		this.last_name = last_name;
	}

	public getLastName() : string | null {
		return this.last_name;
	}

	public getName() : string {
		let name = '';

		if (this.getFirstName() !== null) {
			name += this.getFirstName();
		}

		if (this.getLastName() !== null) {
			name += ' ' + this.getLastName();
		}

		return name.trim();
	}

	public setEmail(email: string) {
		this.email = email;
	}

	public getEmail() : string | null {
		return this.email;
	}

	public setUsername(username: string) {
		this.username = username;
	}

	public getUsername() : string | null {
		return this.username;
	}

	public setDateOfBirth(date_of_birth: string) {
		this.date_of_birth = date_of_birth;
	}

	public getDateOfBirth() : string | null {
		return this.date_of_birth;
	}

	public setRegistrationTime(registration_time: string) {
		this.registration_time = registration_time;
	}

	public getRegistrationTime() : string | null {
		return this.registration_time;
	}

	public setVerified(verified: number) {
		this.verified = verified;
	}

	public getVerified() : number | null {
		return this.verified;
	}

	public isVerified() : boolean {
		return this.getVerified() === 1;
	}

	public setLocked(locked: number) {
		this.locked = locked;
	}

	public getLocked() : number | null {
		return this.locked;
	}

	public isLocked() : boolean {
		return this.getLocked() === 1;
	}
}
