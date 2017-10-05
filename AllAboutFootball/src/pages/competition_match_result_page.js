import React, { Component } from 'react';
import { Link } from 'react-router';

import CompetitionShowMatchResults from '../components/competitionShowMatchResults';
import Config from '../Config';

const configInstance = new Config();

export default class CompetitionMatchResultsPage extends Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	    	group: this.props.params.group == 'allGroups' ? configInstance[this.props.params.competition+'_groups'] : this.props.params.group,
	    	matchDay: this.props.params.day == 'allDays' ? configInstance[this.props.params.competition+'_matchDays'] : this.props.params.day
	    };
	}
	renderTables() {
		const {group, matchDay} = this.state;
		const {competition} = this.props.params;
		if(this.props.params.group == 'allGroups') {
			return group.map((groupItem, i) => {
				return (
					<div key={'group_'+groupItem+'_tableResults_'+i}>
						<CompetitionShowMatchResults competition={competition} group={groupItem} matchDay={matchDay} />
					</div>
				);
			});
		}
		return <CompetitionShowMatchResults competition={competition} group={group} matchDay={matchDay} />;
	}
	render() {
		const {competition} = this.props.params;
		const competitionIndex = configInstance.competitionCodes.findIndex(code => code == competition);
		return (
			<div>
				<h1>{configInstance.competitionNames[competitionIndex]}</h1>
				<br />
				{this.renderTables()}
				<br />
				<Link to={`/${competition}/main`} className="btn btn-primary">Back</Link>
			</div>
		);
	}
};