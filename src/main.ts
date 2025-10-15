import { createSSRApp } from 'vue';
import App from './App.vue';

export function createApp() {
    const app = createSSRApp(App);
    app.config.globalProperties.$log = console.log.bind(console);
    // 定义全局变量
    const imgUrl = 'https://xx.xx.com';
    app.provide('imgUrl', imgUrl);
    // app.config.globalProperties.$imgUrl = imgUrl;
    return {
        app,
    };
}
