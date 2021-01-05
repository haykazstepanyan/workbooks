import PropTypes from "prop-types";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
	deleteWorkplace,
	resetDeleteStatus,
} from "../../redux/workplace/actionCreators";
import Accordion from "../accordion";
import Table from "../table";
import styles from "./workplaces.module.scss";

function Workplace({ workplaceID, workbookID, workplace, canDelete }) {
	const { company, ...workplaceRest } = workplace;

	const dispatch = useDispatch();

	const tableData = {
		...workplaceRest,
		startDate: new Date(workplaceRest.startDate).toDateString().slice(4),
	};

	if (workplaceRest.endDate) {
		tableData.endDate = new Date(workplaceRest.endDate).toDateString().slice(4);
	}

	const handleDeleteWorkplace = useCallback(() => {
		dispatch(deleteWorkplace(workplaceID, workbookID));
		setTimeout(() => {
			dispatch(resetDeleteStatus());
		}, 5000);
	}, [dispatch, workplaceID, workbookID]);

	return (
		<div className={styles.workplace}>
			<Accordion
				rowName={workplace.company}
				fullWidth
				canDelete={canDelete}
				handleDelete={handleDeleteWorkplace}
			>
				<Table tableData={tableData} />
			</Accordion>
		</div>
	);
}

Workplace.propTypes = {
	workplaceID: PropTypes.string,
	workbookID: PropTypes.string,
	workplace: PropTypes.objectOf(PropTypes.string),
	canDelete: PropTypes.bool,
};

export default Workplace;
