import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Wellcome extends Component {
	renderButtons() {
		return  this.props.competitionCodes.map((code, i) => {
			return (
				<div key={"competition_"+code}>
					<Link to={"/"+code+"/main"} className="btn btn-primary">
		      			{this.props.competitionNames[i]}
		      		</Link>
		      		<br />
				</div>
			);
		});
	}
	render() {
		return (
			<div>
				<h1>React Football App</h1>
				{this.renderButtons()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	// return props inside Wellcome
	return {
		competitionNames: state.competition.competitionNames,
		competitionCodes: state.competition.competitionCodes
	};
}

// transform a component to a container, adding new props to Wellcome
export default connect(mapStateToProps)(Wellcome);