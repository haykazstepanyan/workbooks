import PropTypes from "prop-types";
import classnames from "classnames";
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
	} = props;

	const divClass = classnames(styles.inputs, {
		[styles.inputs_errors]: hasError,
	});

	return (
		<div className={divClass}>
			{hasError && <span>{errorMessage}</span>}
			<input
				type={type}
				id={id}
				value={value}
				onChange={handleChange}
				className={styles.inputs__field}
				autoComplete={autoComplete}
			/>
			<label htmlFor={id} className={styles.inputs__labels}>
				{label}
			</label>
		</div>
	);
}

Input.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
	id: PropTypes.string,
	handleChange: PropTypes.func,
	hasError: PropTypes.bool,
	errorMessage: PropTypes.string,
	autoComplete: PropTypes.string,
};

export default Input;
