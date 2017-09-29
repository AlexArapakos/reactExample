import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions';

class UserList extends Component {
	componentWillMount() {
		this.props.fetchUsers();
	}
	renderUser(user, i) {
		return (
			<div className="card card-block" key={'user_'+i}>
				<h4 className="card-title">{user.name}</h4>
				<p className="card-text">{user.company.name}</p>
				<a className="btn btn-primary" href={user.company.email}>Email</a>
				<a className="btn btn-info" href={user.company.website}>Wedsite</a>
			</div>
		);
	}
	render() {
		return (
			<div className="user-list">
				{this.props.users.map(this.renderUser)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { users: state.users };
}

export default connect(mapStateToProps, { fetchUsers })(UserList);