import * as React from "react";
import { IBlankSlateProps, TableConnected } from "react-vapor";
import { fetchSources, Sources } from "../models/Sources";
import { sourcesTableGetActions } from "./SourcesTableActions";

export const sourcesTableId = "sources-table";

export const refreshTable = () => {
    fetchSources(new Sources());
}

export class SourcesTable extends React.Component {
    componentDidMount() {
        refreshTable();
    }

    render() {
        const headingAttributes = [
            {
                attributeName: "name",
                titleFormatter: () => "Name",
                sort: true,
            },
            {
                attributeName: "sourceType",
                titleFormatter: () => "Type",
            }
        ];

        const blankSlateError: IBlankSlateProps = {
            title: "Error",
            description: "An error occurred when retrieving the sources.",
            buttons: [{
                enabled: true,
                primary: true,
                name: "Retry",
                onClick: () => {
                    refreshTable();
                },
            }],
        };

        return (
            <TableConnected
                id={sourcesTableId}
                actionBar
                navigation
                filter
                headingAttributes={headingAttributes}
                blankSlateDefault={{ title: "No sources" }}
                blankSlateNoResultsOnAction={{ title: "No sources found" }}
                blankSlateOnError={blankSlateError}
                getActions={sourcesTableGetActions}
            />
        );
    }
}
