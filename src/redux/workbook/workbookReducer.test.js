import * as actionTypes from "./actionTypes";
import reducer from "./reducers";

describe("workbook reducer", () => {
	const initialState = {
		workbooks: null,
		workbookStatus: "",
		deleteStatus: "",
	};

	it("should return initial state", () => {
		expect(reducer(undefined, { type: "test" })).toEqual(initialState);
	});

	it("should return GET_WORKBOOKS", () => {
		const state = {
			workbooks: {},
		};
		expect(
			reducer(initialState, {
				type: actionTypes.GET_WORKBOOKS,
				payload: { ...state },
			})
		).toEqual({ ...initialState, ...state });
	});

	it("should return SET_NEW_WORKBOOK_START", () => {
		const state = {
			workbookStatus: "pending",
		};
		expect(
			reducer(initialState, {
				type: actionTypes.SET_NEW_WORKBOOK_START,
				payload: state,
			})
		).toEqual({ ...initialState, ...state });
	});

	it("should return SET_NEW_WORKBOOK_SUCCESS", () => {
		const state = {
			workbookStatus: "successful",
		};
		expect(
			reducer(initialState, {
				type: actionTypes.SET_NEW_WORKBOOK_SUCCESS,
				payload: state,
			})
		).toEqual({ ...initialState, ...state });
	});

	it("should return SET_NEW_WORKBOOK_ERROR", () => {
		const state = {
			workbookStatus: "failed",
		};
		expect(
			reducer(initialState, {
				type: actionTypes.SET_NEW_WORKBOOK_ERROR,
				payload: state,
			})
		).toEqual({ ...initialState, ...state });
	});

	it("should return RESET_WORKBOOK_STATUS", () => {
		const state = {
			workbookStatus: "",
		};
		expect(
			reducer(initialState, {
				type: actionTypes.RESET_WORKBOOK_STATUS,
				payload: state,
			})
		).toEqual({ ...initialState, ...state });
	});

	it("should return DELETE_WORKBOOK_SUCCESS", () => {
		const state = {
			deleteStatus: "successful",
		};
		expect(
			reducer(initialState, {
				type: actionTypes.DELETE_WORKBOOK_SUCCESS,
				payload: state,
			})
		).toEqual({ ...initialState, ...state });
	});

	it("should return DELETE_WORKBOOK_ERROR", () => {
		const state = {
			deleteStatus: "failed",
		};
		expect(
			reducer(initialState, {
				type: actionTypes.DELETE_WORKBOOK_ERROR,
				payload: state,
			})
		).toEqual({ ...initialState, ...state });
	});

	it("should return RESET_DELETE_STATUS", () => {
		const state = {
			deleteStatus: "",
		};
		expect(
			reducer(initialState, {
				type: actionTypes.RESET_DELETE_STATUS,
				payload: state,
			})
		).toEqual({ ...initialState, ...state });
	});
});
