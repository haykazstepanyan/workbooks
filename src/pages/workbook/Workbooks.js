import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCurrentUser } from "../../redux/auth/actionCreators";
import { getWorkbooks } from "../../redux/workbook/actionCreators";
import { selectUserData } from "../../redux/auth/selectors";
import {
	selectDeleteStatus,
	selectWorkbooks,
} from "../../redux/workbook/selectors";
import Navbar from "../../components/navbar";
import { AddNewWorkbook } from "../../components/workbook";
import Workbook from "./Workbook";
import Loader from "../../components/loader";
import styles from "./workbook.module.scss";
import RequestResult from "../../components/requestResult";

function Workbooks() {
	const history = useHistory();
	const dispatch = useDispatch();
	const userData = useSelector(selectUserData);
	const workbooks = useSelector(selectWorkbooks);
	const deleteStatus = useSelector(selectDeleteStatus);

	useEffect(() => {
		dispatch(getCurrentUser());
		dispatch(getWorkbooks());
	}, [dispatch]);

	let deleteStatusText;
	if (deleteStatus === "successful") {
		deleteStatusText = "Workbook has been deleted";
	} else if (deleteStatus === "failed") {
		deleteStatusText = "Something went wrong. Please try again later";
	}

	if (!userData) {
		history.push("/login");
		return null;
	} else if (userData?.status === "pending") {
		return (
			<div className="page-center-loader">
				<Loader />
			</div>
		);
	} else {
		return (
			<>
				<Navbar userType={userData?.type} />
				<div className={styles.workbooks} data-testid="workbooks">
					<AddNewWorkbook workbooks={workbooks} user={userData} />
					<div className={styles.workbooks__box}>
						{deleteStatus && (
							<RequestResult status={deleteStatus} text={deleteStatusText} />
						)}
						{workbooks &&
							Object.entries(workbooks).map(([key, value]) => (
								<Workbook
									workbookID={key}
									workbook={value}
									user={userData}
									key={key}
								/>
							))}
					</div>
				</div>
			</>
		);
	}
}

export default Workbooks;
