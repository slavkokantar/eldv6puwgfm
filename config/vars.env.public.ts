import { PRODUCTION$ } from "./vars.env";

const LOGGING_: boolean = true;

export const THEME_ACCENT_SHIFT = 33;
export const DEBUG$ = !PRODUCTION$ && LOGGING_;

// export const URL_APP_PUBLIC = PRODUCTION$
//   ? "http://70.34.223.252:3001/"
//   : "http://localhost:3000/";
export const URL_APP_PUBLIC = PRODUCTION$
  ? "https://golden-malasada-69c9b4.netlify.app/"
  : "http://localhost:3000/";
