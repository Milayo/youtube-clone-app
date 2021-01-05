import React from "react";
import "./sign-in-sign-up.styles.css";

import SignInPage from "./../signin-page/signinpage.jsx";
import SignUpPage from "./../signup-page/signup-page.jsx";

const SignInSignUpPage = (props) => {
	return (
		<div className="user-page">
			<SignInPage />
			<SignUpPage />
		</div>
	);
};

export default SignInSignUpPage;
