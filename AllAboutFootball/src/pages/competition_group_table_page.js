import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import CompetitionShowGroupTable from '../components/competitionShowGroupTable';

class CompetitionGroupTablePage extends Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	    	competition: this.props.params.competition,
	    	group: this.props.params.id 
	    };
	}
	render() {
		return (
			<div>
				<h1>{this.props.competitionName}</h1>
				<br />
				<CompetitionShowGroupTable id={this.state.group} competition={this.state.competition} />
				<br />
				<Link to={`/${this.state.competition}/main`} className="btn btn-primary">Back</Link>
			</div>
		);
	}
};

function mapStateToProps(state, ownProps) {
	// return props inside CompetitionGroupTablePage
	const competitionIndex = state.competition.competitionCodes.findIndex(code => code == ownProps.params.competition);
	return {
		competitionName: state.competition.competitionNames[competitionIndex]
	};
}

// transform a component to a container, adding new props to CompetitionGroupTablePage
export default connect(mapStateToProps)(CompetitionGroupTablePage);