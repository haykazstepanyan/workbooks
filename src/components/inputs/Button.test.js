import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
	const onClick = jest.fn();

	const { queryByTestId } = render(
		<Button text="test" handleClick={onClick} />
	);
	const button = queryByTestId("button");

	it("should render component", () => {
		expect(button).toBeInTheDocument();
	});

	it("should have correct text", () => {
		expect(button).toHaveTextContent("test");
	});

	it("should be disabled", () => {
		const { queryByTestId } = render(
			<Button text="test" handleClick={onClick} disabled />
		);
		const disabledButton = queryByTestId("button");
		expect(disabledButton).toBeDisabled();
	});
});
