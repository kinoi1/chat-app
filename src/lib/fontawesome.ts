// lib/fontawesome.ts
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import styles agar tidak terjadi flashing
config.autoAddCss = false; // Matikan auto-inject CSS

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
library.add(faUser,faSmile);
