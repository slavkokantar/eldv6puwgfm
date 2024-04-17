import type {
  TStoreMain,
  TStoreFlags,
  IConfigDocs,
  IAppData,
  OrNoValue,
} from "@/types";
import { assign } from "@/utils";
import { PRODUCTION$, URL_APP_PUBLIC } from "@/config";

const themeDark = "dark";
const themeLight = "light2";
const AUTH_LOCKED = "eq1hiOTCPNCfo20Y";
const CHAT_EDIT_active = "rAkrT0XZJvlXbb";
const TASK_EDIT_active = "TB2HXTaILV3eKlQAoSa8";
const PAGE_CACHED = "WrTD0QD08cjfqC4pol";
const PRODUCT_CATEGORY_prefix = "@product:category:";

export default defineAppConfig({
  ADMIN_EMAIL: "admin@nikolav.rs",
  DEBUG: true !== PRODUCTION$,
  APP_USER_DEFAULT: {
    email: "user@nikolav.rs",
    password: "user@nikolav.rs",
  },
  app: {
    DEFAULT_TRANSITION: "slide-y-reverse-transition",
    CART_BADGE_OFFSET: 9,
    DEFAULT_NO_PRODUCT_IMAGE_FOUND: "/no-image-available.png",
  },
  com: {
    FIELDS: [
      "ownerFirstName",
      "ownerLastName",
      "name",
      "address",
      "district",
      "phone",
      "delivery",
      "about",
    ],
  },
  products: {
    PRODUCT_CATEGORY_prefix,
    perPage: 10,
    fields: [
      "name",
      "category",
      "price",
      "stockType",
      "stock",
      "onSale",
      "description",
    ],
    categories: [
      {
        title: "Bašta, voće, povrće, gljive",
        value: `${PRODUCT_CATEGORY_prefix}basta`,
      },
      {
        title: "Meso, jaja, mesne prerađevine",
        value: `${PRODUCT_CATEGORY_prefix}meso`,
      },
      {
        title: "Mleko i mlečni proizvodi",
        value: `${PRODUCT_CATEGORY_prefix}mleko`,
      },
      {
        title: "Začin, ulje, čaj, bilje",
        value: `${PRODUCT_CATEGORY_prefix}zacin-ulje`,
      },
      {
        title: "Brašno, žitarice, pekara",
        value: `${PRODUCT_CATEGORY_prefix}brasno`,
      },
      {
        title: "Med, proizvodi od meda",
        value: `${PRODUCT_CATEGORY_prefix}med`,
      },
      {
        title: "Zimnica, namazi, kompot",
        value: `${PRODUCT_CATEGORY_prefix}zimnica`,
      },
      {
        title: "Sokovi, sirup",
        value: `${PRODUCT_CATEGORY_prefix}sokovi`,
      },
      {
        title: "Alkoholna pića",
        value: `${PRODUCT_CATEGORY_prefix}pice`,
      },
      {
        title: "Zanat, rukotvorine",
        value: `${PRODUCT_CATEGORY_prefix}zanat`,
      },
    ],
  },
  docs: {
    TAG_USERS: "@users",
    prefix_TAG_USERS_DOCS: "pH82VKaHwf3RLfZlR:",
    prefix_CHAT_ACTIVE: "KFrbiAW5Zm3:",
    TASKS_ALL: "@tasks:all",
    TASKS_USER_prefix: "Njvrw1gYEXd3yv:",
    LIKES_preix: "@likes:",
    TAG_COMPANY_PROFILE_prefix: "@company:profile:fwgM8::",
    PRODUCT_IMAGES: "@images:product:",
    CHAT_ORDER_COM_USER_prefix: "e5iT1p1Mmx5HD@",
  },
  //
  key: {
    APP_MOUNTED: "Zkcmk4BnXHU",
    APP_PROCESSING: "FlaelfhZddK",
    AUTH_CREDS: "pafer98hf",
    AUTH_LOCKED,
    CHAT_NAME: "QOPnfTw9",
    INJECT_AUTHAPI: "WYvEK29UZIP",
    INJECT_THEME: "Aasnvy2eaxE",
    PROVIDE_APP_DATA: "Ud8dHoadmBgSr55P6gJ",
    THEME: "0Fgky53B2UbA1fG3lKcV",
    TASKS_SELECTED_IDS: "f6sSDP",
    FORM_COMPANY_ID: "2wIETsis",
    PRODUCT_SELECTED: "Be3Q6GMsqZPSP",
    PRODUCT_ADD: "HAvQCqapN1NuJFIoS",
    PRODUCT_EDIT: "fRbSc",
    PRODUCTS_CHANGE: "O36Bjz6COY6i",
    FLAG_CART_OPEN: "S46jud",
    CHAT_ORDER_MESSAGE: "SInuQBaRiY",
    CHAT_CLIENTID_ACTIVE: "O5zl57Fui",
    ORDER_SEND_STATUS: "Ty6qF",
  },
  //
  FIELDS_OMIT_STORAGE_META: ["id", "created_at", "updated_at", "__typename"],
  //
  DEFAULT_CONFIG_useApiDocs: <IConfigDocs>{ autoReload: true },
  defaults: {
    appData: <IAppData>{
      "admin:email": "admin@nikolav.rs",
    },
  },
  //
  api: {
    TAG_STORAGE: "@storage:",
    DOCS_CHAT_ALL: "@chat:all",
  },
  //
  graphql: {
    STORAGE_QUERY_POLL_INTERVAL: 67890,
  },
  //
  stores: {
    gravatars: {
      BASE_URL: "https://www.gravatar.com/avatar",
      GRAVATARS_CACHE: "gravatars:DKueKjfBLJlRj7k",
      MODE: {
        monsterid: true,
        wavatar: true,
        robohash: true,
      },
      SIZE: 92,
    },
    cart: {
      initial: {
        code: "",
        descrption: "",
        items: <Record<number, number>>{},
      },
    },
    main: {
      initial: <TStoreMain>{
        "app:name": "nikolav.rs",
        [CHAT_EDIT_active]: null,
        [TASK_EDIT_active]: null,
        [PAGE_CACHED]: "",
      },
      CHAT_ACTIVE: "ozbbRlAv19DO",
      CHAT_ACTIVE_title: "SFImifljHov",
      CHAT_EDIT_active,
      TASK_EDIT_active,
      PAGE_CACHED,
    },
    flags: {
      initial: <TStoreFlags>{
        [AUTH_LOCKED]: false,
      },
    },
    auth: {
      KEY_ACCESS_TOKEN: ":sEe5xYuTL4q",
      KEY_USEFETCH_AUTHDATA: "GEXjh1kt9Oc",
      authDataFields: ["id", "email"],
      initial: () => "",
      authHeaders: (token: string, additional?: Record<string, any>) =>
        assign(
          token
            ? {
                Authorization: `Bearer ${token}`,
              }
            : {},
          additional || {}
        ),
    },
  },
  //
  io: {
    IOEVENT_DOCS_CHANGE: "change:docs",
    IOEVENT_STORAGE_CHANGE: "@storage:",
    IOEVENT_DOCS_CHANGE_JsonData: "change:docs:JsonData:",
    IOEVENT_DOC_CHANGE_prefix: "change://doc@",
    IOEVENT_DOCS_TAGS_CHANGE_prefix: "change:docs:tags:",
    IOEVENT_PRODUCTS_CHANGE_prefix: "change:products::",
    IOEVENT_PRODUCT_IMAGES_CHANGE_prefix: "change:product-images:",
    IOEVENT_PRODUCTS_CHANGE: "@change:products:all",
    IOEVENT_ORDERS_CHANGE: "@orders:change:",
    IOEVENT_AUTH_NEWUSER: "@auth:newuser",
  },
  theme: {
    DEFAULT: themeLight,
    DARK: themeDark,
    LIGHT: themeLight,
  },
  layout: {
    // appBarHeight: 32,
    appBarHeight: 52,
    // additional @VMain/padding-top
    offsetTop: "1.22rem",
  },
  effect: {
    default: "headShake",
    duration: 890,
  },
  urls: {
    appPublic: URL_APP_PUBLIC,
    github: "https://github.com/nikolav/nuxtflask",
  },
  storage: {
    MENU_CATEGORY: "7n0FS9ZxoVN",
  },
});
