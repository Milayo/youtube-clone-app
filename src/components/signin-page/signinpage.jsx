import React from "react";
import "./signinpage.styles.css";

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const SignInPage = () => {
	return (
		<MDBContainer className="signinpage">
			<MDBRow>
				<MDBCol md="10">
					<form>
						<p className="h4 text-center mb-4">Existing User</p>
						<label
							htmlFor="defaultFormLoginEmailEx"
							className="grey-text"
						>
							Your email
						</label>
						<input
							type="email"
							id="defaultFormLoginEmailEx"
							className="form-control"
						/>
						<br />
						<label
							htmlFor="defaultFormLoginPasswordEx"
							className="grey-text"
						>
							Your password
						</label>
						<input
							type="password"
							id="defaultFormLoginPasswordEx"
							className="form-control"
						/>
						<div className="signin">
							{" "}
							<div className="text-center mt-4">
								<MDBBtn color="indigo" type="submit">
									Login
								</MDBBtn>
							</div>
							<div className="text-center mt-4">
								<MDBBtn color="indigo" type="submit">
									GOOGLE SIGN IN
								</MDBBtn>
							</div>
						</div>
					</form>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};

export default SignInPage;
