import { createApp } from 'vue';

import '@/style.css';
import App from '@/App.vue';
import vuetify from '@/plugins/vuetify';
import router from '@/router';
import store from '@/stores';

createApp(App).use(store).use(router).use(vuetify).mount('#app');
