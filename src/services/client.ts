import axios, { AxiosInstance } from 'axios';

export class Client {
	protected static instance: AxiosInstance | null = null;

	protected version: number = 1;

	public constructor(config: string[] = []) {
		if (Client.instance === null) {
			Client.instance = axios.create({
				timeout: 20000,
				headers: {
					'Content-Type': 'application/json'
				},
				withCredentials: true
			});
		}
	}
	protected isInitialized() : boolean {
		return Client.instance !== null;
	}

	protected async get(uri: string, params: any[] = [], additional_params: object = {}) : Promise<any> {
		if (!this.isInitialized()) {
			return Promise.reject('Client is not initialized');
		}

		return Client.instance!.get(this.generateURL(uri, params), additional_params);
	}

	protected async post(uri: string, params: any[] = [], post_params: object = {}) : Promise<any> {
		if (!this.isInitialized()) {
			return Promise.reject('Client is not initialized');
		}

		return Client.instance!.post(this.generateURL(uri, params), post_params)
	}

	private generateURL(uri: string, params: any[] = []) : string {
		let url = 'https://api.kriekon.com';
		if (window.location.host === 'local.www.kriekon.com') {
			url = 'http://local.api.kriekon.com';
		}
		url += '/v' + this.version + '/' + uri;

		if (params.length >= 1) {
			url += '/' + params.join('/');
		}

		return url;
	}
}