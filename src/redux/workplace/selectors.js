import { createSelector } from "reselect";

const selectWorkplace = (state) => state.workplace;

export const selectWorkplaceStatus = createSelector(
	selectWorkplace,
	(workplace) => workplace.workplaceStatus
);

export const selectWorkplaces = createSelector(
	selectWorkplace,
	(workplace) => workplace.workplaces
);

export const selectWorkplaceError = createSelector(
	selectWorkplace,
	(workplace) => workplace.workplaceError
);
