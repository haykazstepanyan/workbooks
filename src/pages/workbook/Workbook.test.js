import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Workbooks from "./";
import Workbook from "./Workbook";

describe("workbook pages components", () => {
	const mockStore = configureStore([thunk]);
	const store = mockStore({
		workbook: {},
		auth: {
			userData: {},
		},
		workplace: {},
	});

	describe("Workbooks component", () => {
		it("should match Workbooks component snapshot", () => {
			const { getByTestId } = render(
				<Provider store={store}>
					<Workbooks />
				</Provider>
			);
			const workbooks = getByTestId("workbooks");
			expect(workbooks).toMatchSnapshot();
		});
	});

	describe("Workbook component", () => {
		it("should match Workbook component snapshot", () => {
			const { getByTestId } = render(
				<Provider store={store}>
					<Workbook workbook={{}} user={{}} />
				</Provider>
			);
			const workbook = getByTestId("workbook");
			expect(workbook).toMatchSnapshot();
		});
	});
});
