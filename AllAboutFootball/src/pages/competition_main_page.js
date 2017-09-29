import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class CompetitionMainPage extends Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	    	competition: this.props.params.competition,
	    	competitionIndex: this.props.competitionCodes.findIndex(code => code == this.props.params.competition)
	    };
	}
	linkTablePerGroupButtons(){
		return this.props.groups.map((group) => {
			return (
				<Link key={"link_"+group+"_table"} to={"/"+this.state.competition+"/group-table/"+group} className="btn btn-primary">
	      			{this.state.competition} Group {group} Table
	      		</Link>
			);
		});
	}
	linkMatchPerGroupButtons(){
		return this.props.groups.map((group) => {
			return (
				<Link key={"link_"+group+"_matches"} to={"/"+this.state.competition+"/match-result/"+group+'/allDays'} className="btn btn-primary">
	      			{this.state.competition} Group {group} Matches
	      		</Link>
			);
		});
	}
	linkButtonsPerMatchDay() {
		return this.props.matchDays.map((day) => {
			return (
				<Link key={"matchDay_"+day} to={"/"+this.state.competition+"/match-result/allGroups/"+day} className="col-sm-2 btn btn-primary">
	      			{this.state.competition} Day {day}
	      		</Link>
			);
		});
	}
	render() {
		return (
			<div>
				<h1>{this.props.competitionNames[this.state.competitionIndex]}</h1>
				<div className= "row">
					<div className="col-sm-12">
						<Link to={"/"+this.state.competition+"/group-tables"} className="btn btn-primary">
			      			{this.state.competition} Group Tables
			      		</Link>
					</div>
				</div>
				<br />
				<div className= "row">
					<div className="col-sm-6 btn-group-vertical">
						{this.linkTablePerGroupButtons()}
					</div>
					<div className="col-sm-6 btn-group-vertical">
						{this.linkMatchPerGroupButtons()}
					</div>
				</div>
	      		<br />
	      		<div className= "row">
					<div className="col-sm-12 btn-group btn-group-justify">
						{this.linkButtonsPerMatchDay()}
					</div>
				</div>
	      		<br />
				<Link to="/" className="btn btn-primary">Back</Link>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	// return props inside CompetitionMainPage
	const competitionIndex = state.competition.competitionCodes.findIndex(code => code == ownProps.params.competition);
	const competitionState = state.competition.competitionState[competitionIndex];
	return {
		competitionNames: state.competition.competitionNames,
		competitionCodes: state.competition.competitionCodes,
		groups: state[competitionState].groups,
		matchDays: state[competitionState].matchDays
	};
}

// transform a component to a container, adding new props to CompetitionMainPage
export default connect(mapStateToProps)(CompetitionMainPage);