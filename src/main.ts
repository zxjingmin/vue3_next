import { createApp } from 'vue';
import App from './App.vue';
import store from './store/';
import elementPlus from 'element-plus';
const app = createApp(App);

app.use(store);
// app.use(elementPlus);

app.mount('#app');
