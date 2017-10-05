import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMatches, fetchMatchesResults } from '../actions/index';

class CompetitionShowMatchResults extends Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	    	waitCondition: true
	    };
	}
	componentWillMount() {
		this.props.fetchMatches('emptyList');
		this.props.fetchMatchesResults(this.props.competition, 'emptyList');
	}
	componentWillReceiveProps(nextProps){
		const { competition, group, matchDay, matches } = this.props;
		if(matches.length == 0 && nextProps.matches.length == 0) {
			const day = matchDay === 'string' ? matchDay : matchDay[0];
			this.props.fetchMatchesResults(competition, group, day, 0);
			debugger;
		}
	}
	componentDidUpdate(prevProps, prevState){
		const { competition, group, matchDay, matches } = prevProps;
		const nextMatches = this.props.matches;
		const option = matches.matches ? matches.matches[0].when != nextMatches.matches[0].when : true;
		if(nextMatches.matches && option) {
			this.props.fetchMatches(nextMatches.matches);
			this.setState({
				waitCondition: false
			});
			/*if (typeof matchDay === 'object'){
				matchDay.map((day, i) => {
					this.props.fetchMatchesResults(competition, group, day).then(() => {
						this.props.fetchMatches(nextProps.matches.matches);
					});
				});
			}
			else{
				this.props.fetchMatchesResults(competition, group, matchDay).then(() => {
					this.props.fetchMatches(nextProps.matches.matches);
				});
			}*/
			debugger;
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
	// return props inside CompetitionShowMatchResults
	return {
		matches: state.competition.matches,
		currentMatches: state.competition.currentMatches
	};
}

// transform a component to a container, adding new props to CompetitionShowMatchResults
export default connect(mapStateToProps, { fetchMatches, fetchMatchesResults })(CompetitionShowMatchResults);
