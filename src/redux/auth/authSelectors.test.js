import * as selectors from "./selectors";

describe("auth selectors", () => {
	const state = {
		auth: {
			authError: null,
			isSignedIn: false,
			userData: {
				status: "pending",
			},
			allUsers: null,
		},
	};

	it("should return userData selector", () => {
		expect(selectors.selectUserData(state)).toEqual(state.auth.userData);
	});
	it("should return authError selector", () => {
		expect(selectors.selectAuthError(state)).toEqual(state.auth.authError);
	});
});
