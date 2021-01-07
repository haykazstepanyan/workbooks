import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { WorkbookForm } from "./";

describe("WorkbookForm component", () => {
	const mockStore = configureStore();
	const store = mockStore({
		workbook: {},
	});
	const { getByTestId } = render(
		<Provider store={store}>
			<WorkbookForm />
		</Provider>
	);
	const newWorkbook = getByTestId("workbook-form");
	it("should match component snapshot", () => {
		expect(newWorkbook).toMatchSnapshot();
	});
});
