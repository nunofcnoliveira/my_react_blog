import React, { Component } from 'react';
import Post from './Post';

import{
	NavLink
} from 'react-router-dom';

class MainContent extends Component {
	render() {
		if (this.props.blogPosts !== undefined) {
			var posts = this.props.blogPosts.slice(Number(this.props.firstPost), Number(this.props.lastPost)).map(function(content) {
				return <Post blogPost={content} key={content.id} />
			});

			if (this.props.showOlderPosts === "yes") {
				return(
					<div>
						{posts}

						<div className="container">
							<div className="row">
								<div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
									<ul className="pager">
										<li className="next">
											<NavLink to="/olderposts">Older Posts &rarr;</NavLink>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				)
			} else {
				return(
					<div>
						{posts}
					</div>
				)
			}
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

export default MainContent;