import React, { Component } from 'react';
import _ from 'lodash';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Quotes extends Component {
	constructor(props) {
		super(props);
		this.state = { index: 0, quotes: [] };
	}
	onAddClick() {
		let newIndex = this.state.index + 1;
		console.log(newIndex);
		this.setState({ 
			index: newIndex,
			quotes: [ ...this.state.quotes, `new sentence ${this.state.index}` ] 
		});
	}
	onRemoveClick(quote) {
		this.setState({ quotes: _.without(this.state.quotes, quote) });
	}
	renderList() {
		return this.state.quotes.map((item, index) => {
			return (
				<li key={item} className="list-group-item">
					{item}
					<button 
						onClick={this.onRemoveClick.bind(this, item)} 
						className="btn btn-danger pull-xs-right">
						Remove
					</button>
				</li>
			);
		});
	}
	render() {
		/*const transitionOptions = {
			transitionName: "fade",
			transitionEnterTimout: 500,
			transitionLeaveTimout: 500
		};*/
		return (
			<div className="quotes">
				<button onClick={this.onAddClick.bind(this)}>Add</button>
				<ul className="list-group">
					{/*
					<ReactCSSTransitionGroup {...transitionOptions} >
					{ this.renderList() }
					</ReactCSSTransitionGroup>
					*/}
					{ this.renderList() }
				</ul>
			</div>
		);
	}
};
