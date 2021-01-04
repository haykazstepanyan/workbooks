import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./inputs.module.scss";

function WrapperBox(props) {
	const { children, label, id, hasError, errorMessage } = props;

	const divClass = classnames(styles.inputs, {
		[styles.inputs_errors]: hasError,
	});

	return (
		<div className={divClass}>
			{hasError && <span>{errorMessage}</span>}
			{children}
			<label htmlFor={id} className={styles.inputs__labels}>
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
};

export default WrapperBox;
