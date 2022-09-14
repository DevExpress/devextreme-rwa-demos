import { createApp } from 'vue';
import { AppInfo, appInfoInjectKey } from '@/types/app-info';
import App from './App.vue';
import { router } from './router';
import 'devextreme/scss/bundles/dx.material.blue.light.compact.scss';
import './dx-styles.scss';

const app = createApp(App);
app.use(router);
app.provide<AppInfo>(appInfoInjectKey, {
  title: 'UI Templates Gallery',
});

app.mount('#app');
