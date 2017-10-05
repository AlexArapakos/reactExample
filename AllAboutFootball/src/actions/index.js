import axios from 'axios';

import Config from '../Config';
import { 
	FETCH_MATCHES,
	FETCH_GROUP_TABLE, 
	FETCH_MATCHES_RESULTS
} from './types';

const configInstance = new Config();


// Competition actions
export function fetchMatches(matches) {
	return {
		type: FETCH_MATCHES, 
		payload: matches
	};
}

export function fetchGroupTable(competition, group) {
	const config = { ...configInstance[competition+'_HEADERS'], params: { group: group } };
	const request = /*axios.get(`${configInstance['ROOT_'+competition+'_URL']}/table`, config);*/ JSON.parse(`{"data":{"records":[
		{"team":"Lyon","played":1,"win":1,"draw":0,"loss":0,"goalsFor":3,"goalsAgainst":0,"points":3},
		{"team":"Juventus","played":1,"win":0,"draw":1,"loss":0,"goalsFor":0,"goalsAgainst":0,"points":1},
		{"team":"Sevilla","played":1,"win":0,"draw":1,"loss":0,"goalsFor":0,"goalsAgainst":0,"points":1},
		{"team":"Dinamo Zagreb","played":1,"win":0,"draw":0,"loss":1,"goalsFor":0,"goalsAgainst":3,"points":0}]}}`);
	/*return (dispatch) => {
		request.then(response => {
			console.log(response);*/
			return {
				type: FETCH_GROUP_TABLE, 
				payload: request //response 
			};
		/*});
	}*/
}

export function fetchMatchesResults(competition, group, matchday, time) {
	let request = { data: [] };
	if(group != 'emptyList') {
		const config = { ...configInstance[competition+'_HEADERS'], params: { group,  matchday } };
		request = /*axios.get(`${configInstance['ROOT_'+competition+'_URL']}`, config);*/ JSON.parse(`{"data":{"matches":[
			{"when":"Tuesday, Sep 13 2016 19:4${time}","team1":{"teamName":"FC Basel 1893"},"team2":{"teamName":"Ludogorets Razgrad"},"group":"A"},
			{"when":"Tuesday, Sep 13 2016 19:45","team1":{"teamName":"Paris Saint Germain"},"team2":{"teamName":"Arsenal"},"group":"A"}]}}`);
	}
	return {
		type: FETCH_MATCHES_RESULTS, 
		payload: request
	};
}
