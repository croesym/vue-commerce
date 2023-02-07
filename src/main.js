import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import icons from "./FontsAwesome";
import App from "./App.vue";
import router from "./router";

/* add the imported icons to the library */
library.add({ ...icons });
const app = createApp(App);
/* register font awesome icon component */
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.mount("#app");
