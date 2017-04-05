import React, { Component } from 'react';

import bgImage from '.././assets/img/home-bg.jpg';

import Navigation from './Navigation';
import PageHeader from './PageHeader';
import Footer from './Footer';

class PostDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wpData: undefined
		};
	}

	componentDidMount(){
		fetch("http://wordpress.cleverti.com/wp-json/wp/v2/posts/" + this.props.match.params.postId)
		.then(function(response) {
			return response.json()
		}).then(function(json) {
			console.log('parser json', json);
			this.setState({wpData: json});
		}.bind(this)).catch(function(ex) {
			console.log('parsing failed', ex)
		})
	}

	handleHtml(variable) {
		return <div dangerouslySetInnerHTML={{__html:variable}} />;
	}

	render() {
		if (this.state.wpData !== undefined) {
			return (
				<div>
					<Navigation />
					<PageHeader divBgImage={bgImage} bigHeaderText="My React Blog" smallHeaderText="The Next Step in React Awesomeness. Hopefully." />
					
					<article>
						<div className="container">
							<div className="row">
								<div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
									<div className="post-preview">
										<h2 className="post-title">
											{this.state.wpData.title.rendered}
										</h2>
										{this.handleHtml(this.state.wpData.content.rendered)}
									</div>
								</div>
							</div>
						</div>
					</article>

					<hr />
					<Footer />
				</div>
			)
		} else {
			return (
				<div>
					<Navigation />
					<PageHeader divBgImage={bgImage} bigHeaderText="My React Blog" smallHeaderText="The Next Step in React Awesomeness. Hopefully." />
					
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
								<div className="post-preview">
									Loading...
								</div>
							</div>
						</div>
					</div>

					<hr />
					<Footer />
				</div>
			)
		}
	}
}

export default PostDetails;