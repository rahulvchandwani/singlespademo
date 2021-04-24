import * as singleSpa from "single-spa";

let isReact = location => location.pathname === "/react";
let isAngular = location => location.pathname === "/angular";
let isAngular11 = location => location.pathname === "/angular11";
let isVue = location => location.pathname === "/vue";

// Arguments are application name, loading function and activity function
singleSpa.registerApplication("react", () => import("./src/react/react.app.js"), () => true);

singleSpa.registerApplication("angular", () => import("./src/angular/angular.app.js"), () => true);

singleSpa.registerApplication("angular11", () => import("./src/angular11/angular11.app.ts"), () => true);

singleSpa.registerApplication("vue", () => import("./src/vue/vue.app.js"), () => true);

singleSpa.start();