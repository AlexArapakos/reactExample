import React, { Component } from 'react';
import { Link } from 'react-router';

import Config from '../Config';

const configInstance = new Config();

export default class Wellcome extends Component {
	renderButtons() {
		return  configInstance.competitionCodes.map((code, i) => {
			return (
				<div key={"competition_"+code}>
					<Link to={"/"+code+"/main"} className="btn btn-primary">
		      			{configInstance.competitionNames[i]}
		      		</Link>
		      		<br />
				</div>
			);
		});
	}
	render() {
		return (
			<div>
				<h1>React Football App</h1>
				{this.renderButtons()}
			</div>
		);
	}
}
