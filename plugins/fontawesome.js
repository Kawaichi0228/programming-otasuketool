import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import {
  faFloppyDisk,
  faShare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTrash, faShare, faFloppyDisk, faCircleXmark);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
