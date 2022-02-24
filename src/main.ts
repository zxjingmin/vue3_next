import { createApp } from 'vue';
import '@/assets/styles/index.scss';
import App from '@/App.vue';
import vueStore from '@/store/';
import router from '@/router/';
import axios from '@/api/axios';
import '@/mock';

const app = createApp(App);
axios();
app.use(vueStore);
app.use(router());
app.mount('#app');
