import React from 'react';
import ReactDOM from 'react-dom';
import Example from '../containers/test.jsx';
import Home from '../containers/home.jsx';
import Settings from '../containers/settings.jsx';
import Game from '../containers/game.jsx';
import Score from '../containers/score.jsx';
import {Link, IndexRoute, browserHistory, DefaultRoute} from 'react-router';
import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/game' component={Game} />
            <Route path='/settings' component={Settings} />
            <Route path='/score' component={Score} />
          </div>
        </Router>
        <Example/>
      </div>
    );
  }
}

export default App;