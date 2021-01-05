import PropTypes from "prop-types";
import AddNewWorkspace from "./AddNewWorkspace";
import Workspace from "./Workspace";
import styles from "./workspaces.module.scss";

function Workspaces({ id, workspaces }) {
	return (
		<>
			<div className={styles.workspaces}>
				<AddNewWorkspace id={id} workspaces={workspaces} />
				{workspaces &&
					Object.entries(workspaces).map(([key, value]) => (
						<Workspace workspaceID={key} workspace={value} key={key} />
					))}
			</div>
		</>
	);
}

Workspaces.propTypes = {
	id: PropTypes.string,
	workspaces: PropTypes.objectOf(
		PropTypes.shape({
			country: PropTypes.string,
			company: PropTypes.string,
			startDate: PropTypes.string,
			endDate: PropTypes.string,
		})
	),
};

export default Workspaces;
