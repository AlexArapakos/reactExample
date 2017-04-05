import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';

const API_KEY = 'AIzaSyBxc6tBZ0EaMRqUgMvlH-aUG54oO9GGf4M';

// Create new component
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		 };
		 this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch(
			{key: API_KEY, term: term}, 
			(videos) => this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			})
		);
	}

	render() {
		const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetails video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>

		);
	}
}

// Add it in DOM
ReactDOM.render(<App />, document.querySelector('.container'));