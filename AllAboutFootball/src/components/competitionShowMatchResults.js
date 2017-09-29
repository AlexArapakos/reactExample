import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMatches, fetchCompetitionMatchesResults } from '../actions/index';

// container which is being update by an Action
class CompetitionShowMatchResults extends Component {
	componentWillMount() {
		this.props.fetchCompetitionMatchesResults(this.props.competition, this.props.group, this.props.matchDay);
	}
	componentWillReceiveProps(nextProps){
		nextProps.matches.matches && this.props.fetchMatches(nextProps.matches.matches);
	}
	renderList() {
		return this.props.matches.matches.map((match, i) => {
			return (
				<tr className="row" key={'group_'+match.group+'_match_'+i}>
					<td className="col-sm-4">{match.when}</td>
					<td className="col-sm-4">{match.team1.teamName}</td>
					<td className="col-sm-4">{match.team2.teamName}</td>
				</tr>
			);
		});
	}
	render() {
		const { matches } = this.props;
		if (!matches) {
			return <tbody><tr className="row"><td className="col-sm-12 loading">Loading…</td></tr></tbody>;
		}
		if (matches.error) {
			return (
				<tbody>
					<tr className="row">
						<td className="alert alert-danger" role="alert">{matches.error}</td>
					</tr>
				</tbody>
			);
		}
		return (
			<tbody>
				{this.renderList()}
      		</tbody>
		);
	}
};

// transform states to props
function mapStateToProps(state, ownProps) {
	// return props inside CompetitionShowMatchResults
	const competitionIndex = state.competition.competitionCodes.findIndex(code => code == ownProps.competition);
	const competitionState = state.competition.competitionState[competitionIndex];
	return {
		matches: state[competitionState].matches
	};
}

// transform a component to a container, adding new props to CompetitionShowMatchResults
export default connect(mapStateToProps, { fetchMatches, fetchCompetitionMatchesResults })(CompetitionShowMatchResults);
