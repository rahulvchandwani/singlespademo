import angular from "angular";
import "./root.component.js";

angular.module("angular-app").config(($stateProvider, $locationProvider) => {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $stateProvider.state("root", {url: "/", template: "<root />"});
});