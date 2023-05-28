import './assets/main.scss';

import { setupErrorHandler } from "@/config/error-handler";
import { setupAppProviders } from "@/config/providers";
import { setupDirectives } from "@/config/directives";

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// @ts-ignore
import App from "./App.vue";

const app = createApp(App);

setupAppProviders(app);
setupErrorHandler(app);
setupDirectives(app);

app.use(createPinia());

app.mount('#app');
