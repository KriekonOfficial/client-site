export class Model {
	protected initialized: boolean = false;

	constructor() {

	}

	public isInitialized() : boolean {
		return this.initialized;
	}

	public setInitialized(initialized: boolean) {
		this.initialized = initialized;
	}
}