import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { DateTime } from "luxon";
import axios from "axios";
import { withRouter, useHistory } from "react-router-dom";

import "./index.css";

import Header from "./components/header/header.js";
import HomePage from "./components/homepage/homepage.js";
import SearchPage from "./components/searchpage/searchpage.jsx";
import SignInSignUpPage from "./components/sign-in-sign-up-page/signin-signup.jsx";
import TrendingPageVideo from "./components/trending-page/trending-page.jsx";
import VideoPage from "./components/video-page/video-page.jsx";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchData: "",
			searchPage: "",
			isLoading: true,
		};
	}

	getData = () => {
		axios
			.get(
				`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${this.state.searchData}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
			)
			.then((response) => {
				console.log(response.data.items);
				const searchItems = response.data.items;
				this.createSearchItems(searchItems);
			});
	};

	handleChange = (event) => {
		this.setState({
			searchData: event.target.value,
		});
	};

	findFunc = () => {
		if (this.state.searchData && this.state.searchData.length > 1) {
			this.getData();
		}
		return;
	};

	resetInputField = () => {
		this.setState({
			searchData: "",
		});
	};

	searchFunction = (event) => {
		event.preventDefault();
		this.findFunc();
		this.resetInputField();
		const { history } = this.props;
		history.push("/search");
	};

	async createSearchItems(searchItems) {
		let searchCards = [];

		for (let item of searchItems) {
			const key = item.id.videoId;
			const videoSnippet = item.snippet;
			const videoTitle = videoSnippet.title;
			const videoDescription = videoSnippet.description;
			const channelTitle = videoSnippet.channelTitle;
			const videoImage = videoSnippet.thumbnails.medium.url;
			const videoTimeStamp = DateTime.fromISO(
				videoSnippet.publishedAt
			).toRelative();

			searchCards.push({
				key,
				videoTitle,
				videoDescription,
				channelTitle,
				videoImage,
				videoTimeStamp,
			});

			this.setState({ searchPage: searchCards, isLoading: false });
		}
	}

	render() {
		const { searchData, searchPage, isLoading } = this.state;
		const {
			key,
			videoTitle,
			videoDescription,
			channelTitle,
			videoImage,
			videoTimeStamp,
		} = searchPage;
		console.log(searchPage);
		return (
			<div>
				<Header
					handleChange={this.handleChange}
					searchData={this.state.searchData}
					searchFunction={this.searchFunction}
				/>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/signin-signup" component={SignInSignUpPage} />
					<Route
						path={`/video-page/:videoId`}
						component={VideoPage}
					/>
					<Route path="/trending" component={TrendingPageVideo} />
					<Route
						path="/search"
						render={() => (
							<SearchPage
								isLoading={isLoading}
								searchPage={searchPage}
							/>
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default withRouter(App);
