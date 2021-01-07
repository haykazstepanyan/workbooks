import { render } from "@testing-library/react";
import Loader from "./";

describe("Loader component", () => {
	const { container } = render(<Loader />);
	const loader = container.querySelector(".loader");

	it("should render component", () => {
		expect(loader).toBeInTheDocument();
	});
});
