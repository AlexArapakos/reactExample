import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
//import { elementType } from 'react-prop-types';
import _ from 'lodash';

import { createPost } from '../actions/index';

const FIELDS = {
	title: {
		type: 'input',
		label: 'Title for Posts',
		errMsg: 'Enter a title'
	},
	categories: {
		type: 'input',
		label: 'Enter some categories for this post',
		errMsg: 'Enter categories'
	},
	content: {
		type: 'textarea',
		label: 'Post Contents',
		errMsg: 'Enter content'
	}
};

class PostsNew extends Component {
	/*static contextTypes = {
		router: PropTypes.object
	}*/
	onSubmit(props) {
		this.props.createPost(props)
			.then(() => {
				// Blog post has been created, navigate the user to the index
				// Use this.context.router.push to navigate
				this.context.router.push('/');
			});
	}
	renderField(fieldConfig/*value*/, field/*key*/) {
		const fieldHelper = this.props.fields[field];
		return (
			<div className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`}>
				<label>{fieldConfig.label}</label>
				<fieldConfig.type type="text" className="form-control" {...fieldHelper} />
				<div className="text-help">
					{fieldHelper.touched ? fieldHelper.error : ''}
				</div>
			</div>
		);
	}
	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create a new Post</h3>
				{ _.map(FIELDS, this.renderField.bind(this)) }
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

PostsNew.contextTypes = {
	router: PropTypes.object
}

function validate(values) {
	const errors = {};
	_.each(FIELDS, (type/*value*/, field/*key*/) => {
		if(!values[field]) {
			errors[field] = type.errMsg;
		}
	});
	return errors;
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: _.keys(FIELDS),
	validate
}, null, { createPost })(PostsNew);
