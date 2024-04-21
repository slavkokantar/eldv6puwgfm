import { PRODUCTION$ } from "./vars.env";

const LOGGING_: boolean = true;

export const THEME_ACCENT_SHIFT = 33;
export const DEBUG$ = !PRODUCTION$ && LOGGING_;

export const URL_APP_PUBLIC = PRODUCTION$
  ? "http://70.34.223.252:3001/"
  : "http://localhost:3000/";
  