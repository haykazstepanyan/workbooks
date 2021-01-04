import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setNewWorkbookStart,
	setNewWorkbook,
	resetWorkbookStatus,
} from "../../redux/workbook/actionCreators";
import "react-datepicker/dist/react-datepicker.css";
import WorkbookResult from "./WorkbookResult";
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

	const workbookStatus = useSelector((state) => state.workbook.workbookStatus);

	function handleFirstNameChange(e) {
		let value = e.target.value;
		setFirstName(value.replace(/[^A-Za-z]/gi, ""));
	}
	function handleLastNameChange(e) {
		let value = e.target.value;
		setLastName(value.replace(/[^A-Za-z]/gi, ""));
	}
	function handlePassportChange(e) {
		setPassport(e.target.value);
	}
	function handleDateChange(date) {
		setBirthDate(date);
	}
	function handleEmailChange(e) {
		setEmail(e.target.value);
	}

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
			email: email.toLocaleLowerCase(),
			birthDate,
		};
		dispatch(setNewWorkbook(workBookData));
		setTimeout(() => {
			closeAccordion();
			dispatch(resetWorkbookStatus());
		}, 5000);
	}

	function checkEmail() {
		setEmailError(false);
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
		setEmailError(false);
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
		return <WorkbookResult status={workbookStatus} />;
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
					hasError={emailError}
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

export default WorkbookForm;
