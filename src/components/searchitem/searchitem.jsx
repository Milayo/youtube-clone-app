import React from "react";

import "./searchitem.css";

const SearchItem = ({
	videoTitle,
	videoDescription,
	channelTitle,
	videoImage,
	videoTimeStamp,
}) => {
	return (
			<div className="search-item">
				<img src={videoImage} alt={videoTitle} />
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

export default SearchItem;
