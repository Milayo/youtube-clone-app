import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";


const SearchInput = ({ handleChange, searchData, searchFunction }) => {
	return (
		<MDBCol md="6">
			<div className="input-group md-form form-sm form-1 pl-0">
				<input
					className="form-control my-0 py-1"
					type="text"
					placeholder="Search"
					value={searchData}
					aria-label="Search"
					onChange={handleChange}
				/>
				<div className="input-group-append">
					<span
						className="input-group-text gray lighten-3"
						id="basic-text1"
					>
						<MDBIcon
							className="text-black"
							icon="search"
							onClick={searchFunction}
						/>
					</span>
				</div>
			</div>
		</MDBCol>
	);
};

export default SearchInput;
