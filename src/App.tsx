import * as React from "react";
import { Store } from "./Store";
import { Provider } from "react-redux";
import { Frame } from "./components/Frame";
import * as Coveo from "coveo-client";
import { SourcesTable } from "./components/SourcesTable";

export class App extends React.Component {
    render() {
        return (
            <Provider store={Store}>
                <Frame title="Sources" description="Coveo Sources">
                    <SourcesTable />
                </Frame>
            </Provider>
        );
    }
}