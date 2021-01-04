import { useState, useEffect, useCallback } from "react";
import styles from "./login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { userSignIn } from "../../redux/auth/actionCreators";
import { useHistory } from "react-router-dom";
import { selectUserData, selectAuthError } from "../../redux/auth/selectors";
import { Input, Button } from "../../components/inputs";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({
		email: "",
		password: "",
		others: "",
	});

	const dispatch = useDispatch();
	const history = useHistory();
	const userData = useSelector(selectUserData);
	const authError = useSelector(selectAuthError);

	useEffect(() => {
		if (authError) {
			const { code, message } = authError;
			if (code.includes("email")) {
				setErrors({
					email: message,
					password: "",
					others: "",
				});
			} else if (code.includes("password")) {
				setErrors({
					email: "",
					password: message,
					others: "",
				});
			} else {
				setErrors({
					email: "",
					password: "",
					others: message,
				});
			}
		}
	}, [authError]);

	const handleEmail = useCallback((e) => {
		setEmail(e.target.value);
	}, []);

	const handlePassword = useCallback((e) => {
		setPassword(e.target.value);
	}, []);

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(userSignIn({ email, password }));
	}

	if (userData?.id) {
		history.push("/");
		return null;
	} else {
		return (
			<div className={styles.login}>
				<form
					onSubmit={handleSubmit}
					noValidate
					autoComplete="off"
					className={styles.login__form}
				>
					<Input
						type="email"
						label="Email"
						id="email"
						value={email}
						handleChange={handleEmail}
						hasError={!!errors.email}
						errorMessage={errors.email}
					/>
					<Input
						type="password"
						label="Password"
						id="password"
						value={password}
						handleChange={handlePassword}
						hasError={!!errors.password}
						errorMessage={errors.password}
						autoComplete="on"
					/>
					{errors.others && (
						<div className="errors">
							<p>{errors.others}</p>
						</div>
					)}
					<Button type="submit" disabled={!email || !password} text="Sign in" />
				</form>
			</div>
		);
	}
}

export default Login;
