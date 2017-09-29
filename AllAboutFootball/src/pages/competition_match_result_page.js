import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import CompetitionShowMatchResultsTable from '../components/competitionShowMatchResultsTable';

class CompetitionMatchResultsPage extends Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	    	group: this.props.params.group == 'allGroups' ? this.props.groups : this.props.params.group,
	    	matchDay: this.props.params.day == 'allDays' ? this.props.matchDays : this.props.params.day,
	    	competition: this.props.params.competition
	    };
	}
	renderTables() {
		const {competition, group, matchDay} = this.state;
		if(this.props.params.group == 'allGroups') {
			return group.map((groupItem, i) => {
				return (
					<div key={'group_'+groupItem+'_tableResults_'+i}>
						<CompetitionShowMatchResultsTable competition={competition} group={groupItem} matchDay={matchDay} />
					</div>
				);
			});
		}
		return <CompetitionShowMatchResultsTable competition={competition} group={group} matchDay={matchDay} />;
	}
	render() {
		return (
			<div>
				<h1>{this.props.competitionName}</h1>
				<br />
				{this.renderTables()}
				<br />
				<Link to={`/${this.state.competition}/main`} className="btn btn-primary">Back</Link>
			</div>
		);
	}
};

function mapStateToProps(state, ownProps) {
	// return props inside CompetitionMatchResultsPage
	const competitionIndex = state.competition.competitionCodes.findIndex(code => code == ownProps.params.competition);
	const competitionState = state.competition.competitionState[competitionIndex];
	return {
		groups: state[competitionState].groups,
		matchDays: state[competitionState].matchDays,
		competitionName: state.competition.competitionNames[competitionIndex]
	};
}

// transform a component to a container, adding new props to CompetitionMatchResultsPage
export default connect(mapStateToProps)(CompetitionMatchResultsPage);