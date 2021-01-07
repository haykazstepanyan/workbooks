import * as actionTypes from "./actionTypes";
import * as actions from "./actionCreators";

describe("workbook actions", () => {
	it("should call resetDeleteStatus action", () => {
		const actionType = {
			type: actionTypes.RESET_DELETE_STATUS,
		};
		expect(actions.resetDeleteStatus()).toEqual(actionType);
	});

	it("should call resetWorkbookStatus action", () => {
		const actionType = {
			type: actionTypes.RESET_WORKBOOK_STATUS,
		};
		expect(actions.resetWorkbookStatus()).toEqual(actionType);
	});

	it("should call setNewWorkbookStart action", () => {
		const actionType = {
			type: actionTypes.SET_NEW_WORKBOOK_START,
		};
		expect(actions.setNewWorkbookStart()).toEqual(actionType);
	});
});
