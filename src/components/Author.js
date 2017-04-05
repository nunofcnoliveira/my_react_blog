import React, { Component } from 'react';

class Author extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wpData: undefined
		};
	}

	componentDidMount(){
		fetch("http://wordpress.cleverti.com/wp-json/wp/v2/users/" + this.props.authorId)
		.then(function(response) {
			return response.json()
		}).then(function(json) {
			console.log('parser json', json);
			this.setState({wpData: json});
		}.bind(this)).catch(function(ex) {
			console.log('parsing failed', ex)
		})
	}

	render() {
		if (this.state.wpData !== undefined) {
			return (
				<span className="post-meta">
					{this.state.wpData.name}
				</span>
			)
		} else {
			return (
				<div>
					Loading...
				</div>
			)
		}
	}
}

export default Author;