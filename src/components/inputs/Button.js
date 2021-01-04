import PropTypes from "prop-types";
import styles from "./inputs.module.scss";

function Button(props) {
	const { type = "button", text, handleClick = () => null, disabled } = props;
	return (
		<button
			type={type}
			onClick={handleClick}
			className={styles.buttons}
			disabled={disabled}
		>
			{text}
		</button>
	);
}

Button.propTypes = {
	type: PropTypes.string,
	text: PropTypes.string,
	handleClick: PropTypes.func,
	disabled: PropTypes.bool,
};

export default Button;
