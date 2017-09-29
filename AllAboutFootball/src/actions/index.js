import axios from 'axios';

import { 
	FETCH_MATCHES,										// competition types
	FETCH_CL_GROUP_TABLE, FETCH_CL_MATCHES_RESULTS,		// championsLeague types
	FETCH_EL_GROUP_TABLE, FETCH_EL_MATCHES_RESULTS,		// europaLeague types
} from './types';



// Champions League constants
const ROOT_CL_URL = 'https://heisenbug-champions-league-live-scores-v1.p.mashape.com/api/championsleague';
const API_CL_KEY = 'BvNoGEkItUmshRB6WFIntr3AH4FBp10pE5pjsnd0OL5AJd2W9c';//'2HiYkIOnGbmshmjbYyjXV3zKYf8Ap1kCw66jsnwOGOJqy015WK';
const CL_HEADERS = {
	headers: {
		'Accept': 'application/json',
		'X-Mashape-Key': API_CL_KEY
	}
}

// Europa League constants
const ROOT_EL_URL = 'https://heisenbug-europa-league-live-scores-v1.p.mashape.com/api/europaleague';
const API_EL_KEY = '2HiYkIOnGbmshmjbYyjXV3zKYf8Ap1kCw66jsnwOGOJqy015WK';
const EL_HEADERS = {
	headers: {
		'Accept': 'application/json',
		'X-Mashape-Key': API_EL_KEY
	}
}



// Competition actions
export function fetchMatches(matches) {
	return {
		type: FETCH_MATCHES, 
		payload: matches
	};
}

// Champions League actions
export function fetchCompetitionGroupTable(competition, group) {
	if(competition == 'CL') {
		const config = { ...CL_HEADERS, params: { group: group } };
		const request = /*axios.get(`${ROOT_CL_URL}/table`, config);*/ JSON.parse(`{"data":{"records":[
			{"team":"Lyon","played":1,"win":1,"draw":0,"loss":0,"goalsFor":3,"goalsAgainst":0,"points":3},
			{"team":"Juventus","played":1,"win":0,"draw":1,"loss":0,"goalsFor":0,"goalsAgainst":0,"points":1},
			{"team":"Sevilla","played":1,"win":0,"draw":1,"loss":0,"goalsFor":0,"goalsAgainst":0,"points":1},
			{"team":"Dinamo Zagreb","played":1,"win":0,"draw":0,"loss":1,"goalsFor":0,"goalsAgainst":3,"points":0}]}}`);
		/*return (dispatch) => {
			request.then(response => {
				console.log(response);*/
				return {
					type: FETCH_CL_GROUP_TABLE, 
					payload: request //response 
				};
			/*});
		}*/
	}
	if(competition == 'EL') {
		const config = { ...EL_HEADERS, params: { group: group } };
		const request = /*axios.get(`${ROOT_EL_URL}/table`, config);*/ JSON.parse(`{"data":{"records":[
			{"team":"Olympiakos","played":1,"win":1,"draw":0,"loss":0,"goalsFor":3,"goalsAgainst":0,"points":3},
			{"team":"Juventus","played":1,"win":0,"draw":1,"loss":0,"goalsFor":0,"goalsAgainst":0,"points":1},
			{"team":"Barcelona","played":1,"win":0,"draw":1,"loss":0,"goalsFor":0,"goalsAgainst":0,"points":1},
			{"team":"Sporting","played":1,"win":0,"draw":0,"loss":1,"goalsFor":0,"goalsAgainst":3,"points":0}]}}`);
		return {
			type: FETCH_EL_GROUP_TABLE, 
			payload: request
		};
	}
}

export function fetchCompetitionMatchesResults(competition, group, matchday) {
	if(competition == 'CL') {
		const config = { ...CL_HEADERS, params: { group,  matchday } };
		const request = /*axios.get(`${ROOT_CL_URL}`, config);*/ JSON.parse(`{"data":{"matches":[
			{"when":"Tuesday, Sep 13 2016 19:4${time}","team1":{"teamName":"FC Basel 1893"},"team2":{"teamName":"Ludogorets Razgrad"},"group":"A"},
			{"when":"Tuesday, Sep 13 2016 19:45","team1":{"teamName":"Paris Saint Germain"},"team2":{"teamName":"Arsenal"},"group":"A"}]}}`);
		return {
			type: FETCH_CL_MATCHES_RESULTS, 
			payload: request
		};
	}
	if(competition == 'EL') {
		const config = { ...EL_HEADERS, params: { group,  matchday } };
		const request = axios.get(`${ROOT_EL_URL}`, config); /*JSON.parse(`{"data":{"matches":[
			{"when":"Tuesday, Sep 13 2016 19:45","team1":{"teamName":"Olympiakos"},"team2":{"teamName":"Barcelona"},"group":"A"},
			{"when":"Tuesday, Sep 13 2016 19:45","team1":{"teamName":"Barcelona"},"team2":{"teamName":"Olympiakos"},"group":"A"}]}}`);*/
		return {
			type: FETCH_EL_MATCHES_RESULTS, 
			payload: request
		};
	}
}
