import React from "react";
import ReactPlayer from "react-player";

const VideoPage = ({match}) => {
	const {videoId} = match.params;
	const url = `https://www.youtu.be/${videoId}`;
	console.log(url)
	return (
		<div>
			{" "}
			<ReactPlayer url={url} controls playbackRate = {2} width="100%" height="700px" />
		</div>
	);
};

export default VideoPage;
