import React from "react";
import { Link } from "react-router-dom";

const  TrendingVideoCard = ({ videoId, title, image, timestamp, channel, channelImage }) => {
	return (
		<div className="video_item_card">
			<Link to={`/video-page/${videoId}`}><img src={image} alt={title} className="video_item_image" /></Link>
			<div className="item_info">
				<img src={channelImage} alt="{channel}" className="item_avi" />
				<div className="item_text">
					<h4>{title}</h4>
					<p>{channel}</p>
					<p>{timestamp}</p>
				</div>
			</div>
		</div>
	);
};

export default TrendingVideoCard;
