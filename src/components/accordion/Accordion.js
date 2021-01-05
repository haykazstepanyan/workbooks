import PropTypes from "prop-types";
import classNames from "classnames";
import AccordionMUI from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "./accordion.module.scss";

function Accordion(props) {
	const { rowName, fullWidth, children, isExpanded, changeHandler } = props;

	const accordionClass = classNames(styles.accordion, {
		[styles.accordion__fullWidth]: fullWidth,
	});

	return (
		<AccordionMUI
			className={accordionClass}
			expanded={isExpanded}
			onChange={changeHandler}
		>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
			>
				<Typography>{rowName}</Typography>
			</AccordionSummary>
			<AccordionDetails className={styles.accordion__details}>
				{children}
			</AccordionDetails>
		</AccordionMUI>
	);
}

Accordion.propTypes = {
	rowName: PropTypes.string,
	fullWidth: PropTypes.bool,
	isExpanded: PropTypes.bool,
	changeHandler: PropTypes.func,
};

export default Accordion;
