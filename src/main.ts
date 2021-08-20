import { createApp } from 'vue';
import App from './App.vue';
import store from './store/';
import naive from './libaray/naive';
const app = createApp(App);

app.use(store);
app.use(naive);

app.mount('#app');
