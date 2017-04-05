import React, { Component } from 'react';
import '.././App.css';

class NoMatch extends Component{
    render(){
        return(
            <div className="No-Match">
                <h1>404</h1>
                Page not found!
            </div>
        );
    }
}

export default NoMatch;