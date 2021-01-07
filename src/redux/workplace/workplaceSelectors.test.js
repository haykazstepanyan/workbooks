import * as selectors from "./selectors";

describe("workbook selectors", () => {
	const state = {
		workplace: {
			workplaces: null,
			workplaceStatus: "",
		},
	};

	it("should return workplaceStatus selector", () => {
		expect(selectors.selectWorkplaceStatus(state)).toEqual(
			state.workplace.workplaceStatus
		);
	});
	it("should return workplaces selector", () => {
		expect(selectors.selectWorkplaces(state)).toEqual(
			state.workplace.workplaces
		);
	});
	it("should return workplaceError selector", () => {
		expect(selectors.selectWorkplaceError(state)).toEqual(
			state.workplace.workplaceError
		);
	});
});
