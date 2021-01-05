import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
	setNewWorkbookStart,
	setNewWorkbook,
	resetWorkbookStatus,
} from "../../redux/workbook/actionCreators";
import { selectWorkbookStatus } from "../../redux/workbook/selectors";
import "react-datepicker/dist/react-datepicker.css";
import RequestResult from "../requestResult";
import { Input, Button, Calendar } from "../inputs";

function WorkbookForm({ closeAccordion, workbooks }) {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [passport, setPassport] = useState("");
	const [email, setEmail] = useState("");
	const [birthDate, setBirthDate] = useState(new Date());
	const [emailError, setEmailError] = useState("");
	const [birthDateError, setBirthDateError] = useState(false);
	const [passportError, setPassportError] = useState(false);

	const dispatch = useDispatch();

	const workbookStatus = useSelector(selectWorkbookStatus);

	const handleFirstNameChange = useCallback((e) => {
		let value = e.target.value;
		setFirstName(value.replace(/[^A-Za-z]/gi, ""));
	}, []);

	const handleLastNameChange = useCallback((e) => {
		let value = e.target.value;
		setLastName(value.replace(/[^A-Za-z]/gi, ""));
	}, []);
	const handlePassportChange = useCallback((e) => {
		setPassport(e.target.value);
	}, []);
	const handleDateChange = useCallback((date) => {
		setBirthDate(date);
	}, []);
	const handleEmailChange = useCallback((e) => {
		setEmail(e.target.value);
	}, []);

	function handleFormSubmit(e) {
		e.preventDefault();
		if (!checkEmail()) {
			setEmailError("Invalid email type");
			return;
		}
		if (!checkIsAdult()) {
			setBirthDateError(true);
			return;
		}
		if (!checkIsUnique()) {
			return;
		}
		dispatch(setNewWorkbookStart());
		const workBookData = {
			firstName,
			lastName,
			passport,
			email: email.toLowerCase(),
			birthDate: birthDate.toString(),
		};
		dispatch(setNewWorkbook(workBookData));
		setTimeout(() => {
			closeAccordion();
			dispatch(resetWorkbookStatus());
		}, 5000);
	}

	function checkEmail() {
		setEmailError("");
		let mailFormat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		return email.match(mailFormat);
	}

	function checkIsAdult() {
		setBirthDateError(false);
		const diff = new Date(Date.now() - +new Date(birthDate));
		const checkAge = Math.floor(+diff / 31536000000);
		return checkAge >= 18;
	}
	function checkIsUnique() {
		let isUnique = true;
		setEmailError("");
		setPassportError(false);
		if (workbooks) {
			Object.values(workbooks).map((workbook) => {
				if (email === workbook.email) {
					isUnique = false;
					setEmailError(" This email has already been used");
				}
				if (passport === workbook.passport) {
					isUnique = false;
					setPassportError(true);
				}
				return null;
			});
		}
		return isUnique;
	}

	const isButtonDisabled =
		firstName === "" || lastName === "" || passport === "" || email === "";

	if (workbookStatus) {
		return <RequestResult status={workbookStatus} name="workbook" />;
	} else {
		return (
			<form className="forms" onSubmit={handleFormSubmit}>
				<Input
					label="First Name"
					id="firstName"
					value={firstName}
					handleChange={handleFirstNameChange}
					pattern="[a-zA-Z]+"
				/>
				<Input
					label="Last Name"
					id="lastName"
					value={lastName}
					handleChange={handleLastNameChange}
					pattern="[a-zA-Z]+"
				/>
				<Input
					label="Passport"
					id="passport"
					value={passport}
					handleChange={handlePassportChange}
					hasError={passportError}
					errorMessage="This passport has already been used"
				/>
				<Input
					type="email"
					label="Email"
					id="email"
					value={email}
					handleChange={handleEmailChange}
					hasError={Boolean(emailError)}
					errorMessage={emailError}
				/>
				<Calendar
					selectedDate={birthDate}
					handleChange={handleDateChange}
					id="birthDate"
					label="Birth date"
					hasError={birthDateError}
					errorMessage="Only 18 over is allowed!"
				/>
				<Button
					type="submit"
					disabled={isButtonDisabled}
					text="Add"
					rightAlign
				/>
			</form>
		);
	}
}

WorkbookForm.propTypes = {
	closeAccordion: PropTypes.func,
	workbooks: PropTypes.shape({
		birthDate: PropTypes.string,
		email: PropTypes.string,
		passport: PropTypes.string,
		Workspaces: PropTypes.object,
	}),
};

export default WorkbookForm;
