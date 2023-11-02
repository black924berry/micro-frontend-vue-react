import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { registerApplication, start } from 'single-spa'

const mifeAModule = '@learnSspa/mifeA';

registerApplication({
    name: 'mifeA',
    app: () => import(/* @vite-ignore */ mifeAModule),
    activeWhen: '/mifea'
});
start();

createApp(App).mount('#app')
