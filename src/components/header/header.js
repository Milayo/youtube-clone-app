import React, { Component } from "react";
import { MDBIcon, MDBCol, MDBBtn} from "mdbreact";
import { Link } from "react-router-dom";

import SearchInput from "./../searchInput/searchinput.jsx";

import "./header.styles.css";


const Header = ({handleChange, searchData, searchFunction}) => {
  return (
    <div className="header">
				<MDBIcon className="header-icon" icon="bars" size="1g" />
				<Link to="/">
				<MDBIcon
					className="header-b header-icon"
					fab
					icon="youtube"
					size="3x"
				/>
				</Link>
				<h2 className="header-name">FilmTUBE</h2>


				<SearchInput handleChange={handleChange} searchData={searchData} searchFunction={searchFunction}/>
				
				<MDBIcon
					className="header-d header-icon"
					icon="video"
					size="1g"
				/>
				<MDBIcon className="header-f header-icon" icon="th" size="1g" />
				<MDBIcon
					className="header-g header-icon"
					icon="ellipsis-v"
					size="1g"
				/>

				<Link to="/signin-signup">
				<MDBBtn className="header-icon" outline color="primary">
					<MDBIcon className="mr-2" icon="user-circle" />
					<span>SIGN IN</span>
				</MDBBtn>
				</Link>
			</div>
  )
}

export default Header;