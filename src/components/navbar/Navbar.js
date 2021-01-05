import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { userLogout } from "../../redux/auth/actionCreators";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button } from "../inputs";
import styles from "./navbar.module.scss";

function Navbar({ userType }) {
	const dispatch = useDispatch();
	function handleLogout() {
		dispatch(userLogout());
	}
	return (
		<AppBar position="static" className={styles.workbookNavbar}>
			<Toolbar>
				<Typography variant="h6" className={styles.workbookNavbar__menu}>
					Hello {userType}
				</Typography>
				<Button text="Logout" handleClick={handleLogout} isTransparent />
			</Toolbar>
		</AppBar>
	);
}

Navbar.propTypes = {
	userType: PropTypes.string,
};

export default Navbar;
