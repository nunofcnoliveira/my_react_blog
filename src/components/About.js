import React, { Component } from 'react';

import bgImage from '.././assets/img/about-bg.jpg';

import Navigation from './Navigation';
import PageHeader from './PageHeader';
import Footer from './Footer';

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wpData: undefined
		};
	}

	componentDidMount(){
		fetch("http://wordpress.cleverti.com/wp-json/wp/v2/pages/2")
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
			return(
				<div>
					<Navigation />
					<PageHeader divBgImage={bgImage} bigHeaderText="About Me" smallHeaderText="This is what I do." />

					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
								<div className="post-preview">
									{this.handleHtml(this.state.wpData.content.rendered)}
								</div>
							</div>
						</div>
					</div>

					<hr />
					<Footer />
				</div>
			)
		} else {
			return (
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
							<div className="post-preview">
								Loading...
							</div>
						</div>
					</div>
				</div>
			)
		}
	}
}

export default About;