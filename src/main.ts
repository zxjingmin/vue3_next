import { createApp } from 'vue';
import '@/assets/styles/index.scss';
import App from '@/App.vue';
import vueStore from '@/store/';
import router from '@/router/';

const app = createApp(App);

app.use(vueStore);
app.use(router());
app.mount('#app');
