import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import WorkbookForm from "./WorkbookForm";
import styles from "./workbookStyles.module.scss";

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
				className={styles.newWorkbook__accordion}
				expanded={accordionState}
				onChange={handleExpand}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className="">+ Add new workbook</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<WorkbookForm closeAccordion={closeAccordion} workbooks={workbooks} />
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

AddNewWorkbook.propTypes = {
	workbooks: PropTypes.objectOf(PropTypes.string),
};

export default AddNewWorkbook;
