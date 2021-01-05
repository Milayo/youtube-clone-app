import React, { Component } from "react";

import "./searchpage.css";
import SideBar from "./../sidebar/sidebar.js";
import SearchItem from "./../searchitem/searchitem.jsx";
import SpinnerPage from "./../spinner/spinner.js";

const SearchPage = ({
	searchPage,
	isLoading
}) => {
	return (
		<div className="searchpage">
			<SideBar />
			<div className="search-items">
				<h3>Top Results</h3>

				{isLoading ? (
					<SpinnerPage />
				) : (
					searchPage.map((item) => {
						return (
							<SearchItem
								key={item.key}
								videoTitle={item.videoTitle}
								videoDescription={item.videoDescription}
								channelTitle={item.channelTitle}
								videoImage={item.videoImage}
								videoTimeStamp={item.videoTimeStamp}
							/>
						);
					})
				)}
			</div>
		</div>
	);
};

export default SearchPage;
