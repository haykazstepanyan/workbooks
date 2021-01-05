import PropTypes from "prop-types";
import styles from "./table.module.scss";

function Table({ tableData = {} }) {
	return (
		<ul className={styles.table}>
			{Object.entries(tableData).map(([key, value]) => (
				<li key={key}>
					<span>{key}:</span>
					<span>{value}</span>
				</li>
			))}
		</ul>
	);
}

Table.propTypes = {
	tableData: PropTypes.objectOf(PropTypes.string),
};

export default Table;
