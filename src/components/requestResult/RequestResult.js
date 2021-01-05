import PropTypes from "prop-types";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Loader from "../loader";
import styles from "./requestResult.styles.scss";

function RequestResult({ status, name }) {
	function renderResult() {
		if (status === "pending") {
			return <Loader />;
		} else if (status === "successful") {
			return (
				<>
					<CheckCircleOutlineIcon className={styles.requestResult_success} />
					<p>New {name} has been successfully added</p>
				</>
			);
		} else if (status === "failed") {
			return (
				<>
					<ErrorOutlineIcon className={styles.requestResult_failed} />
					<p>Something went wrong. Please try again later</p>
				</>
			);
		}
	}
	return <div className="request-result">{renderResult()}</div>;
}

RequestResult.propTypes = {
	status: PropTypes.string,
	name: PropTypes.string,
};

export default RequestResult;
