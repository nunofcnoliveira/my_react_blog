import React, { Component } from 'react';

import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import OlderPosts from './components/OlderPosts';
import PostDetails from './components/PostDetails';
import NoMatch from './components/NoMatch';

class AppRouter extends Component {
render() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/About" component={About} />
				<Route exact path="/Contact" component={Contact} />
				<Route exact path="/olderposts" component={OlderPosts} />
				<Route exact path="/postdetails/:postId" component={PostDetails} />
				<Route path="*" component={NoMatch} />
			</Switch>
		</Router>
		);
	}
}

export default AppRouter;
