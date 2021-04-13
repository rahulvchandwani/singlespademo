import angular from "angular";
import singleSpaAngularJS from "single-spa-angularjs";

import './app.module.js';
import './routes.js';

function getDomElement() {
    return document.getElementById("angular");
}

const angularLifecycles = singleSpaAngularJS({
    angular,
    getDomElement,
    mainAngularModule: "angular-app",
    uiRouter: true,
    preserveGlobal: false
});

export const bootstrap = [angularLifecycles.bootstrap];
export const mount = [angularLifecycles.mount];
export const unmount = [angularLifecycles.unmount];