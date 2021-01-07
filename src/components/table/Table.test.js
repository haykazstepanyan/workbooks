import { render } from "@testing-library/react";
import RequestResult from "./";

describe("Table component", () => {
	const { getByTestId } = render(<RequestResult />);
	const table = getByTestId("table");
	it("should render component", () => {
		expect(table).toBeInTheDocument();
	});
});
