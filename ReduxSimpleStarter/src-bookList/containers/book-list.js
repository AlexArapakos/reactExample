import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

// container which creates an Action
class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} 
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">
					{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
};

// transform application states to props
function mapStateToProps(state) {
	// return props inside BookList
	return {
		books: state.books
	};
}

// transform actionCreator to props
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, result should be passed to all reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// transform a component to a container, adding new props to BookList
export default connect(mapStateToProps, mapDispatchToProps)(BookList);