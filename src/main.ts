import { createApp } from 'vue'
import App from './App.vue';
import router from './router';
import store from './store/store';
// import VueAnime from 'vue-animejs';

// import VueAxios from 'vue-axios';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

