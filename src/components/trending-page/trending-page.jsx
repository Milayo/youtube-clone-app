import React, { Component } from "react";
import axios from "axios";
import { DateTime } from "luxon";

import "./trending-page.css";
import SpinnerPage from "./../spinner/spinner.js";
import TrendingVideoCard from "./../trending-video-cards/trending-video-card.jsx";
import SideBar from "./../sidebar/sidebar";

class TrendingPageVideo extends Component {
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
				`https://www.googleapis.com/youtube/v3/videos?part=snippet&liveStreamingDetails&chart=mostPopular&regionCode=IN&maxResults=28&key=${process.env.REACT_APP_YOUTUBE_API_KEY}
			`
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
			const videoTitle = videoSnippet.title;
			const videoImage = videoSnippet.thumbnails.medium.url;
			const videoTimeStamp = DateTime.fromISO(
				videoSnippet.publishedAt
			).toRelative();
			const videoChannel = videoSnippet.channelTitle;
			const channelId = videoSnippet.channelId;
			const channelData = await axios.get(
				`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
			);
			const channelImage =
				channelData.data.items[0].snippet.thumbnails.medium.url;

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
		const { isLoading, videoCard } = this.state;
		console.log(videoCard);
		return (
			<div className="trending-page">
				<SideBar />
				<div className="page_videos">
					{isLoading ? <SpinnerPage /> : null}
					<div className="page_items">
						{videoCard.map((item) => {
							return (
								<TrendingVideoCard
									videoId={item.videoId}
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
			</div>
		);
	}
}

export default TrendingPageVideo;
