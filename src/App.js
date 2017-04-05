import React, { Component } from 'react';
import 'whatwg-fetch';

import Navigation from './components/Navigation';
import PageHeader from './components/PageHeader';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import GetProjectDetails from './components/GetProjectDetails';

import bgImage from './assets/img/home-bg.jpg';

class App extends Component {
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
		var getName = <GetProjectDetails whatToPass="name" />
		var getDescription = <GetProjectDetails whatToPass="description" />

		return (
			<div>
				<Navigation />
				<PageHeader divBgImage={bgImage} bigHeaderText={getName} smallHeaderText={getDescription} />
				<MainContent blogPosts={this.state.wpData} firstPost={0} lastPost={4} showOlderPosts="yes" />
				<hr />
				<Footer />
			</div>
		);
	}
}

export default App;
