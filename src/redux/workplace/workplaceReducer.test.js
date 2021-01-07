import * as actionTypes from "./actionTypes";
import reducer from "./reducers";

describe("workplace reducer", () => {
	const initialState = {
		workplaces: null,
		workplaceStatus: "",
	};

	it("should return initial state", () => {
		expect(reducer(undefined, { type: "test" })).toEqual(initialState);
	});

	it("should return GET_WORKPLACES", () => {
		const state = {
			workplaces: {},
		};
		expect(
			reducer(initialState, {
				type: actionTypes.GET_WORKPLACES,
				payload: { ...state },
			})
		).toEqual({ ...initialState, ...state });
	});

	it("should return SET_NEW_WORKPLACE_START", () => {
		const state = {
			workplaceStatus: "pending",
		};
		expect(
			reducer(initialState, {
				type: actionTypes.SET_NEW_WORKPLACE_START,
				payload: state,
			})
		).toEqual({ ...initialState, ...state });
	});

	it("should return SET_NEW_WORKPLACE_SUCCESS", () => {
		const state = {
			workplaceStatus: "successful",
		};
		expect(
			reducer(initialState, {
				type: actionTypes.SET_NEW_WORKPLACE_SUCCESS,
				payload: state,
			})
		).toEqual({ ...initialState, ...state });
	});

	it("should return SET_NEW_WORKPLACE_ERROR", () => {
		const state = {
			workplaceStatus: "failed",
		};
		expect(
			reducer(initialState, {
				type: actionTypes.SET_NEW_WORKPLACE_ERROR,
				payload: state,
			})
		).toEqual({ ...initialState, ...state });
	});

	it("should return RESET_WORKPLACE_STATUS", () => {
		const state = {
			workplaceStatus: "",
		};
		expect(
			reducer(initialState, {
				type: actionTypes.RESET_WORKPLACE_STATUS,
				payload: state,
			})
		).toEqual({ ...initialState, ...state });
	});
});
