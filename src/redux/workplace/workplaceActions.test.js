import * as actionTypes from "./actionTypes";
import * as actions from "./actionCreators";

describe("workbook actions", () => {
	it("should call resetDeleteStatus action", () => {
		const actionType = {
			type: actionTypes.RESET_DELETE_STATUS,
		};
		expect(actions.resetDeleteStatus()).toEqual(actionType);
	});

	it("should call resetWorkplaceStatus action", () => {
		const actionType = {
			type: actionTypes.RESET_WORKPLACE_STATUS,
		};
		expect(actions.resetWorkplaceStatus()).toEqual(actionType);
	});

	it("should call setNewWorkplaceStart action", () => {
		const actionType = {
			type: actionTypes.SET_NEW_WORKPLACE_START,
		};
		expect(actions.setNewWorkplaceStart()).toEqual(actionType);
	});
});
