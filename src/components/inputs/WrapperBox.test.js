import { render } from "@testing-library/react";
import WrapperBox from "./WrapperBox";

describe("WrapperBox component", () => {
	const { queryByTestId } = render(<WrapperBox label="label test" />);
	const wrapperBox = queryByTestId("wrapper-box");

	it("should render component", () => {
		expect(wrapperBox).toBeInTheDocument();
	});

	it("should have a label", () => {
		expect(wrapperBox).toHaveTextContent("label test");
	});

	it("should not have error box", () => {
		const errorBox = queryByTestId("error-testing");
		expect(errorBox).not.toBeTruthy();
	});

	it("have an error box", () => {
		const { container } = render(<WrapperBox hasError errorMessage="test" />);
		const errorBox = container.querySelector(".inputs__errorText");
		expect(errorBox).toBeInTheDocument();
	});
});
