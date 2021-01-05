import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Accordion from "../accordion";
import WorkspaceForm from "./WorkspaceForm";

function AddNewWorkspace({ id, workspaces }) {
	const [accordionState, setAccordionState] = useState(false);

	const closeAccordion = useCallback(() => {
		setAccordionState(false);
	}, []);

	const handleExpand = useCallback(() => {
		setAccordionState((prevState) => !prevState);
	}, []);

	return (
		<Accordion
			isExpanded={accordionState}
			changeHandler={handleExpand}
			rowName="+ Add new workspace"
		>
			<WorkspaceForm
				id={id}
				closeAccordion={closeAccordion}
				workspaces={workspaces}
			/>
		</Accordion>
	);
}

AddNewWorkspace.propTypes = {
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

export default AddNewWorkspace;
