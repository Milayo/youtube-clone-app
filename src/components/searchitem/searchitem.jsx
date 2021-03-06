import React from "react";

import "./searchitem.css";
import { Link, withRouter } from "react-router-dom";

const SearchItem = ({
	item,
	videoTitle,
	videoDescription,
	channelTitle,
	videoImage,
	videoTimeStamp,
}) => {
	console.log(item.key);
	return (
		<div className="search-item">
			<Link to={`/video-page/${item.key}`}>
				<img src={videoImage} alt={videoTitle} />
			</Link>
			<div className="video-info">
				<h3>{videoTitle}</h3>
				<div className="other-info">
					<span>{channelTitle}</span>
					<span>{videoTimeStamp}</span>
				</div>
				<p>{videoDescription}</p>
			</div>
		</div>
	);
};

export default withRouter(SearchItem);
