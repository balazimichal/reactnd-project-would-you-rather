import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import middleware from './middleware'
import reducer from './reducers'
import Header from './components/Header'
import Login from './components/Login'
import Questions from './components/Questions'
import Question from './components/Question'
import Leaderboard from './components/Leaderboard'
import Add from './components/Add'
import NotFound from './components/NotFound'
import './App.css'

const store = createStore(reducer, middleware)

class App extends Component {
  render() {
    return <Provider store={store}>
    <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/questions" component={Questions} />
            <Route exact path="/questions/:question_id" component={Question} />
            <Route exact path="/leaderboard" component={Leaderboard} />
            <Route exact path="/add" component={Add} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>;
  }
}

export default App;
