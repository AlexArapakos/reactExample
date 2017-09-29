import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCompetitionGroupTable } from '../actions/index';

// container which is being update by an Action
class CompetitionShowGroupTable extends Component {
	componentWillMount() {
		this.props.fetchCompetitionGroupTable(this.props.competition, this.props.id);
	}
	renderList() {
		return this.props.teams.records.map((team) => {
			return (
				<tr key={team.team}>
					<td className="col-sm-5">{team.team}</td>
					<td className="col-sm-1">{team.played}</td>
					<td className="col-sm-1">{team.win}</td>
					<td className="col-sm-1">{team.draw}</td>
					<td className="col-sm-1">{team.loss}</td>
					<td className="col-sm-1">{team.goalsFor - team.goalsAgainst}</td>
					<td className="col-sm-2">{team.points}</td>
				</tr>
			);
		});
	}
	render() {
		const { teams, id } = this.props;
		if (!teams) {
			return <div>Loading…</div>;
		}
		if (teams.error) {
			return (
				<div>
					<div className="alert alert-danger" role="alert">{teams.error}</div>
					<Link to="/" className="btn btn-primary">Back</Link>
				</div>
			);
		}
		return (
			<div>
				<h2>Group {id}:</h2>
				<table className="groupTable">
					<thead>
						<tr>
							<th className="col-sm-5">Teams</th>
							<th className="col-sm-1">Played</th>
							<th className="col-sm-1">Won</th>
							<th className="col-sm-1">Draw</th>
							<th className="col-sm-1">Lose</th>
							<th className="col-sm-1">Goals</th>
							<th className="col-sm-2">Points</th>
						</tr>
					</thead>
					<tbody>
						{this.renderList()}
					</tbody>
				</table>
      		</div>
		);
	}
};

// transform states to props
function mapStateToProps(state, ownProps) {
	// return props inside CompetitionShowGroupTable
	const competitionIndex = state.competition.competitionCodes.findIndex(code => code == ownProps.competition);
	const competitionState = state.competition.competitionState[competitionIndex];
	return {
		teams: state[competitionState].teams
	};
}

// transform a component to a container, adding new props to CompetitionShowGroupTable
export default connect(mapStateToProps, { fetchCompetitionGroupTable })(CompetitionShowGroupTable);
