import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Workplaces from "./";
import Workplace from "./Workplace";

describe("workplace folder components", () => {
	const mockStore = configureStore();
	const store = mockStore({ workplace: {} });

	describe("Workplaces component", () => {
		it("should match component snapshot", () => {
			const { getByTestId } = render(
				<Provider store={store}>
					<Workplaces user={{}} />
				</Provider>
			);
			const workplaces = getByTestId("workplaces");
			expect(workplaces).toMatchSnapshot();
		});
	});

	describe("Workplace component", () => {
		it("should match Workplace component snapshot", () => {
			const { getByTestId } = render(
				<Provider store={store}>
					<Workplace />
				</Provider>
			);
			const workplace = getByTestId("workplace");
			expect(workplace).toMatchSnapshot();
		});
	});
});
