import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';

import store from '../store';
import { toggleModal } from '../actions/index';

class Modal extends Component {
	constructor(props) {
		super(props);
		this.state = { firstTime: true };
		this.modalTarget = document.createElement('div');
		this.modalTarget.className = 'modal';
		document.body.appendChild(this.modalTarget);
		this.modalTarget.style.display = 'none';
	}
	componentWillUpdate(nextProps, nextState) {
		if (nextProps.modal) {
			if(nextState.firstTime) {
				this.showModal();
			}
			this._render();
		} else if(!nextState.firstTime) {
			this.hideModal();
		}
	}
	componentWillUnmount(prevProps, prevState) {
		this.hideModal();
	}
	showModal() {
		this.setState({ firstTime: false });
		this.modalTarget.style.display = 'block';
	}
	hideModal() {
		this.setState({ firstTime: true });
		this.props.toggleModal(false);
		this.modalTarget.style.display = 'none';
		ReactDOM.unmountComponentAtNode(this.modalTarget);
	}
	_render() {
		ReactDOM.render(
			<Provider store={store} >
				<div>
					<span 
						onClick={this.hideModal.bind(this)} 
						className="pull-xs-right close">
						x
					</span>
					{this.props.children}
				</div>
			</Provider>,
			this.modalTarget
		);
	}
	render() {
		return <noscript />;
	}
}

function mapStateToProps(state) {
	return { modal: state.modal };
}

// transform a component to a container, adding new props to Modal
export default connect(mapStateToProps, { toggleModal })(Modal);
