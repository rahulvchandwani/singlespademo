import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

import ReactJS from "./root.component.js";

function getDomElement() {
    return document.getElementById("react");
}

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: ReactJS,
    getDomElement
});

export const bootstrap = [reactLifecycles.bootstrap];
export const mount = [reactLifecycles.mount];
export const unmount = [reactLifecycles.unmount];