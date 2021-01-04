import PropTypes from "prop-types";
import styles from "./workbookStyles.module.scss";

function WorkbookTable({ data: { passport, email, birthDate } }) {
	return (
		<ul className={styles.workbook__ul}>
			<li>
				<span>Passport: </span>
				<span>{passport}</span>
			</li>
			<li>
				<span>Email: </span>
				<span>{email}</span>
			</li>
			<li>
				<span>Birth date: </span>
				<span>{new Date(birthDate).toDateString().slice(4)}</span>
			</li>
		</ul>
	);
}

WorkbookTable.propTypes = {
	data: PropTypes.objectOf(PropTypes.string),
};

export default WorkbookTable;
