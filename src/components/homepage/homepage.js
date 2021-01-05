import React, { Component } from "react";

import SideBar from "./../sidebar/sidebar.js";
import Videos from "./../videos/recommended-videos.js";
import "./homepage.css";

class HomePage extends Component {
	render() {
		return (
				<div className="homepage-body">
					<SideBar />
					<Videos />
				</div>
		
		);
	}
}

export default HomePage;
