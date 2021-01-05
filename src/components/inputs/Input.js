import PropTypes from "prop-types";
import WrapperBox from "./WrapperBox";
import styles from "./inputs.module.scss";

function Input(props) {
	const {
		type = "text",
		label,
		value,
		handleChange,
		id,
		hasError,
		errorMessage,
		autoComplete,
		pattern = null,
	} = props;

	return (
		<WrapperBox
			id={id}
			label={label}
			hasError={hasError}
			errorMessage={errorMessage}
		>
			<input
				type={type}
				id={id}
				value={value}
				onChange={handleChange}
				className={styles.inputs__field}
				autoComplete={autoComplete}
				pattern={pattern}
			/>
		</WrapperBox>
	);
}

Input.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string.isRequired,
	id: PropTypes.string,
	handleChange: PropTypes.func.isRequired,
	hasError: PropTypes.bool,
	errorMessage: PropTypes.string,
	autoComplete: PropTypes.string,
	pattern: PropTypes.string,
};

export default Input;
