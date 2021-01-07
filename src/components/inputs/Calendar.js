import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import WrapperBox from "./WrapperBox";
import styles from "./inputs.module.scss";

function Calendar(props) {
	const {
		selectedDate,
		handleChange,
		id,
		label,
		hasError,
		errorMessage,
		zeroMargin,
		isDisabled,
	} = props;
	return (
		<WrapperBox
			id={id}
			label={label}
			hasError={hasError}
			errorMessage={errorMessage}
			zeroMargin={zeroMargin}
		>
			<DatePicker
				selected={selectedDate}
				onChange={handleChange}
				id={id}
				showYearDropdown
				scrollableYearDropdown
				dateFormatCalendar="MMMM"
				yearDropdownItemNumber={15}
				className={styles.inputs__field}
				disabled={isDisabled}
			/>
		</WrapperBox>
	);
}

Calendar.propTypes = {
	selectedDate: PropTypes.instanceOf(Date),
	handleChange: PropTypes.func.isRequired,
	id: PropTypes.string,
	label: PropTypes.string,
	hasError: PropTypes.bool,
	errorMessage: PropTypes.string,
	zeroMargin: PropTypes.bool,
	isDisabled: PropTypes.bool,
};

export default Calendar;
