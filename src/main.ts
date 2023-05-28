import './assets/main.scss';

import { setupErrorHandler } from "@/config/error-handler";
import { setupAppProviders } from "@/config/app-providers";

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from "./App.vue";
import { setupDirectives } from "@/config/app-directives";

const app = createApp(App);
setupAppProviders(app);
setupErrorHandler(app);
setupDirectives(app);

app.use(createPinia());

app.mount('#app');
