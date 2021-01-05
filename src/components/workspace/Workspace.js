import PropTypes from "prop-types";

import styles from "./workspaces.module.scss";
import Accordion from "../accordion";
import Table from "../table";

function Workspace({ workspaceID, workspace }) {
	const { company, ...workspaceRest } = workspace;
	const tableData = {
		...workspaceRest,
		startDate: new Date(workspaceRest.startDate).toDateString().slice(4),
	};

	if (workspaceRest.endDate) {
		tableData.endDate = new Date(workspaceRest.endDate).toDateString().slice(4);
	}

	return (
		<div className={styles.workspace}>
			<Accordion rowName={workspace.company} fullWidth>
				<Table tableData={tableData} />
			</Accordion>
		</div>
	);
}

Workspace.propTypes = {
	workspaceID: PropTypes.string,
	workspace: PropTypes.objectOf(PropTypes.string),
};

export default Workspace;
