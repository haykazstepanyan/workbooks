import { createSelector } from "reselect";

const selectAuth = (state) => state.auth;

export const selectUserData = createSelector(
	[selectAuth],
	(auth) => auth.userData
);

export const selectAuthError = createSelector(
	[selectAuth],
	(auth) => auth.authError
);
