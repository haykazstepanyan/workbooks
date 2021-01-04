import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Loader from "../loader/Loader";

function WorkbookResult({ status }) {
	function renderResult() {
		if (status === "pending") {
			return <Loader />;
		} else if (status === "successful") {
			return (
				<>
					<CheckCircleOutlineIcon className="new-workbook-result_success" />
					<p>New workbook has been successfully added</p>
				</>
			);
		} else if (status === "failed") {
			return (
				<>
					<ErrorOutlineIcon className="new-workbook-result_failed" />
					<p>Something went wrong. Please try again later</p>
				</>
			);
		}
	}
	return <div className="new-workbook-result">{renderResult()}</div>;
}

export default WorkbookResult;
