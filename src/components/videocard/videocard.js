import React from "react";
import "./videocard.css";

const VideoCard = ({ title, image, timestamp, channel, channelImage }) => {
	return (
		<div className="video_item_card">
			<img src={image} alt={title} className="video_item_image" />
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

export default VideoCard;
