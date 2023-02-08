import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import icons from "./FontsAwesome.js";
import App from "./App.vue";
import router from "./router";

/* add the imported icons to the library */
library.add({ ...icons });
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
