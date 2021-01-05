import { combineReducers } from "redux";
import authReducer from "./auth/reducers";
import workbookReducer from "./workbook/reducers";
import workplaceReducer from "./workplace/reducers";

const rootReducer = combineReducers({
	auth: authReducer,
	workbook: workbookReducer,
	workplace: workplaceReducer,
});

export default rootReducer;
