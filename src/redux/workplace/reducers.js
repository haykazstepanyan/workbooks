import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
	workplaces: null,
	workplaceStatus: "",
};

const workplaceReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case actionTypes.GET_WORKPLACES:
			return {
				...state,
				workplaces: payload.workplaces,
			};
		case actionTypes.SET_NEW_WORKPLACE_START:
			return {
				...state,
				workplaceStatus: "pending",
			};
		case actionTypes.SET_NEW_WORKPLACE_SUCCESS:
			return {
				...state,
				workplaceStatus: "successful",
			};
		case actionTypes.SET_NEW_WORKPLACE_ERROR:
			return {
				...state,
				workplaceStatus: "failed",
			};
		case actionTypes.RESET_WORKPLACE_STATUS:
			return {
				...state,
				workplaceStatus: "",
			};
		default:
			return state;
	}
};

export default workplaceReducer;
