import React, { Component } from 'react';

import bgImage from '.././assets/img/contact-bg.jpg';

import Navigation from './Navigation';
import PageHeader from './PageHeader';
import Footer from './Footer';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wpData: undefined
		};
	}

	componentDidMount(){
		fetch("http://wordpress.cleverti.com/wp-json/wp/v2/pages/15")
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
					<PageHeader divBgImage={bgImage} bigHeaderText="Contact Me" smallHeaderText="Have questions? I have answers (maybe)." />

					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
								<div className="post-preview">
									{this.handleHtml(this.state.wpData.content.rendered)}

									<form name="sentMessage" id="contactForm" novalidate>
										<div className="row control-group">
											<div className="form-group col-xs-12 floating-label-form-group controls">
												<label>Name</label>
												<input type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name." />
												<p className="help-block text-danger"></p>
											</div>
										</div>
										<div className="row control-group">
											<div className="form-group col-xs-12 floating-label-form-group controls">
												<label>Email Address</label>
												<input type="email" className="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address." />
												<p className="help-block text-danger"></p>
											</div>
										</div>
										<div className="row control-group">
											<div className="form-group col-xs-12 floating-label-form-group controls">
												<label>Phone Number</label>
												<input type="tel" className="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number." />
												<p className="help-block text-danger"></p>
											</div>
										</div>
										<div className="row control-group">
											<div className="form-group col-xs-12 floating-label-form-group controls">
												<label>Message</label>
												<textarea rows="5" className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
												<p className="help-block text-danger"></p>
											</div>
										</div>
										<br />
										<div id="success"></div>
											<div className="row">
												<div className="form-group col-xs-12">
												<button type="submit" className="btn btn-default">Send</button>
											</div>
										</div>
									</form>
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

export default Contact;