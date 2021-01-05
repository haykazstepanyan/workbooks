import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import AccordionMUI from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from "../inputs";
import styles from "./accordion.module.scss";

function Accordion(props) {
	const {
		rowName,
		fullWidth,
		children,
		isExpanded,
		changeHandler,
		canDelete,
		handleDelete,
	} = props;

	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const handleOpenDialog = useCallback((e) => {
		e.stopPropagation();
		setIsDialogOpen(true);
	}, []);
	const handleCloseDialog = useCallback(() => {
		setIsDialogOpen(false);
	}, []);

	const closeAndDelete = useCallback(() => {
		setIsDialogOpen(false);
		handleDelete();
	}, [handleDelete]);

	const accordionClass = classNames(styles.accordion, {
		[styles.accordion__fullWidth]: fullWidth,
	});

	return (
		<>
			<AccordionMUI
				className={accordionClass}
				expanded={isExpanded}
				onChange={changeHandler}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					className={styles.accordion__content}
				>
					<Typography>{rowName}</Typography>
					{canDelete && (
						<DeleteIcon
							className={styles.accordion__deleteIcon}
							onClick={handleOpenDialog}
						/>
					)}
				</AccordionSummary>
				<AccordionDetails className={styles.accordion__details}>
					{children}
				</AccordionDetails>
			</AccordionMUI>
			<Dialog
				open={isDialogOpen}
				onClose={handleCloseDialog}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					Are you sure you want to delete?
				</DialogTitle>
				<DialogActions>
					<Button
						text="Cancel"
						handleClick={handleCloseDialog}
						defaultColored
					/>
					<Button text="Delete" handleClick={closeAndDelete} redColored />
				</DialogActions>
			</Dialog>
		</>
	);
}

Accordion.propTypes = {
	rowName: PropTypes.string,
	fullWidth: PropTypes.bool,
	isExpanded: PropTypes.bool,
	changeHandler: PropTypes.func,
	canDelete: PropTypes.bool,
	handleDelete: PropTypes.func,
};

export default Accordion;
