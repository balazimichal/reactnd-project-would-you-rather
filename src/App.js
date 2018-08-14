import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
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
import Logout from './components/Logout'
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
            <PrivateRoute exact path="/" component={Questions} logedin={this.props.logedin}/>
            <PrivateRoute exact path="/questions/:question_id" component={Question} logedin={this.props.logedin}/>
            <PrivateRoute exact path="/leaderboard" component={Leaderboard} logedin={this.props.logedin}/>
            <PrivateRoute exact path="/add" component={Add} logedin={this.props.logedin}/>
            <Route component={Logout} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>;
  }
}



const PrivateRoute = ({ component: Component, ...rest }) => (

  <Route {...rest} render={(props) => (
    props.logedin !== null
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />

  
)


function mapStateToProps ({ authedUser }) {
  return {
    logedin: authedUser
  }
}

export default connect(mapStateToProps)(App);


/*
{this.props.logedin === true
            ? <Route exact path="/" component={Login} />
            : <Route exact path="/questions" component={Questions} />}
*/