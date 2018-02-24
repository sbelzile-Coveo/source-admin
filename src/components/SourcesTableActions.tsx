import { IData, ITableProps, IActionOptions, turnOnLoading, getTableLoadingIds } from "react-vapor";
import { refreshTable, sourcesTableId } from "./SourcesTable";
import { Store } from "../Store";

export const sourcesTableGetActions = (rowData?: IData, props?: ITableProps): IActionOptions[] => {
    const actions: IActionOptions[] = [{
        name: "Rebuild",
        icon: "refresh",
        primary: true,
        trigger: () => {
            Store.dispatch(turnOnLoading(getTableLoadingIds(sourcesTableId)));
            window.CoveoClient.Source
                .rebuild(rowData.id)
                .then(() => refreshTable());
        },
        enabled: true
    }]

    return actions;
}