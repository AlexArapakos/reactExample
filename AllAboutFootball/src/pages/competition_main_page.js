import React, { Component } from 'react';
import { Link } from 'react-router';

import Config from '../Config';

const configInstance = new Config();

export default class CompetitionMainPage extends Component {
	linkTablePerGroupButtons(){
		const { competition } = this.props.params;
		return configInstance[competition+'_groups'].map((group) => {
			return (
				<Link key={"link_"+group+"_table"} to={"/"+competition+"/group-table/"+group} className="btn btn-primary">
	      			{competition} Group {group} Table
	      		</Link>
			);
		});
	}
	linkMatchPerGroupButtons(){
		const { competition } = this.props.params;
		return configInstance[competition+'_groups'].map((group) => {
			return (
				<Link key={"link_"+group+"_matches"} to={"/"+competition+"/match-result/"+group+'/allDays'} className="btn btn-primary">
	      			{competition} Group {group} Matches
	      		</Link>
			);
		});
	}
	linkButtonsPerMatchDay() {
		const { competition } = this.props.params;
		return configInstance[competition+'_matchDays'].map((day) => {
			return (
				<Link key={"matchDay_"+day} to={"/"+competition+"/match-result/allGroups/"+day} className="col-sm-2 btn btn-primary">
	      			{competition} Day {day}
	      		</Link>
			);
		});
	}
	render() {
		const { competition } = this.props.params;
		const competitionIndex = configInstance.competitionCodes.findIndex(code => code == competition);
		return (
			<div>
				<h1>{configInstance.competitionNames[competitionIndex]}</h1>
				<div className= "row">
					<div className="col-sm-12">
						<Link to={"/"+competition+"/group-table/allGroups"} className="btn btn-primary">
			      			{competition} Group Tables
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