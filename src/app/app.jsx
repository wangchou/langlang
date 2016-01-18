import React, { PropTypes, Component } from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import MapPage from './mapPage';
import HeaderBar from './headerBar';

class App extends Component {
  constructor(props, context){
    super(props, context);
  }

  render(){
    return (
      <div>
        <HeaderBar/>
        {this.props.children}
      </div>
    );
  }
}

(function () {

  //Needed for React Developer Tools
  window.React = React;

  ReactDom.render((
    <Router>
      <Route path='/' component={App}>
        <IndexRoute component={MapPage} />
      </Route>
    </Router>
  ), document.getElementById('app'));

})();
