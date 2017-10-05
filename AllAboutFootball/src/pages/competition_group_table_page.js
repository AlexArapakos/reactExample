import React, { Component } from 'react';
import { Link } from 'react-router';

import CompetitionShowGroupTable from '../components/competitionShowGroupTable';
import Config from '../Config';

const configInstance = new Config();


export default class CompetitionGroupTablePage extends Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	    	group: this.props.params.group == 'allGroups' ? configInstance[this.props.params.competition+'_groups'] : this.props.params.group
	    };
	}
	renderTable() {
		const { competition } = this.props.params;
		if(this.props.params.group == 'allGroups') {
			return this.state.group.map((group) => {
				return <CompetitionShowGroupTable key={"group_"+group} group={group} competition={competition} />;
			});
		}
		return <CompetitionShowGroupTable group={this.state.group} competition={competition} />;
	}
	render() {
		const { competition } = this.props.params;
		const competitionIndex = configInstance.competitionCodes.findIndex(code => code == competition);
		return (
			<div>
				<h1>{configInstance.competitionNames[competitionIndex]}</h1>
				<br />
				{this.renderTable()}
				<Link to={`/${competition}/main`} className="btn btn-primary">Back</Link>
			</div>
		);
	}
};
