import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";

const app = createApp(App)
app.config.globalProperties.$filters = {
    UseCase(value) {
      return value.toUpperCase();
    }
  }
createApp(App).use(router).use(store).mount('#app')