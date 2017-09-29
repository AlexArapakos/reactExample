import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMatches, fetchCompetitionMatchesResults } from '../actions/index';

class CompetitionShowMatchResultsTable extends Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	    	updatedProps: 0,
	    	waitCondition: true
	    };
	}
	componentWillMount() {
		this.props.fetchMatches('emptyList');
		//this.props.fetchCompetitionMatchesResults(competition, 'emptyList');
	}
	componentWillReceiveProps(nextProps){
		const { competition, group, matchDay, matches } = this.props;
		debugger;
		if(matches.length == 0) {
			const day = matchDay === 'string' ? matchDay : matchDay[0];
			this.props.fetchCompetitionMatchesResults(competition, group, day);
		}
	}
	componentDidUpdate(prevProps, prevState){
		const { competition, group, matchDay, matches } = prevProps;
		const nextMatches = this.props.matches;
		debugger;
		if(matches.length != 0 && nextMatches.matches && matches.matches[0].when != nextMatches.matches[0].when) {
			this.props.fetchMatches(this.props.matches.matches);
			/*if (typeof matchDay === 'object'){
				matchDay.map((day, i) => {
					this.props.fetchCompetitionMatchesResults(competition, group, day).then(() => {
						this.props.fetchMatches(nextProps.matches.matches);
					});
				});
			}
			else{
				this.props.fetchCompetitionMatchesResults(competition, group, matchDay).then(() => {
					this.props.fetchMatches(nextProps.matches.matches);
				});
			}*/
		}
	}
	render() {
		return (
			<div>
				<h2>Group {this.props.group}:</h2>
				<table className="groupTable">
					<thead>
						<tr className="row">
							<th className="col-sm-4">Date</th>
							<th className="col-sm-4">Home</th>
							<th className="col-sm-4">Against</th>
						</tr>
					</thead>
					<tbody>
						{this.renderList()}
					</tbody>
				</table>
      		</div>
		);
	}
	renderList() {
		if (this.state.waitCondition) {
			return (
				<tr className="row">
					<td className="col-sm-12 loading">Loading…</td>
				</tr>
			);
		}
		/*if (matches.error) {
			return (
				<tr className="row">
					<td className="alert alert-danger" role="alert">{matches.error}</td>
				</tr>
			);
		}*/
		return this.props.currentMatches.map((match, i) => {
			return (
				<tr className="row" key={'group_'+match.group+'_match_'+i}>
					<td className="col-sm-4">{match.when}</td>
					<td className="col-sm-4">{match.team1.teamName}</td>
					<td className="col-sm-4">{match.team2.teamName}</td>
				</tr>
			);
		});
	}
};

// transform states to props
function mapStateToProps(state, ownProps) {
	// return props inside CompetitionShowMatchResultsTable
	const competitionIndex = state.competition.competitionCodes.findIndex(code => code == ownProps.competition);
	const competitionState = state.competition.competitionState[competitionIndex];
	return {
		matches: state[competitionState].matches,
		currentMatches: state.competition.currentMatches
	};
}

// transform a component to a container, adding new props to CompetitionShowMatchResultsTable
export default connect(mapStateToProps, { fetchMatches, fetchCompetitionMatchesResults })(CompetitionShowMatchResultsTable);
