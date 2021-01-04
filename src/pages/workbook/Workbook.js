import PropTypes from "prop-types";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import WorkbookTable from "../../components/workbook/WorkbookTable";
import styles from "./workbook.module.scss";

function Workbook({ workbook }) {
	const { firstName, lastName, ...workbookRest } = workbook;

	return (
		<div className={styles.workbook}>
			<Accordion className={styles.workbooks__accordion}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>
						{firstName} {lastName}
					</Typography>
				</AccordionSummary>
				<AccordionDetails className={styles.workbook__accordionDetails}>
					<WorkbookTable data={workbookRest} />
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

Workbook.propTypes = {
	workbook: PropTypes.objectOf(PropTypes.string),
};

export default Workbook;
