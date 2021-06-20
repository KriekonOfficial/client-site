import { createStore } from 'vuex';
import userStore from './modules/user';

const store = createStore({
	strict: process.env.NODE_ENV !== 'production',
	modules: {
		user: userStore
	}
});

export default store;

