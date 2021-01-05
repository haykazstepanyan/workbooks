import { createSelector } from "reselect";

const selectWorkbook = (state) => state.workbook;

export const selectWorkbookStatus = createSelector(
	[selectWorkbook],
	(workbook) => workbook.workbookStatus
);

export const selectWorkbooks = createSelector(
	[selectWorkbook],
	(workbook) => workbook.workbooks
);

export const selectWorkbookError = createSelector(
	[selectWorkbook],
	(workbook) => workbook.workbookError
);
