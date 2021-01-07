import * as actionTypes from "./actionTypes";
import reducer from "./reducers";

describe("auth reducer", () => {
	const initialState = {
		authError: null,
		isSignedIn: false,
		userData: {
			status: "pending",
		},
		allUsers: null,
	};
	it("should return initial state", () => {
		expect(reducer(undefined, { type: "test" })).toEqual(initialState);
	});

	it("should return SIGN_IN_SUCCESS", () => {
		const state = {
			authError: null,
			isSignedIn: true,
		};
		expect(
			reducer(initialState, {
				type: actionTypes.SIGN_IN_SUCCESS,
				payload: state,
			})
		).toEqual({ ...initialState, ...state });
	});

	it("should return SIGN_IN_ERROR", () => {
		const state = {
			authError: "test",
			userData: null,
		};
		expect(
			reducer(initialState, {
				type: actionTypes.SIGN_IN_ERROR,
				payload: {
					error: state.authError,
					userData: state.userData,
				},
			})
		).toEqual({ ...initialState, ...state });
	});

	it("should return SET_SIGNED_IN_USER_DATA", () => {
		const state = {
			userData: {
				status: "pending",
			},
			isSignedIn: false,
		};
		expect(
			reducer(initialState, {
				type: actionTypes.SET_SIGNED_IN_USER_DATA,
				payload: { ...state, userData: state.userData },
			})
		).toEqual({ ...initialState, ...state });
	});

	it("should return USER_LOGOUT", () => {
		const state = {
			userData: null,
			authError: null,
		};
		expect(
			reducer(initialState, {
				type: actionTypes.USER_LOGOUT,
				payload: { ...state },
			})
		).toEqual({ ...initialState, ...state });
	});
});
