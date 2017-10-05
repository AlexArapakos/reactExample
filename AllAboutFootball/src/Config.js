export default class Config {
	constructor() {
		// CL configs
		this.ROOT_CL_URL = 'https://heisenbug-champions-league-live-scores-v1.p.mashape.com/api/championsleague';
		this.API_CL_KEY = 'BvNoGEkItUmshRB6WFIntr3AH4FBp10pE5pjsnd0OL5AJd2W9c';//'2HiYkIOnGbmshmjbYyjXV3zKYf8Ap1kCw66jsnwOGOJqy015WK';
		this.CL_HEADERS = {
			headers: {
				'Accept': 'application/json',
				'X-Mashape-Key': this.API_CL_KEY
			}
		};
		this.CL_groups = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ];
		this.CL_matchDays = [ '1', '2', '3', '4', '5', '6' ];
		
		// EL configs
		this.ROOT_EL_URL = 'https://heisenbug-europa-league-live-scores-v1.p.mashape.com/api/europaleague';
		this.API_EL_KEY = '2HiYkIOnGbmshmjbYyjXV3zKYf8Ap1kCw66jsnwOGOJqy015WK';
		this.EL_HEADERS = {
			headers: {
				'Accept': 'application/json',
				'X-Mashape-Key': this.API_EL_KEY
			}
		};
		this.EL_groups = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L' ];
		this.EL_matchDays = [ '1', '2', '3', '4', '5', '6' ];

		// competition configs
		this.competitionNames = [ 'Champions League', 'Europa League' ];
		this.competitionCodes = [ 'CL', 'EL' ];
		this.competitionState = [ 'championsLeague', 'europaLeague' ];
	}
}