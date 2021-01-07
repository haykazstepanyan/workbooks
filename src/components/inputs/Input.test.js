import { render, fireEvent } from "@testing-library/react";
import { Input } from ".";

describe("Input component", () => {
	const mockFn = jest.fn();
	const { queryByTestId } = render(
		<Input value="" handleChange={mockFn} label="test" />
	);
	const input = queryByTestId("input");

	it("should render component", () => {
		expect(input).toBeInTheDocument();
	});

	it("should change input value", () => {
		fireEvent.change(input, { target: { value: "test" } });
		expect(input).toHaveValue("test");
	});
});
