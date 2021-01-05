import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./inputs.module.scss";

function Button(props) {
	const {
		type = "button",
		text,
		handleClick = () => null,
		disabled,
		isTransparent,
		rightAlign,
		centerAlign,
		redColored,
		defaultColored,
	} = props;

	const buttonClass = classnames(styles.buttons, {
		[styles.buttons_transparent]: isTransparent,
		[styles.buttons_red]: redColored,
		[styles.buttons_default]: defaultColored,
	});

	const divClass = classnames({
		[styles.buttons_rightAlign]: rightAlign,
		[styles.buttons_centerAlign]: centerAlign,
	});

	return (
		<div className={divClass}>
			<button
				type={type}
				onClick={handleClick}
				className={buttonClass}
				disabled={disabled}
			>
				{text}
			</button>
		</div>
	);
}

Button.propTypes = {
	type: PropTypes.string,
	text: PropTypes.string.isRequired,
	handleClick: PropTypes.func,
	disabled: PropTypes.bool,
	rightAlign: PropTypes.bool,
	centerAlign: PropTypes.bool,
	isTransparent: PropTypes.bool,
	redColored: PropTypes.bool,
	defaultColored: PropTypes.bool,
};

export default Button;
