import { combineReducers } from "redux";
import authReducer from "./auth/reducers";
import workbookReducer from "./workbook/reducers";

const rootReducer = combineReducers({
	auth: authReducer,
	workbook: workbookReducer,
});

export default rootReducer;
