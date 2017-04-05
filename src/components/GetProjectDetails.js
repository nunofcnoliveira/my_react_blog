import React, { Component } from 'react';

class GetProjectDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wpData: undefined
		};
	}

	componentDidMount(){
		fetch("http://wordpress.cleverti.com/wp-json")
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
			if (this.props.whatToPass === "name") {
				return (
					<span className="post-meta">
						{this.handleHtml(this.state.wpData.name)}
					</span>
				)
			} else if (this.props.whatToPass === "description") {
				return (
					<span className="post-meta">
						{this.handleHtml(this.state.wpData.description)}
					</span>
				)
			}
		} else {
			return (
				<div>
					Loading...
				</div>
			)
		}
	}
}

export default GetProjectDetails;