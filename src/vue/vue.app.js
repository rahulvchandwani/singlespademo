import Vue from "vue";
import singleSpaVue from "single-spa-vue";
import App from "./App.vue";

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        render(h) {
            return h(App);
        }
    }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;