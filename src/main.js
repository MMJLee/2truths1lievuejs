import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const myApp = createApp(App).use(Quasar, quasarUserOptions);
myApp.use(router);
myApp.mount('#app');

