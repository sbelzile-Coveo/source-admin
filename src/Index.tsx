import * as React from "react";
import * as Vapor from "vapor-admin";
import { App } from "./App";
import * as Coveo from "coveo-client";
import { HelpDropdown } from './components/header/Help';

declare global {
    interface Window { CoveoClient: Coveo.Client; }
}

export const register = (application: Vapor.Application) => {
    application.registerHeaderSection("help", { render: () => <HelpDropdown key="help" /> })
    application.registerApp("Sources", "Sources", {
        routeOptions: {
            path: "sources",
            render: () => <App />
        }
    });
}
