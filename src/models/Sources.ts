import * as Coveo from "coveo-client";
import { convertInitialCollectionToDataById, PER_PAGE_NUMBERS, modifyState, ITableState, setIsInError, turnOffLoading, getTableLoadingIds } from "react-vapor";
import { Store } from "../Store";
import { sourcesTableId } from "../components/SourcesTable";

export class ISource {
    name: string;
    sourceType: string;
}

export class Sources {
    fetch(client: Coveo.Client): Promise<ISource[]> {
        return client.Sources.get();
    }
}

export const fetchSources = (sources: Sources) => {
    sources.fetch(window.CoveoClient)
        .then((pages: ISource[]) => {
            const byId = convertInitialCollectionToDataById(pages, "id");
            const allIds = Object.keys(byId);
            const displayedIds = allIds.slice(0, PER_PAGE_NUMBERS[0]);
            const totalEntries = allIds.length;
            const totalPages = Math.ceil(totalEntries / PER_PAGE_NUMBERS[0]);
            Store.dispatch(modifyState(
                sourcesTableId,
                (tableState: ITableState) => ({ ...tableState, data: { byId, allIds, displayedIds, totalEntries, totalPages } }),
                false
            ));
            Store.dispatch(turnOffLoading(getTableLoadingIds(sourcesTableId)));
        })
        .catch(() => {
            Store.dispatch(setIsInError(sourcesTableId, true));
            Store.dispatch(turnOffLoading(getTableLoadingIds(sourcesTableId)));
        });
};