import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCurrentUser } from "../../redux/auth/actionCreators";
import { getWorkbooks } from "../../redux/workbook/actionCreators";
import { selectUserData } from "../../redux/auth/selectors";
import { selectWorkbooks } from "../../redux/workbook/selectors";
import Navbar from "../../components/navbar";
import AddNewWorkbook from "../../components/workbook/AddNewWorkbook";
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
		return <Loader />;
	} else {
		return (
			<>
				<Navbar userType={userData?.user?.type} />
				<div className={styles.workbooks}>
					<AddNewWorkbook workbooks={workbooks} />
					<div className={styles.workbooks__box}>
						{Object.values(workbooks).map((workbook) => (
							<Workbook workbook={workbook} key={workbook.email} />
						))}
					</div>
				</div>
			</>
		);
	}
}

export default Workbooks;
