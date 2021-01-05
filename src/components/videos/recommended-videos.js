import React, { Component } from "react";
import axios from "axios";
import { DateTime } from "luxon";

import "./recommended-videos.css";
import SpinnerPage from "./../spinner/spinner.js";
import VideoCard from "./../videocard/videocard.js";

class Videos extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videoCard: [],
			isLoading: true,
		};
	}

	componentDidMount() {
		axios
			.get(
				`https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&maxResults=24`
			)
			.then((response) => {
				console.log(response.data.items);
				const videoItems = response.data.items;
				this.createVideoCards(videoItems);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	async createVideoCards(videoItems) {
		let videoCards = [];

		for (const video of videoItems) {
			const videoId = video.id;
			const videoSnippet = video.snippet;
			const channelId = videoSnippet.channelId;
			const channelData = await axios.get(
				`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
			);
			const channelImage =
				channelData.data.items[0].snippet.thumbnails.medium.url;

			const videoTitle = videoSnippet.title;
			const videoImage = videoSnippet.thumbnails.medium.url;
			const videoTimeStamp = DateTime.fromISO(
				videoSnippet.publishedAt
			).toRelative();
			const videoChannel = videoSnippet.channelTitle;

			videoCards.push({
				videoId,
				videoImage,
				videoTitle,
				videoChannel,
				videoTimeStamp,
				channelImage,
			});

			this.setState({ videoCard: videoCards, isLoading: false });
		}
	}

	render() {
		const {isLoading, videoCard} = this.state;
		console.log(videoCard)
		return (
			<div className="page_videos">
				{isLoading ? <SpinnerPage /> : null}
				<div className="page_items">
					{videoCard.map((item) => {
						return (
							<VideoCard
								key={item.videoId}
								title={item.videoTitle}
								image={item.videoImage}
								timestamp={item.videoTimeStamp}
								channel={item.videoChannel}
								channelImage={item.channelImage}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Videos;
