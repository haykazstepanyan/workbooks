import * as selectors from "./selectors";

describe("workbook selectors", () => {
	const state = {
		workbook: {
			workbooks: null,
			workbookStatus: "",
			deleteStatus: "",
		},
	};

	it("should return workbookStatus selector", () => {
		expect(selectors.selectWorkbookStatus(state)).toEqual(
			state.workbook.workbookStatus
		);
	});
	it("should return deleteStatus selector", () => {
		expect(selectors.selectDeleteStatus(state)).toEqual(
			state.workbook.deleteStatus
		);
	});
	it("should return workbooks selector", () => {
		expect(selectors.selectWorkbooks(state)).toEqual(state.workbook.workbooks);
	});
	it("should return workbookError selector", () => {
		expect(selectors.selectWorkbookError(state)).toEqual(
			state.workbook.workbookError
		);
	});
});
