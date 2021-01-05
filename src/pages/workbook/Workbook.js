import PropTypes from "prop-types";
import Accordion from "../../components/accordion";
import Workspaces from "../../components/workspace/Workspaces";
import Table from "../../components/table";
import styles from "./workbook.module.scss";

function Workbook({ workbook, workbookID }) {
	const {
		firstName,
		lastName,
		Workspaces: workbookWorkspaces,
		...workbookRest
	} = workbook;

	const tableData = {
		...workbookRest,
		birthDate: new Date(workbookRest.birthDate).toDateString().slice(4),
	};

	return (
		<div className={styles.workbook}>
			<Accordion rowName={`${firstName} ${lastName}`} fullWidth>
				<Table tableData={tableData} />
				<Workspaces id={workbookID} workspaces={workbookWorkspaces} />
			</Accordion>
		</div>
	);
}

Workbook.propTypes = {
	workbook: PropTypes.shape({
		birthDate: PropTypes.string,
		email: PropTypes.string,
		passport: PropTypes.string,
		Workspaces: PropTypes.object,
	}),
	workbookID: PropTypes.string,
};

export default Workbook;
