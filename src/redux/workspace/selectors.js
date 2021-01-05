import { createSelector } from "reselect";

const selectWorkspace = (state) => state.workspace;

export const selectWorkspaceStatus = createSelector(
	[selectWorkspace],
	(workspace) => workspace.workspaceStatus
);

export const selectWorkspaces = createSelector(
	[selectWorkspace],
	(workspace) => workspace.workspaces
);

export const selectWorkspaceError = createSelector(
	[selectWorkspace],
	(workspace) => workspace.workspaceError
);
