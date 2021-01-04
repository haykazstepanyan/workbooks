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
	} = props;

	const buttonClass = classnames(styles.buttons, {
		[styles.buttons_transparent]: isTransparent,
	});

	const divClass = classnames({
		[styles.buttons_rightAlign]: rightAlign,
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
	text: PropTypes.string,
	handleClick: PropTypes.func,
	disabled: PropTypes.bool,
	rightAlign: PropTypes.bool,
};

export default Button;
