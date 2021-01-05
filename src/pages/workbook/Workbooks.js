import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCurrentUser } from "../../redux/auth/actionCreators";
import { getWorkbooks } from "../../redux/workbook/actionCreators";
import { selectUserData } from "../../redux/auth/selectors";
import { selectWorkbooks } from "../../redux/workbook/selectors";
import Navbar from "../../components/navbar";
import { AddNewWorkbook } from "../../components/workbook";
import Workbook from "./Workbook";
import Loader from "../../components/loader";
import styles from "./workbook.module.scss";

function Workbooks() {
	const history = useHistory();
	const dispatch = useDispatch();
	const userData = useSelector(selectUserData);
	const workbooks = useSelector(selectWorkbooks);

	useEffect(() => {
		dispatch(getCurrentUser());
		dispatch(getWorkbooks());
	}, [dispatch]);

	if (!userData) {
		history.push("/login");
		return null;
	} else if (userData?.status === "pending") {
		return (
			<div className={styles.loaderBox}>
				<Loader />
			</div>
		);
	} else {
		return (
			<>
				<Navbar userType={userData?.type} />
				<div className={styles.workbooks}>
					<AddNewWorkbook workbooks={workbooks} />
					<div className={styles.workbooks__box}>
						{Object.entries(workbooks).map(([key, value]) => (
							<Workbook workbookID={key} workbook={value} key={key} />
						))}
					</div>
				</div>
			</>
		);
	}
}

export default Workbooks;
