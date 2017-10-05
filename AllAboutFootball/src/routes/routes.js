import React from 'react';
import { Route, IndexRoute } from 'react-router';

/*import { onClTableEnter } from './route_callback';*/
import App from '../pages/app';
import Wellcome from '../pages/wellcome';

import CompetitionMainPage from '../pages/competition_main_page';
import CompetitionGroupTablePage from '../pages/competition_group_table_page';
import CompetitionMatchResultPage from '../pages/competition_match_result_page';

export default (
	<Route path="/" component={App} >
		<IndexRoute component={Wellcome} />
		
		<Route path=":competition/main" component={CompetitionMainPage} />
		<Route path=":competition/group-table/:group" component={CompetitionGroupTablePage} />
		<Route path=":competition/match-result/:group/:day" component={CompetitionMatchResultPage} />
		
	</Route>
);

//  add in path="CL/group-tables": onEnter={onClTableEnter}
