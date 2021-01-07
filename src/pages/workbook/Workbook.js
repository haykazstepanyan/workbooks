import { useCallback } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
	deleteWorkbook,
	resetDeleteStatus,
} from "../../redux/workbook/actionCreators";
import Accordion from "../../components/accordion";
import Workplaces from "../../components/workplace";
import Table from "../../components/table";
import styles from "./workbook.module.scss";

function Workbook({ workbook, workbookID, user }) {
	const {
		firstName,
		lastName,
		user_ID,
		Workplaces: workbookWorkplaces,
		...workbookRest
	} = workbook;

	const dispatch = useDispatch();

	const tableData = {
		...workbookRest,
		birthDate: new Date(workbookRest.birthDate).toDateString().slice(4),
	};

	let canDeleteWorkbook = true;
	if (user.type === "user") {
		canDeleteWorkbook = user_ID === user.id;
	}

	const handleDeleteWorkbook = useCallback(() => {
		dispatch(deleteWorkbook(workbookID));
		setTimeout(() => {
			dispatch(resetDeleteStatus());
		}, 5000);
	}, [dispatch, workbookID]);

	return (
		<div className={styles.workbook} data-testid="workbook">
			<Accordion
				rowName={`${firstName} ${lastName}`}
				fullWidth
				canDelete={canDeleteWorkbook}
				handleDelete={handleDeleteWorkbook}
			>
				<Table tableData={tableData} />
				<Workplaces
					workbookID={workbookID}
					workplaces={workbookWorkplaces}
					workbookUserID={user_ID}
					user={user}
				/>
			</Accordion>
		</div>
	);
}

Workbook.propTypes = {
	workbook: PropTypes.shape({
		birthDate: PropTypes.string,
		email: PropTypes.string,
		passport: PropTypes.string,
		Workplaces: PropTypes.object,
	}),
	workbookID: PropTypes.string,
	user: PropTypes.objectOf(PropTypes.string),
};

export default Workbook;
