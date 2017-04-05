import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Quotes from './quotes';
import Modal from './modal';
import { toggleModal } from '../actions/index';

class PostsIndex extends Component {
  renderPosts() {
  	return this.props.posts.map((post) => {
  		return (
  			<li className="list-group-item" key={post.id}>
          <Link to={`post/${post.id}`} >
    				<span className="pull-xs-right">{post.categories}</span>
    				<strong>{post.title}</strong>
          </Link>
  			</li>
  		);
  	});
  }
  toggleModalState() {
    this.props.toggleModal(!this.props.modal);
  }
  render() {
    return (
      <div>
      	<div className="text-xs-right">
      		<Link to="/posts/new" className="btn btn-primary">
      			Add a Post
      		</Link>
          <button 
            className="btn btn-warning" 
            onClick={this.toggleModalState.bind(this)}>
            See Modal
          </button>
      	</div>
      	<h3>Posts</h3>
      	<ul className="list-group">
      		{this.renderPosts()}
      	</ul>
        <Modal>
          <Quotes />
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return { 
    posts: state.posts.all,
    modal: state.modal
   };
}

// transform a component to a container, adding new props to PostsIndex
export default connect(mapStateToProps, { toggleModal })(PostsIndex);
