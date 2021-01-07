import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./inputs.module.scss";

function WrapperBox(props) {
	const {
		children,
		label,
		id,
		hasError,
		errorMessage,
		rowFlex,
		zeroMargin,
	} = props;

	const divClass = classnames(styles.inputs, {
		[styles.inputs_errors]: hasError,
		[styles.inputs_directionRow]: rowFlex,
		[styles.inputs_zeroMargin]: zeroMargin,
	});

	return (
		<div className={divClass} data-testid="wrapper-box">
			{hasError && (
				<span className={styles.inputs__errorText} data-testid="error-testing">
					{errorMessage}
				</span>
			)}
			{children}
			<label htmlFor={id} className={styles.inputs__labels} data-testid="label">
				{label}
			</label>
		</div>
	);
}

WrapperBox.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string,
	hasError: PropTypes.bool,
	errorMessage: PropTypes.string,
	rowFlex: PropTypes.bool,
	zeroMargin: PropTypes.bool,
};

export default WrapperBox;
