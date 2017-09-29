import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/app';

import PostsIndex from '../components/blog/posts_index';
import { onIndexEnter } from './route_callback';
import PostsNew from '../components/blog/posts_new';
import PostsShow from '../components/blog/posts_show';

import requireAuth from '../components/auth/require_auth';
import Resources from '../components/auth/resources';

import UserList from '../components/middleware/user_list';

export default (
	<Route path="/" component={App} >
		<IndexRoute component={PostsIndex} onEnter={onIndexEnter} />
		<Route path="posts/new" component={PostsNew} />
		<Route path="post/:id" component={PostsShow} />
		<Route path="resources" component={requireAuth(Resources)} />
		<Route path="middleware" component={UserList} />
	</Route>
);
