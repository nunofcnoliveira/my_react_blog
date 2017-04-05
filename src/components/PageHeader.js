import React, { Component } from 'react';

class PageHeader extends Component {
	render() {
		// console.log(this.props.bigHeaderText);

		var divStyle = { backgroundImage: 'url(' + this.props.divBgImage + ')' };

		if (this.props.bigHeaderText !== undefined) {
			return(
				<div>
					<header className="intro-header" style={divStyle}>
						<div className="container">
							<div className="row">
								<div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
									<div className="site-heading">
										<h1>{this.props.bigHeaderText}</h1>
										<hr className="small" />
										<span className="subheading">{this.props.smallHeaderText}</span>
									</div>
								</div>
							</div>
						</div>
					</header>
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
							<hr />
						</div>
					</div>
				</div>
			)
		}
	}
}

export default PageHeader;