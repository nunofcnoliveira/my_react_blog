import React, { Component } from 'react';

import bgImage from '.././assets/img/home-bg.jpg';

import Navigation from './Navigation';
import PageHeader from './PageHeader';
import MainContent from './MainContent';
import Footer from './Footer';

class OlderPosts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wpData: undefined
		};
	}

	componentDidMount(){
		fetch("http://wordpress.cleverti.com/wp-json/wp/v2/posts")
		.then(function(response) {
			return response.json()
		}).then(function(json) {
			console.log('Parsing json', json);
			this.setState({wpData: json});
		}.bind(this)).catch(function(ex) {
			console.log('Parsing failed', ex)
		})
	}

	render() {
		Object.size = function(obj) {
			var size = 0, key;
			for (key in obj) {
				if (obj.hasOwnProperty(key)) size++;
			}
			return size;
		};

		var totalPosts = Object.size(this.state.wpData);

		if (totalPosts > 4) {
			return(
				<div>
					<Navigation />
					<PageHeader divBgImage={bgImage} bigHeaderText="My React Blog" smallHeaderText="The Next Step in React Awesomeness. Hopefully." />
					<MainContent blogPosts={this.state.wpData} firstPost={4} lastPost={totalPosts} showOlderPosts="no" />
					<hr />
					<Footer />
				</div>
			)
		} else {
			return(
				<div>
					<Navigation />
					<PageHeader divBgImage={bgImage} bigHeaderText="My React Blog" smallHeaderText="The Next Step in React Awesomeness. Hopefully." />

					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
								<div className="post-preview">
									Sorry, there are no older posts. Be patient, and come back later.
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

export default OlderPosts;