import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import LoadingBar from 'react-redux-loading'
import Header from './components/Header'
import Login from './components/Login'
import Questions from './components/Questions'
import Question from './components/Question'
import Leaderboard from './components/Leaderboard'
import Add from './components/Add'
import NotFound from './components/NotFound'
import './App.css'



class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return <Router>
        <Fragment>
        <LoadingBar style={{ backgroundColor: 'purple', height: '3px' }} />
          <Header />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Questions} />
            <Route exact path="/questions/:question_id" component={Question} />
            <Route exact path="/leaderboard" component={Leaderboard} />
            <Route exact path="/add" component={Add} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>;
  }
}


function mapStateToProps ({ authedUser }) {
  return {
    logedin: authedUser === null
  }
}

export default connect(mapStateToProps)(App);


/*
{this.props.logedin === true
            ? <Route exact path="/" component={Login} />
            : <Route exact path="/questions" component={Questions} />}
*/