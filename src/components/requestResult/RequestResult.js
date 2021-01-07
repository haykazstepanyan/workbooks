import PropTypes from "prop-types";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Loader from "../loader";
import styles from "./requestResult.module.scss";

function RequestResult({ status, text }) {
	function renderResult() {
		if (status === "pending") {
			return <Loader data-testid="loader" />;
		} else if (status === "successful") {
			return (
				<>
					<CheckCircleOutlineIcon className={styles.requestResult_success} />
					<p>{text}</p>
				</>
			);
		} else if (status === "failed") {
			return (
				<>
					<ErrorOutlineIcon className={styles.requestResult_failed} />
					<p>{text}</p>
				</>
			);
		}
	}
	return <div className={styles.requestResult}>{renderResult()}</div>;
}

RequestResult.propTypes = {
	status: PropTypes.string.isRequired,
	text: PropTypes.string,
};

export default RequestResult;
