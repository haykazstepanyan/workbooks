import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
	workbooks: null,
	workbookStatus: "",
	deleteStatus: "",
};

const workbookReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case actionTypes.GET_WORKBOOKS:
			return {
				...state,
				workbooks: payload.workbooks,
			};
		case actionTypes.SET_NEW_WORKBOOK_START:
			return {
				...state,
				workbookStatus: "pending",
			};
		case actionTypes.SET_NEW_WORKBOOK_SUCCESS:
			return {
				...state,
				workbookStatus: "successful",
			};
		case actionTypes.SET_NEW_WORKBOOK_ERROR:
			return {
				...state,
				workbookStatus: "failed",
			};
		case actionTypes.RESET_WORKBOOK_STATUS:
			return {
				...state,
				workbookStatus: "",
			};
		case actionTypes.DELETE_WORKBOOK_SUCCESS:
			return {
				...state,
				deleteStatus: "successful",
			};
		case actionTypes.DELETE_WORKBOOK_ERROR:
			return {
				...state,
				deleteStatus: "failed",
			};
		case actionTypes.RESET_DELETE_STATUS:
			return {
				...state,
				deleteStatus: "",
			};
		default:
			return state;
	}
};

export default workbookReducer;
