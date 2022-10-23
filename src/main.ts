import { createApp } from "vue";
import { createPinia } from "pinia";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill, HiAcademicCap, GiIsland } from "oh-vue-icons/icons";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/main.css";
import AOS from "aos";
import 'aos/dist/aos.css';
import "@/assets/jquery.min";
import "./assets/scroll"

const app = createApp(App);
AOS.init();

addIcons(FaFlag, RiZhihuFill, HiAcademicCap, GiIsland);

app.component("v-icon", OhVueIcon);

app.use(createPinia());
app.use(router);

app.mount("#app");
