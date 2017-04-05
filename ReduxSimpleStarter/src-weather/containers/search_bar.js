import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '' };
	}
	render() {
		return (
			<form 
				onSubmit={this.onFormSubmit.bind(this)}
				className="input-group">
				<input 
					placeholder='Get a 5-day forecast in your favorite cities'
					className='form-control'
					value={this.state.term}
					onChange={this.onInputChange.bind(this)}
				/>
				<span className='input-group-btn'>
					<button type='submit' className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
	onInputChange(event) {
		//console.log(event.target.value);
		this.setState( {term: event.target.value } );
	}
	onFormSubmit(event) {
		event.preventDefault();
		console.log(this.state.term);
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}
};

// transform actionCreator to props
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, result should be passed to all reducers
	return bindActionCreators({ fetchWeather }, dispatch);
}

// transform a component to a container, adding new props to BookList
export default connect(null, mapDispatchToProps)(SearchBar);