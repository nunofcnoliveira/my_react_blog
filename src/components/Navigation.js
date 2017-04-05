import React, { Component } from 'react';

import{
	NavLink
} from 'react-router-dom';

class Navigation extends Component {
	render() {
		return(
			<div>
				<nav className="navbar navbar-default navbar-custom navbar-fixed-top">
					<div className="container-fluid">
						<div className="navbar-header page-scroll">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
								<span className="sr-only">Toggle navigation</span>
								Menu <i className="fa fa-bars"></i>
							</button>
							<NavLink activeClassName="navbar-brand" to="/">Start Bootstrap</NavLink>
						</div>

						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav navbar-right">
								<li>
									<NavLink activeClassName="selected" to="/">Home</NavLink>
								</li>
								<li>
									<NavLink activeClassName="selected" to="/About">About</NavLink>
								</li>
								<li>
									<NavLink activeClassName="selected" to="/Contact">Contact</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		)
	}
}

export default Navigation;