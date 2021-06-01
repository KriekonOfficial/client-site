import { createApp } from 'vue'
import App from './App.vue';
import router from './router';
// import store from './store/store';
// import VueAnime from 'vue-animejs';

// import VueAxios from 'vue-axios';
// import axios from 'axios';

const app = createApp(App);
app.use(router);
// app.Use(store);
// app.use(axios);
app.mount('#app');

