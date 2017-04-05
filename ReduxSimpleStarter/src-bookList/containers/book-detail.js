import React, { Component } from 'react';
import { connect } from 'react-redux';

// container which is being update by an Action
class BookDetail extends Component {
	render() {
		if (!this.props.book) {
			return <div>Select a book to get started.</div>;
		}
		return (
			<div>
				<h3>Details for:</h3>
				<div>Title: {this.props.book.title}</div>
				<div>Pages: {this.props.book.pages}</div>
			</div>
		);
	}
};

// transform states to props
function mapStateToProps(state) {
	// return props inside BookList
	return {
		book: state.activeBook
	};
}

// transform a component to a container, adding new props to BookList
export default connect(mapStateToProps)(BookDetail);