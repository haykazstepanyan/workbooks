import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Accordion from "../accordion";
import WorkplaceForm from "./WorkplaceForm";

function AddNewWorkplace({ id, workplaces }) {
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
			rowName="+ Add new workplace"
		>
			<WorkplaceForm
				id={id}
				closeAccordion={closeAccordion}
				workplaces={workplaces}
			/>
		</Accordion>
	);
}

AddNewWorkplace.propTypes = {
	id: PropTypes.string,
	workplaces: PropTypes.objectOf(
		PropTypes.shape({
			country: PropTypes.string,
			company: PropTypes.string,
			startDate: PropTypes.string,
			endDate: PropTypes.string,
		})
	),
};

export default AddNewWorkplace;
