import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css";
import { useBootstrap } from "vue-usebootstrap";

createApp(App).use(useBootstrap, { prefix: "Bv" }).mount('#app')
