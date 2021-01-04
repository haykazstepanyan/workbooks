import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
	authError: null,
	isSignedIn: false,
	userData: {
		status: "pending",
	},
	allUsers: null,
};

const authReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case actionTypes.SIGN_IN_SUCCESS:
			return {
				...state,
				authError: null,
				isSignedIn: true,
			};
		case actionTypes.SIGN_IN_ERROR:
			return {
				...state,
				authError: payload.error,
				userData: null,
			};
		case actionTypes.SET_SIGNED_IN_USER_DATA:
			return {
				...state,
				userData: payload.userData,
				isSignedIn: false,
			};
		case actionTypes.USER_LOGOUT:
			return {
				...state,
				userData: null,
				authError: null,
			};
		default:
			return state;
	}
};

export default authReducer;
