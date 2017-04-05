import React, { Component } from 'react';
import Author from './Author';

import{
	NavLink
} from 'react-router-dom';

class Post extends Component {
	handleHtml(variable) {
		return <div dangerouslySetInnerHTML={{__html:variable}} />;
	}

	render() {
		var postDate = new Date(this.props.blogPost.date)
		var options = { year: 'numeric', month: 'long', day: 'numeric' };
		postDate = postDate.toLocaleDateString("en-US", options)

		var currPostDetailsLink = "/postdetails/" + this.props.blogPost.id;

		if (this.props.blogPost !== undefined) {
			return (
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
							<div className="post-preview">
								<NavLink to={currPostDetailsLink}>
									<h2 className="post-title">
										{this.props.blogPost.title.rendered}
									</h2>
									<h3 className="post-subtitle">
										{this.handleHtml(this.props.blogPost.excerpt.rendered)}
									</h3>
								</NavLink>
								<p className="post-meta">Posted by <a href="#"><Author authorId={this.props.blogPost.author} /></a> on {postDate}</p>
							</div>
							<hr />
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
							<div className="post-preview">
								Loading...
							</div>
							<hr />
						</div>
					</div>
				</div>
			)
		}
	}
}

export default Post;
