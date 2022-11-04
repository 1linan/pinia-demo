import { createApp } from 'vue'
import App from './App.vue'

//引入store
import { store } from './store/index';

const app = createApp(App);

//把store挂载到实例对象上
app.use(store);

app.mount('#app');





