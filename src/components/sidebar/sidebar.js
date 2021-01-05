import React, { useState } from "react";
import { MDBIcon } from "mdbreact";
import { Link, withRouter } from "react-router-dom";

import "./sidebar.styles.css";

const SideBar = ({match}) => {
	console.log(match)
	return (
		<div className="sidebar">
			<Link
				to="/"
				className={
					"sidebar-row " + (match.path === "/" ? "active" : "")
				}
			>
				<MDBIcon className="mr-3 ml-3 sidebar-icon" icon="home" fixed />
				<span>Home</span>
			</Link>

			<Link
				to="/trending"
				className={
					"sidebar-row " +
					(match.path === "/trending" ? "active" : "")
				}
			>
				<MDBIcon className="mr-3 ml-3 sidebar-icon" icon="fire" fixed />
				<span>Trending</span>
			</Link>

			<Link to= "/subscriptions"
				className={
					"sidebar-row " +
					(match.path === "/subscriptions" ? "active" : "")
				}
			>
				<MDBIcon
					className="mr-3 ml-3 sidebar-icon"
					icon="folder-open"
					fixed
				/>
				<span>Subscriptions</span>
			</Link>

			<Link to= "/library"
				className={
					"sidebar-row " +
					(match.path  === "/library" ? "active" : "")
				}
			>
				<MDBIcon
					className="mr-3 ml-3 sidebar-icon"
					icon="clone"
					fixed
				/>
				<span>Library</span>
			</Link>

			<Link to= "/history"
				className={
					"sidebar-row " +
					(match.path  === "/history" ? "active" : "")
				}
			>
				<MDBIcon
					className="mr-3 ml-3 sidebar-icon"
					icon="history"
					fixed
				/>
				<span>History</span>
			</Link>
			<Link to="/yourvideos"
				className={
					"sidebar-row " +
					(match.path === "/yourvideos" ? "active" : "")
				}
			>
				<MDBIcon
					fab
					className="mr-3 ml-3 sidebar-icon"
					icon="youtube-square"
					fixed
				/>
				<span>Your Videos</span>
			</Link>
			<Link to ="/watchlater"
				className={
					"sidebar-row " +
					(match.path === "/watchlater" ? "active" : "")
				}
			>
				<MDBIcon
					className="mr-3 ml-3 sidebar-icon"
					icon="clock"
					fixed
				/>
				<span>Watch Later</span>
			</Link>
			<Link to="/likedvideos"
				className={
					"sidebar-row " +
					(match.path === "/likedvideos" ? "active" : "")
				}
			>
				<MDBIcon
					className="mr-3 ml-3 sidebar-icon"
					far
					icon="thumbs-up"
					fixed
				/>
				<span>Liked videos</span>
			</Link>
			<Link to= "/more"
				className={
					"sidebar-row " +
					(match.path === "/more" ? "active" : "")
				}
			>
				<MDBIcon
					className="mr-3 ml-3 sidebar-icon"
					icon="angle-down"
					fixed
				/>
				<span>Show more</span>
			</Link>
		</div>
	);
};

export default withRouter(SideBar);
