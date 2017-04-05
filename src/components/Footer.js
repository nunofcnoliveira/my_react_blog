import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return(
			<div>
				<footer>
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
								<ul className="list-inline text-center">
									<li>
										<a href="https://twitter.com/cleverti_PT">
											<span className="fa-stack fa-lg">
												<i className="fa fa-circle fa-stack-2x"></i>
												<i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
											</span>
										</a>
									</li>
									<li>
										<a href="https://www.facebook.com/cleverti/">
											<span className="fa-stack fa-lg">
												<i className="fa fa-circle fa-stack-2x"></i>
												<i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
											</span>
										</a>
									</li>
									<li>
										<a href="https://github.com/cleverti">
											<span className="fa-stack fa-lg">
												<i className="fa fa-circle fa-stack-2x"></i>
												<i className="fa fa-github fa-stack-1x fa-inverse"></i>
											</span>
										</a>
									</li>
								</ul>
								<p className="copyright text-muted">Copyright &copy; My React Blog 2017 by Nuno Oliveira</p>
							</div>
						</div>
					</div>
				</footer>
			</div>
		)
	}
}

export default Footer;