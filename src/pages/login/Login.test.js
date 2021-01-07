import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Login from "./";

describe("workplace folder components", () => {
	const mockStore = configureStore();
	const store = mockStore({ auth: {} });
	const { getByTestId } = render(
		<Provider store={store}>
			<Login user={{ type: "" }} />
		</Provider>
	);
	const login = getByTestId("login");

	it("should match component snapshot", () => {
		expect(login).toMatchSnapshot();
	});
});
