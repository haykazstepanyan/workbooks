import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import ReactFlagsSelect from "react-flags-select";
import {
	setNewWorkspace,
	setNewWorkspaceStart,
	resetWorkspaceStatus,
} from "../../redux/workspace/actionCreators";
import { selectWorkspaceStatus } from "../../redux/workspace/selectors";
import { Button, Calendar, Input } from "../inputs";
import styles from "./workspaces.module.scss";
import RequestResult from "../requestResult";

function WorkspaceForm({ id, closeAccordion, workspaces }) {
	const [company, setCompany] = useState("");
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState();
	const [country, setCountry] = useState("");
	const [dateError, setDateError] = useState("");

	const dispatch = useDispatch();

	const workspaceStatus = useSelector(selectWorkspaceStatus);

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
		if (workspaces) {
			let dateChecking = Object.values(workspaces).some((workspace) => {
				const workingTillNow =
					!workspace.endDate &&
					new Date(workspace.startDate) <= new Date(endDate);
				const worked =
					workspace.endDate &&
					(new Date(workspace.startDate) <=
						new Date(startDate) <=
						new Date(workspace.endDate) ||
						new Date(startDate) <=
							new Date(workspace.startDate) <=
							new Date(endDate));
				return workingTillNow || worked;
			});
			if (dateChecking) {
				setDateError(
					"You should have only one workspace during the same period"
				);
				return;
			}
		}
		dispatch(setNewWorkspaceStart());
		const workspaceData = {
			startDate: startDate.toString(),
			country,
			company,
		};
		if (endDate) {
			workspaceData.endDate = endDate?.toString();
		}
		dispatch(setNewWorkspace(workspaceData, id));
		setTimeout(() => {
			closeAccordion();
			dispatch(resetWorkspaceStatus());
		}, 5000);
	}

	const isButtonDisabled = company === "" || country === "";

	if (workspaceStatus) {
		return <RequestResult status={workspaceStatus} name="workspace" />;
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
						className={styles.workspaces__flagSelect}
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

WorkspaceForm.propTypes = {
	id: PropTypes.string,
	closeAccordion: PropTypes.func,
	workspaces: PropTypes.objectOf(
		PropTypes.shape({
			country: PropTypes.string,
			company: PropTypes.string,
			startDate: PropTypes.string,
			endDate: PropTypes.string,
		})
	),
};

export default WorkspaceForm;
