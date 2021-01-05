import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { WorkbookForm } from "./";
import Accordion from "../accordion";

function AddNewWorkbook({ workbooks }) {
	const [accordionState, setAccordionState] = useState(false);

	const closeAccordion = useCallback(() => {
		setAccordionState(false);
	}, []);

	const handleExpand = useCallback(() => {
		setAccordionState((prevState) => !prevState);
	}, []);

	return (
		<div>
			<Accordion
				isExpanded={accordionState}
				changeHandler={handleExpand}
				rowName="+ Add new workbook"
			>
				<WorkbookForm closeAccordion={closeAccordion} workbooks={workbooks} />
			</Accordion>
		</div>
	);
}

AddNewWorkbook.propTypes = {
	workbooks: PropTypes.shape({
		birthDate: PropTypes.string,
		email: PropTypes.string,
		passport: PropTypes.string,
		Workspaces: PropTypes.objectOf(PropTypes.string),
	}),
};

export default AddNewWorkbook;
