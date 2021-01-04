import { createSelector } from "reselect";

const selectWorkbook = (state) => state.workbook;

export const selectWorkbooks = createSelector(
	[selectWorkbook],
	(workbook) => workbook.workbooks
);

export const selectWorkbookError = createSelector(
	[selectWorkbook],
	(workbook) => workbook.workbookError
);
