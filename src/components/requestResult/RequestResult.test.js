import { render } from "@testing-library/react";
import RequestResult from "./";

describe("RequestResult component", () => {
	it("should render successful response", () => {
		const { container } = render(<RequestResult status="successful" />);
		expect(
			container.querySelector(".requestResult_success")
		).toBeInTheDocument();
	});

	it("should render failed response", () => {
		const { container } = render(<RequestResult status="failed" />);
		expect(
			container.querySelector(".requestResult_failed")
		).toBeInTheDocument();
	});

	it("should render loader", () => {
		const { container } = render(<RequestResult status="pending" />);
		expect(container.querySelector(".loader")).toBeInTheDocument();
	});
});
