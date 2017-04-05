import store from '../store';
import { fetchPost, fetchPosts} from '../actions/index';

export function onIndexEnter() {
	store.dispatch(fetchPosts());
};

export function onShowPostEnter(id) {
	store.dispatch(fetchPost(id));
};
