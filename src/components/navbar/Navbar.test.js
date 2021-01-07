import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Navbar from "./";

describe("Navbar component", () => {
	const mockStore = configureStore();
	const store = mockStore({});
	const { getByTestId } = render(
		<Provider store={store}>
			<Navbar userType="test" />
		</Provider>
	);
	const navbar = getByTestId("navbar");

	it("should render component", () => {
		expect(navbar).toBeInTheDocument();
	});

	it("should have a user type", () => {
		expect(navbar).toHaveTextContent("Hello test");
	});
});
