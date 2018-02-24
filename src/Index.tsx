import * as React from "react";
import * as Vapor from "vapor-admin";
import { App } from "./App";
import * as Coveo from "coveo-client";

declare global {
    interface Window { CoveoClient: Coveo.Client; }
}

export const register = (application: Vapor.MainApplication) => {
    application.registerApp("Sources", "Sources", {
        routeOptions: {
            path: "sources",
            render: () => <App />
        }
    });
}
