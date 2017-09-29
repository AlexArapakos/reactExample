import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
	class Authentication extends Component {
		static contextTypes = {
			router: React.PropTypes.object
		}
		componentWillMount() {
			this.relocate(this.props, '/signin');
		}
		componentWillUpdate(nextProps) {
			this.relocate(nextProps, '/signin');
		}
		relocate(authProp, route) {
			if(!authProp.authenticated) {
				this.context.router.push(route);
			}
		}
		render() {
			return <ComposedComponent {...this.props} />;
		}
	}
	
	/*Authentication.propTypes = {
	  router: React.PropTypes.object
	};*/

	function mapStateToProps(state) {
		return { authenticated: state.auth.authenticated };
	}

	return connect(mapStateToProps)(Authentication);
}