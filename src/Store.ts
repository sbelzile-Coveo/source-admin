import * as Redux from "redux";
import { IReactVaporState } from "react-vapor";
import { Reducers } from "./Reducers";
import thunk from 'redux-thunk';

export const Store: Redux.Store<IReactVaporState> = Redux.createStore(Reducers, Redux.applyMiddleware(thunk));
