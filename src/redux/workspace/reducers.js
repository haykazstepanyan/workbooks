import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
	workspaces: null,
	workspaceStatus: "",
};

const workspaceReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case actionTypes.GET_WORKSPACES:
			return {
				...state,
				workspaces: payload.workspaces,
			};
		case actionTypes.SET_NEW_WORKSPACE_START:
			return {
				...state,
				workspaceStatus: "pending",
			};
		case actionTypes.SET_NEW_WORKSPACE_SUCCESS:
			return {
				...state,
				workspaceStatus: "successful",
			};
		case actionTypes.SET_NEW_WORKSPACE_ERROR:
			return {
				...state,
				workspaceStatus: "failed",
			};
		case actionTypes.RESET_WORKSPACE_STATUS:
			return {
				...state,
				workspaceStatus: "",
			};
		default:
			return state;
	}
};

export default workspaceReducer;
