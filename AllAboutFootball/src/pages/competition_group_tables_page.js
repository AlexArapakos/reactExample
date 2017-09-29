import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import CompetitionShowGroupTable from '../components/competitionShowGroupTable';

class CompetitionGroupTablesPage extends Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	    	competition: this.props.params.competition
	    };
	}
	allGroups() {
		return this.props.groups.map((group) => {
			return <CompetitionShowGroupTable key={"group_"+group} id={group} competition={this.state.competition} />;
		});
	}
	render() {
		return (
			<div>
				<h1>{this.props.competitionName}</h1>
				<br />
				{this.allGroups()}
				<br />
				<Link to={`/${this.state.competition}/main`} className="btn btn-primary">Back</Link>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	// return props inside CompetitionGroupTablesPage
	const competitionIndex = state.competition.competitionCodes.findIndex(code => code == ownProps.params.competition);
	const competitionState = state.competition.competitionState[competitionIndex];
	return {
		competitionName: state.competition.competitionNames[competitionIndex],
		groups: state[competitionState].groups
	};
}

// transform a component to a container, adding new props to CompetitionGroupTablesPage
export default connect(mapStateToProps)(CompetitionGroupTablesPage);