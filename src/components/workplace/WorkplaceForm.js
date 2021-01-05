import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import ReactFlagsSelect from "react-flags-select";
import {
	setNewWorkplace,
	setNewWorkplaceStart,
	resetWorkplaceStatus,
} from "../../redux/workplace/actionCreators";
import { selectWorkplaceStatus } from "../../redux/workplace/selectors";
import { Button, Calendar, Input } from "../inputs";
import RequestResult from "../requestResult";
import styles from "./workplaces.module.scss";

function WorkplaceForm({ id, closeAccordion, workplaces }) {
	const [company, setCompany] = useState("");
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState();
	const [country, setCountry] = useState("");
	const [dateError, setDateError] = useState("");

	const dispatch = useDispatch();

	const workplaceStatus = useSelector(selectWorkplaceStatus);

	const handleCompany = useCallback((e) => {
		setCompany(e.target.value);
	}, []);
	const handleStartDateChange = useCallback((date) => {
		setStartDate(date);
	}, []);
	const handleEndDateChange = useCallback((date) => {
		setEndDate(date);
	}, []);
	const handleSelectCountry = useCallback((countryCode) => {
		setCountry(countryCode);
	}, []);

	function handleSubmit(e) {
		e.preventDefault();
		setDateError("");
		if (new Date(startDate) >= new Date(endDate)) {
			setDateError("Start date is greater than end date");
			return;
		}
		if (workplaces) {
			let dateChecking = Object.values(workplaces).some((workplace) => {
				const workingTillNow =
					(!workplace.endDate && !endDate) ||
					(!workplace.endDate &&
						new Date(workplace.startDate) <= new Date(endDate));
				const worked =
					workplace.endDate &&
					(new Date(workplace.startDate) <=
						new Date(startDate) <=
						new Date(workplace.endDate) ||
						new Date(startDate) <=
							new Date(workplace.startDate) <=
							new Date(endDate));
				return workingTillNow || worked;
			});
			if (dateChecking) {
				setDateError(
					"You should have only one workplace during the same period"
				);
				return;
			}
		}
		dispatch(setNewWorkplaceStart());
		const workplaceData = {
			startDate: startDate.toString(),
			country,
			company,
		};
		if (endDate) {
			workplaceData.endDate = endDate?.toString();
		}
		dispatch(setNewWorkplace(workplaceData, id));
		setTimeout(() => {
			closeAccordion();
			dispatch(resetWorkplaceStatus());
		}, 5000);
	}

	let workplaceStatusText;

	if (workplaceStatus === "successful") {
		workplaceStatusText = "New workbook has been successfully created";
	} else if (workplaceStatus === "failed") {
		workplaceStatusText = "Something went wrong! Please try again later";
	}

	const isButtonDisabled = company === "" || country === "";

	if (workplaceStatus) {
		return (
			<RequestResult status={workplaceStatus} text={workplaceStatusText} />
		);
	} else {
		return (
			<form className="forms" onSubmit={handleSubmit}>
				<Input
					id="company"
					label="Company"
					value={company}
					handleChange={handleCompany}
				/>
				<Calendar
					id="startDate"
					label="Start date"
					selectedDate={startDate}
					handleChange={handleStartDateChange}
				/>
				<Calendar
					id="endDate"
					label="End date"
					selectedDate={endDate}
					handleChange={handleEndDateChange}
					hasError={Boolean(dateError)}
					errorMessage={dateError}
				/>
				<div>
					<ReactFlagsSelect
						searchable={true}
						searchPlaceholder="Search for a country"
						selected={country}
						onSelect={handleSelectCountry}
						className={styles.workplaces__flagSelect}
					/>
				</div>
				<Button
					text="Add"
					type="submit"
					disabled={isButtonDisabled}
					rightAlign
				/>
			</form>
		);
	}
}

WorkplaceForm.propTypes = {
	id: PropTypes.string,
	closeAccordion: PropTypes.func,
	workplaces: PropTypes.objectOf(
		PropTypes.shape({
			country: PropTypes.string,
			company: PropTypes.string,
			startDate: PropTypes.string,
			endDate: PropTypes.string,
		})
	),
};

export default WorkplaceForm;
