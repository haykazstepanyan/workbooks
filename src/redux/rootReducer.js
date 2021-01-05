import { combineReducers } from "redux";
import authReducer from "./auth/reducers";
import workbookReducer from "./workbook/reducers";
import workspaceReducer from "./workspace/reducers";

const rootReducer = combineReducers({
	auth: authReducer,
	workbook: workbookReducer,
	workspace: workspaceReducer,
});

export default rootReducer;
