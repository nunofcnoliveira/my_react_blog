import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/css/clean-blog.min.css';
import './assets/vendor/font-awesome/css/font-awesome.min.css';

// Note: for some reason could not import jquery & other js files that depend on it. Had to resort to call them the old-fashioned way in /public/index.html

// import './assets/vendor/jquery/jquery.min.js';
// import $ from 'jquery';
// import './assets/vendor/bootstrap/js/bootstrap.min.js';
// import './assets/js/jqBootstrapValidation.js';
// import './assets/js/contact_me.js';
// import './assets/js/clean-blog.min.js';

// import App from './App';
import AppRouter from './AppRouter';

ReactDOM.render(
	<AppRouter />,
	document.getElementById('root')
);
