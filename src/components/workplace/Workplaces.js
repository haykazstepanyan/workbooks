import PropTypes from "prop-types";
import classNames from "classnames";
import AddNewWorkplace from "./AddNewWorkplace";
import Workplace from "./Workplace";
import styles from "./workplaces.module.scss";

function Workplaces({ workbookID, workplaces, user, workbookUserID }) {
	let canCreateNewWorkplace = true;
	if (user.type === "user") {
		canCreateNewWorkplace = user.id === workbookUserID;
	}

	const divClass = classNames({
		[styles.workplaces]: Boolean(workplaces),
	});

	return (
		<>
			<div className={divClass} data-testid="workplaces">
				{canCreateNewWorkplace && (
					<AddNewWorkplace id={workbookID} workplaces={workplaces} />
				)}
				{workplaces &&
					Object.entries(workplaces).map(([key, value]) => (
						<Workplace
							userID={user.id}
							workbookID={workbookID}
							workplaceID={key}
							workplace={value}
							key={key}
							canDelete={canCreateNewWorkplace}
						/>
					))}
			</div>
		</>
	);
}

Workplaces.propTypes = {
	workbookID: PropTypes.string,
	workplaces: PropTypes.objectOf(
		PropTypes.shape({
			country: PropTypes.string,
			company: PropTypes.string,
			startDate: PropTypes.string,
			endDate: PropTypes.string,
		})
	),
	user: PropTypes.objectOf(PropTypes.string),
	workbookUserID: PropTypes.string,
};

export default Workplaces;
