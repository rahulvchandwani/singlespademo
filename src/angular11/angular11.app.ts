import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { getSingleSpaExtraProviders, singleSpaAngular } from "single-spa-angular";
import { NgZone } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";

import { AppModule } from "./app.module";

const angular11Lifecycles = singleSpaAngular({
    bootstrapFunction: singleSpaProps => {
        return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(
            AppModule
        );
    },
    template: "<app-root />",
    Router,
    NavigationStart,
    NgZone
});

export const bootstrap = [angular11Lifecycles.bootstrap];
export const mount = [angular11Lifecycles.mount];
export const unmount = [angular11Lifecycles.unmount];